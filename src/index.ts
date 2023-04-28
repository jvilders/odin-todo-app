import "./style.css";
import EditImage from "./pencil-outline.svg";
import RemoveImage from "./close-outline.svg";
import TrashImage from "./trash-can-outline.svg";
import NoteImage from "./note-outline.svg";
import PlusImage from "./plus.svg";

// localStorage stuff

interface ISavable<U> {
  serialize(): U;
}

// Model
// Todo items
enum Priority {
  Low = 0,
  Medium,
  High,
  Critical,
}

interface TodoItemProps {
  itemTitle: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  isComplete: boolean;
}

interface ITodoItem {
  itemId: number;
  itemTitle: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  isComplete: boolean;
}

type ISavableTodoItem = ITodoItem & ISavable<TodoItemProps>;

const createTodoItem = (function () {
  let itemIdCounter = 0;

  function createTodoItem(props: TodoItemProps): ISavableTodoItem {
    // other methods can be defined in the closure here
    function serialize() {
      return props;
    }

    return {
      itemId: itemIdCounter++,
      itemTitle: props.itemTitle,
      description: props.description,
      dueDate: props.dueDate,
      priority: props.priority,
      isComplete: props.isComplete,

      serialize: serialize,
    };
  }

  return createTodoItem;
})();

// Project
interface ProjectProps {
  projectTitle: string;
  todoItems: TodoItemProps[];
}

interface IProject {
  projectId: number;
  projectTitle: string;
  todoItems: ISavableTodoItem[];

  createTodoItem(props: TodoItemProps): ISavableTodoItem;
  readTodoItem(itemId: number): undefined | ISavableTodoItem;
  updateTodoItem(itemId: number, props: TodoItemProps): void;
  deleteTodoItem(itemId: number): void;
}

type ISavableProject = IProject & ISavable<ProjectProps>;

const createProject = (function () {
  let projectIdCounter = 0;

  function createProject(
    props: ProjectProps,
    commitCallback: (projectId: number) => void
  ): ISavableProject {
    const todoItems = props.todoItems.map((todoItemProps) =>
      createTodoItem(todoItemProps)
    );
    const projectTitle = props.projectTitle;
    const projectId = projectIdCounter++;
    const curriedCommitCallback = () => commitCallback(projectId);

    const _createTodoItem = function (props: TodoItemProps): ISavableTodoItem {
      const newItem = createTodoItem(props);
      todoItems.push(newItem);
      _commit();
      return newItem;
    };

    function readTodoItem(itemId: number): undefined | ISavableTodoItem {
      for (const todoItem of todoItems) {
        if (todoItem.itemId == itemId) {
          _commit();
          return todoItem;
        }
      }
    }

    function updateTodoItem(itemId: number, props: TodoItemProps): void {
      for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].itemId == itemId) {
          todoItems[i] = createTodoItem(props);
          _commit();
          break;
        }
      }
    }

    function deleteTodoItem(itemId: number): void {
      for (let i = 0; i < todoItems.length; i++) {
        if (todoItems[i].itemId == itemId) {
          todoItems.splice(i, 1);
          _commit();
          break;
        }
      }
    }

    function _commit() {
      curriedCommitCallback();
    }

    function serialize(): ProjectProps {
      return {
        projectTitle: projectTitle,
        todoItems: todoItems.map((todoItem) => todoItem.serialize()),
      };
    }

    return {
      projectId: projectId,
      todoItems: todoItems,
      projectTitle: projectTitle,

      createTodoItem: _createTodoItem,
      readTodoItem: readTodoItem,
      updateTodoItem: updateTodoItem,
      deleteTodoItem: deleteTodoItem,

      serialize: serialize,
    };
  }

  return createProject;
})();

// All projects
interface IModel {
  projects: IProject[];

  createProject(projectProps: ProjectProps): IProject;
  readProject(projectId: number): null | IProject;
  updateProjectTitle(projectId: number, projectTitle: string): void;
  deleteProject(projectId: number): void;

  bindRender(cb: () => void): void;

  getActiveProject(): IProject | null;
}

// Date objects become strings after JSON.stringify, so type of deserialized object is different
type deserializedTodoItemProps = Omit<TodoItemProps, "dueDate"> & {
  dueDate: string;
};
type deserializedProjectProps = Omit<ProjectProps, "todoItems"> & {
  todoItems: deserializedTodoItemProps[];
};

const model = (function (): IModel {
  const localStorageKey = "projects";
  function _saveToLocalStorage(): void {
    const serializedProjects = projects.map((project) => project.serialize());
    localStorage.setItem(localStorageKey, JSON.stringify(serializedProjects));
    console.log("mocked save");
  }

  function _initializeFromLocalStorage(): ISavableProject[] {
    const s = localStorage.getItem(localStorageKey);
    if (s === null) {
      return [];
    }

    const deserializedProjectProps = JSON.parse(
      s
    ) as deserializedProjectProps[];
    const properProjectProps: ProjectProps[] = deserializedProjectProps.map(
      (deserializedProjectProps) => {
        const properTodoItemProps: TodoItemProps[] =
          deserializedProjectProps.todoItems.map(
            (deserializedTodoItemProps) => {
              const newProps: TodoItemProps = {
                itemTitle: deserializedTodoItemProps.itemTitle,
                description: deserializedTodoItemProps.description,
                dueDate: new Date(deserializedTodoItemProps.dueDate),
                priority: deserializedTodoItemProps.priority,
                isComplete: deserializedTodoItemProps.isComplete,
              };
              return newProps;
            }
          );
        return {
          projectTitle: deserializedProjectProps.projectTitle,
          todoItems: properTodoItemProps,
        };
      }
    );

    console.log({ ...deserializedProjectProps });
    return properProjectProps.map((projectArgs) => {
      return createProject(projectArgs, _commit);
    });
  }

  const projects: ISavableProject[] = _initializeFromLocalStorage();
  let currentActiveProject: number | null = null;
  let renderCallBack = function () {
    return;
  };

  function _createProject(projectProps: ProjectProps): IProject {
    const newProject = createProject(projectProps, _commit);
    projects.push(newProject);
    _commit(newProject.projectId);
    return newProject;
  }

  function readProject(projectId: number) {
    for (const project of projects) {
      if (project.projectId == projectId) {
        _commit(projectId);
        return project;
      }
    }
    return null;
  }

  function updateProjectTitle(projectId: number, projectTitle: string) {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].projectId == projectId) {
        projects[i].projectTitle = projectTitle;
        _commit(projectId);
        break;
      }
    }
  }

  function deleteProject(projectId: number): void {
    for (let i = 0; i < projects.length; i++) {
      if (projects[i].projectId == projectId) {
        projects.splice(i, 1);
        _commit(null);
        break;
      }
    }
  }

  function bindRender(cb: () => void): void {
    renderCallBack = cb;
  }

  function _commit(projectId: number | null) {
    currentActiveProject = projectId;
    _saveToLocalStorage();
    renderCallBack();
  }

  function getActiveProject(): IProject | null {
    if (currentActiveProject === null) {
      return null;
    }
    const activeProject = projects.find(
      (value) => value.projectId === currentActiveProject
    );
    if (activeProject === undefined) {
      throw `Cannot retrieve active project, id of active project is ${currentActiveProject}`;
    }
    return activeProject;
  }

  return {
    projects: projects,

    createProject: _createProject,
    readProject: readProject,
    updateProjectTitle: updateProjectTitle,
    deleteProject: deleteProject,

    bindRender: bindRender,

    getActiveProject: getActiveProject,
  };
})();

// Views
function _verifyNotNull<T>(p: null | T): T {
  if (p === null) {
    throw "Should not be null!";
  }
  return p;
}

function _createElement<T extends keyof HTMLElementTagNameMap>(
  tag: T,
  classes?: string[]
): HTMLElementTagNameMap[T] {
  const element = document.createElement(tag);
  if (classes) {
    element.classList.add(...classes);
  }
  return element;
}

function ignoreEnterCallback(keyEvent: KeyboardEvent) {
  if (keyEvent.key === "Enter") {
    keyEvent.preventDefault();
  }
}

// sidebarView
interface ISidebarView {
  bindCreateProject(cb: (projectProps: ProjectProps) => void): void;
  bindReadProject(cb: (projectId: number) => void): void;
  bindUpdateProject(
    cb: (projectIndex: number, projectTitle: string) => void
  ): void;
  bindDeleteProject(cb: (projectId: number) => void): void;

  displayProjects(projects: IProject[]): void;
}

const sidebarView = (function (): ISidebarView {
  const sidebarProjects = _verifyNotNull(document.querySelector(".projects"));

  function _createProjectElement(project: IProject): HTMLElement {
    const projectContainer = _createElement("div", ["project"]);
    projectContainer.setAttribute("data-index", project.projectId.toString());

    const editButton = _createElement("button", ["edit-project-button"]);
    editButton.innerHTML = EditImage;

    const projectTitle = _createElement("span", [
      "flex-grow",
      "project-title-sidebar",
    ]);
    projectTitle.innerText = project.projectTitle;

    const projectTodoCount = _createElement("div", ["project-todo-count"]);

    const projectNr = _createElement("span");
    projectNr.innerText = project.todoItems.length.toString();

    const projectImage = _createElement("div");
    projectImage.innerHTML = NoteImage;

    projectTodoCount.append(projectNr, projectImage);

    const deleteButton = _createElement("button", ["delete-project-button"]);
    deleteButton.innerHTML = RemoveImage;

    projectContainer.append(
      editButton,
      projectTitle,
      projectTodoCount,
      deleteButton
    );
    return projectContainer;
  }

  function _createAddProjectElement(): HTMLElement {
    const addProjectButton = _createElement("button", ["add-project-button"]);
    addProjectButton.innerText = "Add project";
    return addProjectButton;
  }

  function displayProjects(projects: IProject[]): void {
    sidebarProjects.innerHTML = "";
    sidebarProjects.append(...projects.map(_createProjectElement));
    sidebarProjects.appendChild(_createAddProjectElement());
  }

  function bindCreateProject(cb: (projectProps: ProjectProps) => void): void {
    sidebarProjects.addEventListener("click", (clickEvent) => {
      const clickTarget = clickEvent.target;
      if (
        clickTarget &&
        clickTarget instanceof Element &&
        clickTarget.classList.contains("add-project-button")
      ) {
        cb({ projectTitle: "New project", todoItems: [] });
      }
    });
  }

  function bindReadProject(cb: (projectIndex: number) => void): void {
    sidebarProjects.addEventListener("click", (clickEvent) => {
      const clickTarget = clickEvent.target;
      if (
        clickTarget &&
        clickTarget instanceof Element &&
        clickTarget.classList.contains("project-title-sidebar") &&
        !("contenteditable" in clickTarget.attributes)
      ) {
        const projectIndex = _verifyNotNull(
          _verifyNotNull(clickTarget.closest(".project")).getAttribute(
            "data-index"
          )
        );
        cb(parseInt(projectIndex));
      }
    });
  }

  function bindUpdateProject(
    cb: (projectIndex: number, projectTitle: string) => void
  ): void {
    sidebarProjects.addEventListener("click", (clickEvent) => {
      const clickTarget = clickEvent.target;
      if (
        clickTarget &&
        clickTarget instanceof Element &&
        clickTarget.closest(".edit-project-button")
      ) {
        // make project title field editable
        const project = _verifyNotNull(clickTarget.closest(".project"));
        const projectTitle = _verifyNotNull(
          project.querySelector<HTMLElement>(".project-title-sidebar")
        );
        const projectIndex = _verifyNotNull(project.getAttribute("data-index"));

        projectTitle.setAttribute("contenteditable", "true");
        projectTitle.addEventListener("keypress", ignoreEnterCallback);
        projectTitle.focus();

        // add once-firing eventlistener on focusout after editing that calls the cb
        projectTitle.addEventListener(
          "focusout",
          () => {
            projectTitle.removeAttribute("contenteditable");
            const newTitle = projectTitle.innerText;
            cb(parseInt(projectIndex), newTitle);
          },
          { once: true }
        );
      }
    });
  }

  function bindDeleteProject(cb: (projectIndex: number) => void): void {
    sidebarProjects.addEventListener("click", (clickEvent) => {
      const clickTarget = clickEvent.target;
      if (
        clickTarget &&
        clickTarget instanceof Element &&
        clickTarget.closest(".delete-project-button")
      ) {
        const projectIndex = _verifyNotNull(
          _verifyNotNull(clickTarget.closest(".project")).getAttribute(
            "data-index"
          )
        );
        cb(parseInt(projectIndex));
      }
    });
  }

  return {
    bindCreateProject: bindCreateProject,
    bindReadProject: bindReadProject,
    bindUpdateProject: bindUpdateProject,
    bindDeleteProject: bindDeleteProject,
    displayProjects: displayProjects,
  };
})();

// mainView
interface IMainView {
  displayTodoItems(project: IProject | null): void;
  bindCreateTodo(cb: (todoProps: TodoItemProps) => void): void;
  bindReadTodo(
    readCb: IProject["readTodoItem"],
    updateCb: IProject["updateTodoItem"],
    deleteCb: IProject["deleteTodoItem"]
  ): void;
}

const mainView = (function () {
  const mainElement = _verifyNotNull(document.querySelector("main"));

  function _createTodoColumnElement(
    dateString: string,
    todoItems: ITodoItem[]
  ): HTMLElement {
    const todoColumn = _createElement("div", ["todo-column"]);
    const dateH3 = _createElement("h3", ["todo-date"]);
    dateH3.innerText = dateString;

    const todoElements = todoItems.map((todoItem) => {
      const todoElement = _createElement("div", ["todo-small"]);
      todoElement.setAttribute("data-index", todoItem.itemId.toString());
      todoElement.setAttribute(
        "data-done",
        todoItem.isComplete ? "true" : "false"
      );
      todoElement.setAttribute(
        "data-priority",
        todoItem.priority.valueOf().toString()
      );

      const todoTitle = _createElement("span", ["todo-title"]);
      todoTitle.innerText = todoItem.itemTitle;

      todoElement.append(todoTitle);
      return todoElement;
    });
    const todoItemsElement = _createElement("div", ["todo-items-small"]);
    todoItemsElement.append(...todoElements);

    todoColumn.append(dateH3, todoItemsElement);
    return todoColumn;
  }

  function displayTodoItems(project: IProject | null) {
    mainElement.innerHTML = "";
    if (project === null) {
      return;
    }

    const mainHeading = _createElement("div", ["project-heading"]);

    const projectTitleElement = _createElement("h2", ["project-title"]);
    projectTitleElement.innerText = project.projectTitle;

    const addTodoButton = _createElement("button", ["add-todo-button"]);
    addTodoButton.innerHTML = PlusImage;
    const addTodoText = _createElement("span");
    addTodoText.innerText = "New ticket";
    addTodoButton.appendChild(addTodoText);

    mainHeading.append(projectTitleElement, addTodoButton);

    const TodoCollectionElement = _createElement("div", ["todo-collection"]);

    // sort todo items in project by date, ascending. This ensures map insertion order is ascending by date.
    const sortedTodoItems = [...project.todoItems].sort(
      (a, b) => a.dueDate.valueOf() - b.dueDate.valueOf()
    );

    // make a 'column' per day with todo items
    const dayMap: Map<string, ITodoItem[]> = new Map();
    for (const todoItem of sortedTodoItems) {
      if (!dayMap.get(todoItem.dueDate.toDateString())) {
        dayMap.set(todoItem.dueDate.toDateString(), []);
      }
      dayMap.get(todoItem.dueDate.toDateString())?.push(todoItem);
    }

    const todoColumnElements: HTMLElement[] = [];
    for (const [dateString, todoItems] of dayMap) {
      const prioritySortedItems = todoItems
        .sort((a, b) => a.priority - b.priority)
        .reverse();
      todoColumnElements.push(
        _createTodoColumnElement(dateString, prioritySortedItems)
      );
    }

    TodoCollectionElement.append(...todoColumnElements);

    mainElement.append(mainHeading, TodoCollectionElement);
  }

  function _createAddTodoForm(
    cb: (todoProps: TodoItemProps) => void
  ): HTMLFormElement {
    const form = _createElement("form", ["add-todo-form"]);

    const formCenter = _createElement("div", ["form-body"]);

    const titleFormElementWrapper = _createElement("div", [
      "form-element-wrapper",
    ]);

    const titleLabel = _createElement("label");
    titleLabel.innerText = "Title:";
    titleLabel.setAttribute("for", "todo_title");

    const todoTitle = _createElement("input");
    todoTitle.setAttribute("id", "todo_title");
    todoTitle.setAttribute("required", "");
    todoTitle.setAttribute("name", "title");

    titleFormElementWrapper.append(titleLabel, todoTitle);

    const descriptionFormElementWrapper = _createElement("div", [
      "form-element-wrapper",
    ]);

    const descriptionLabel = _createElement("label");
    descriptionLabel.innerText = "Description:";
    descriptionLabel.setAttribute("for", "todo_description");

    const descriptionInput = _createElement("textarea");
    descriptionInput.setAttribute("id", "todo_description");
    descriptionInput.setAttribute("rows", "5");
    descriptionInput.setAttribute("required", "");
    descriptionInput.setAttribute("name", "description");

    descriptionFormElementWrapper.append(descriptionLabel, descriptionInput);

    const dueDateFormElementWrapper = _createElement("div", [
      "form-element-wrapper",
    ]);

    const dueDateLabel = _createElement("label");
    dueDateLabel.innerText = "Due at:";
    dueDateLabel.setAttribute("for", "todo_due_date");

    const dueDateInput = _createElement("input");
    dueDateInput.setAttribute("type", "date");
    dueDateInput.setAttribute("id", "todo_due_date");
    dueDateInput.setAttribute("required", "");
    dueDateInput.setAttribute("name", "due_date");

    dueDateFormElementWrapper.append(dueDateLabel, dueDateInput);

    const priorityFormElementWrapper = _createElement("div", [
      "form-element-wrapper",
    ]);

    const priorityLabel = _createElement("label");
    priorityLabel.innerText = "Priority:";
    priorityLabel.setAttribute("for", "todo_priority");

    const priorityInput = _createElement("select");
    priorityInput.setAttribute("id", "todo_priority");
    priorityInput.setAttribute("required", "");
    priorityInput.setAttribute("name", "priority");

    const lowPriorityOption = _createElement("option");
    lowPriorityOption.setAttribute("value", "Low");
    lowPriorityOption.innerText = "Low";

    const mediumPriorityOption = _createElement("option");
    mediumPriorityOption.setAttribute("value", "Medium");
    mediumPriorityOption.innerText = "Medium";

    const highPriorityOption = _createElement("option");
    highPriorityOption.setAttribute("value", "High");
    highPriorityOption.innerText = "High";

    const criticalPriorityOption = _createElement("option");
    criticalPriorityOption.setAttribute("value", "Critical");
    criticalPriorityOption.innerText = "Critical";

    priorityInput.append(
      lowPriorityOption,
      mediumPriorityOption,
      highPriorityOption,
      criticalPriorityOption
    );

    priorityFormElementWrapper.append(priorityLabel, priorityInput);

    const isCompleteFormElementWrapper = _createElement("div", [
      "form-element-wrapper",
    ]);

    const isCompleteLabel = _createElement("label");
    isCompleteLabel.innerText = "Done?";
    isCompleteLabel.setAttribute("for", "todo_is_complete");

    const isCompleteInput = _createElement("input");
    isCompleteInput.setAttribute("type", "checkbox");
    isCompleteInput.setAttribute("id", "todo_is_complete");
    isCompleteInput.setAttribute("name", "is_complete");

    isCompleteFormElementWrapper.append(isCompleteLabel, isCompleteInput);

    const submitButton = _createElement("button", ["add-todo-submit-button"]);
    submitButton.innerText = "Add";

    formCenter.append(
      titleFormElementWrapper,
      descriptionFormElementWrapper,
      dueDateFormElementWrapper,
      priorityFormElementWrapper,
      isCompleteFormElementWrapper,
      submitButton
    );

    form.appendChild(formCenter);

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const formData = new FormData(e.target as HTMLFormElement);

      const [itemTitle, description, dueDate, priority, isComplete] = [
        formData.get("title") as string,
        formData.get("description") as string,
        new Date(formData.get("due_date") as string),
        Priority[
          formData.get("priority") as "Low" | "Medium" | "High" | "Critical"
        ],
        (formData.get("is_complete") as string) === "on",
      ];

      cb({ itemTitle, description, dueDate, priority, isComplete });
    });

    return form;
  }

  function bindCreateTodo(cb: (todoProps: TodoItemProps) => void): void {
    mainElement.addEventListener("click", (clickEvent) => {
      const clickTarget = clickEvent.target;
      if (
        clickTarget &&
        clickTarget instanceof Element &&
        clickTarget.closest(".add-todo-button")
      ) {
        // make form, add event listener on submit of that to invoke model's createTodo using submitted form information
        const form = _createAddTodoForm(cb);
        const formWrapper = _createElement("div", ["form-background"]);
        formWrapper.append(form);

        form.addEventListener("submit", () => {
          formWrapper.remove();
        });

        // define separately so I can call it recursively. function expression instead of declaration
        // for eslint reasons
        const clickHandler = function (clickEvent: MouseEvent) {
          const clickTarget = clickEvent.target;
          if (
            clickTarget &&
            clickTarget instanceof Element &&
            !clickTarget.closest(".add-todo-form")
          ) {
            formWrapper.remove();
          } else {
            document.addEventListener("click", clickHandler, { once: true });
          }
        };

        // setTimeout so that the first click (on the add Todo button) doesn't run the handler
        setTimeout(
          () =>
            document.addEventListener("click", clickHandler, { once: true }),
          0
        );

        mainElement.append(formWrapper);
      }
    });
  }

  function _createReadTodoView(
    todoItem: ITodoItem,
    deleteCb: IProject["deleteTodoItem"]
  ): {
    element: HTMLElement;
    getData: () => TodoItemProps;
  } {
    // presents data from todoItem. each field has a clickhandler to edit the value (for text fields just make contenteditable,
    // for dueDate have to swap it out for the form element datepicker)
    const todoItemElement = _createElement("div", ["todo-item"]);

    const todoTitle = _createElement("span", ["todo-read-title"]);
    todoTitle.addEventListener("keypress", ignoreEnterCallback);

    todoTitle.innerText = todoItem.itemTitle;

    const todoDelete = _createElement("button", ["todo-delete"]);
    todoDelete.innerHTML = TrashImage;
    todoDelete.addEventListener("click", () => {
      deleteCb(todoItem.itemId);
    });

    const todoDescription = _createElement("p", ["todo-description"]);
    todoDescription.innerText = todoItem.description;

    [todoTitle, todoDescription].forEach((element) => {
      element.addEventListener("click", () => {
        if (element.getAttribute("contenteditable")) {
          return;
        }
        element.setAttribute("contenteditable", "");
        element.focus();

        element.addEventListener(
          "focusout",
          () => {
            element.removeAttribute("contenteditable");
          },
          { once: true }
        );
      });
    });

    const todoPriorityWrapper = _createElement("div", ["todo-priority"]);
    const leftChevron = _createElement("span");
    leftChevron.innerText = "<";

    const todoPriority = _createElement("span");
    let currentPriority = todoItem.priority.valueOf();
    todoPriority.innerText = Priority[currentPriority];

    const rightChevron = _createElement("span");
    rightChevron.innerText = ">";

    [[leftChevron, -1] as const, [rightChevron, 1] as const].forEach((e) => {
      const [element, transformation] = e;
      element.addEventListener("click", () => {
        currentPriority = Math.max(
          Math.min(currentPriority + transformation, 3),
          0
        );
        todoPriority.innerText = Priority[currentPriority];
      });
    });
    todoPriorityWrapper.append(leftChevron, todoPriority, rightChevron);

    const todoDueDate = _createElement("input", ["todo-due-date"]);
    todoDueDate.setAttribute("type", "date");
    todoDueDate.setAttribute(
      "value",
      todoItem.dueDate.toISOString().slice(0, 10)
    );

    const todoIsComplete = _createElement("input", ["todo-is-complete"]);
    todoIsComplete.setAttribute("type", "checkbox");
    if (todoItem.isComplete) {
      todoIsComplete.setAttribute("checked", "true");
    }

    todoItemElement.append(
      todoTitle,
      todoDelete,
      todoDescription,
      todoPriorityWrapper,
      todoDueDate,
      todoIsComplete
    );

    function getProps(): TodoItemProps {
      console.log(todoDueDate);
      return {
        itemTitle: todoTitle.innerText,
        description: todoDescription.innerText,
        dueDate: new Date(todoDueDate.value),
        priority: currentPriority,
        isComplete: todoIsComplete.checked,
      };
    }

    return {
      element: todoItemElement,
      getData: getProps,
    };
  }

  function bindReadTodo(
    readCb: IProject["readTodoItem"],
    updateCb: IProject["updateTodoItem"],
    deleteCb: IProject["deleteTodoItem"]
  ): void {
    mainElement.addEventListener("click", (clickEvent) => {
      const clickTarget = clickEvent.target;
      if (
        clickTarget &&
        clickTarget instanceof Element &&
        clickTarget.closest(".todo-small") &&
        !clickTarget.closest(".todo-done")
      ) {
        const todoItemElement = clickTarget.closest(".todo-small") as Element;
        const todoIndex = parseInt(
          _verifyNotNull(todoItemElement.getAttribute("data-index"))
        );
        const todoItem = readCb(todoIndex) as ITodoItem;

        const { element, getData } = _createReadTodoView(todoItem, deleteCb);

        const wrapper = _createElement("div", ["form-background"]);
        wrapper.append(element);

        mainElement.append(wrapper);

        const clickHandler = function (clickEvent: MouseEvent) {
          const clickTarget = clickEvent.target;
          if (
            clickTarget &&
            clickTarget instanceof Element &&
            !clickTarget.closest(".todo-item")
          ) {
            const props = getData();
            updateCb(todoIndex, props);
          } else {
            document.addEventListener("click", clickHandler, { once: true });
          }
        };

        setTimeout(
          () =>
            document.addEventListener("click", clickHandler, { once: true }),
          0
        );
      }
    });
  }

  return {
    displayTodoItems: displayTodoItems,
    bindCreateTodo: bindCreateTodo,
    bindReadTodo: bindReadTodo,
  };
})();

// Controller
(function (model: IModel, sidebarView: ISidebarView, mainView: IMainView) {
  function render() {
    sidebarView.displayProjects(model.projects);
    mainView.displayTodoItems(model.getActiveProject());
  }

  model.bindRender(render);

  sidebarView.bindCreateProject(model.createProject.bind(null));
  // need the mainView completed to pass its render method to sidebarView.bindReadProject, since clicking a project
  // will mainly rerender the main content, not the sidebar
  sidebarView.bindReadProject(model.readProject.bind(null));
  sidebarView.bindUpdateProject(model.updateProjectTitle.bind(null));
  sidebarView.bindDeleteProject(model.deleteProject.bind(null));

  mainView.bindCreateTodo((todoProps: TodoItemProps) => {
    return (model.getActiveProject() as IProject).createTodoItem(todoProps);
  });
  mainView.bindReadTodo(
    (todoIndex: number) => {
      return (model.getActiveProject() as IProject).readTodoItem(
        todoIndex
      ) as ISavableTodoItem;
    },
    (itemId: number, props: TodoItemProps) => {
      return (model.getActiveProject() as IProject).updateTodoItem(
        itemId,
        props
      );
    },
    (itemId: number) => {
      return (model.getActiveProject() as IProject).deleteTodoItem(itemId);
    }
  );

  // for CSS styling pre-make some stuff
  // model.createProject({
  //   projectTitle: "DemoProject",
  //   todoItems: [],
  // });
  // model.getActiveProject()?.createTodoItem({
  //   itemTitle: "Item1",
  //   description: "Item 1 description",
  //   dueDate: new Date("2023-04-26"),
  //   priority: Priority.Low,
  //   isComplete: false,
  // });
  // model.getActiveProject()?.createTodoItem({
  //   itemTitle: "Item2",
  //   description: "Item 2 description",
  //   dueDate: new Date("2023-04-26"),
  //   priority: Priority.Medium,
  //   isComplete: true,
  // });
  // model.getActiveProject()?.createTodoItem({
  //   itemTitle: "Item3",
  //   description: "Item 3 description",
  //   dueDate: new Date("2023-04-24"),
  //   priority: Priority.High,
  //   isComplete: true,
  // });

  render();
})(model, sidebarView, mainView);
