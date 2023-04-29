import {
  IProject,
  TodoItemProps,
  ITodoItem,
  Priority,
} from "../models/index.js";
import {
  _createElement,
  _verifyNotNull,
  ignoreEnterCallback,
} from "./utils.js";

import TrashImage from "./images/trash-can-outline.svg";
import PlusImage from "./images/plus.svg";

export interface IMainView {
  displayTodoItems(project: IProject | null): void;
  bindCreateTodo(cb: (todoProps: TodoItemProps) => void): void;
  bindReadTodo(
    readCb: IProject["readTodoItem"],
    updateCb: IProject["updateTodoItem"],
    deleteCb: IProject["deleteTodoItem"]
  ): void;
}

export const mainView = (function () {
  const reusedClassNames = {
    todoSmallClass: "todo-small",
    addTodoButtonClass: "add-todo-button",
    addTodoFormClass: "add-todo-form",
    formElementWrapperClass: "form-element-wrapper",
    formBackgroundClass: "form-background",
    todoItemClass: "todo-item",
  };
  const mainElement = _verifyNotNull(document.querySelector("main"));
  // const todoSmallClass = "todo-small";
  // const addTodoButtonClass = "add-todo-button";
  // const addTodoFormClass = "add-todo-form";
  // const formElementWrapperClass = "form-element-wrapper";
  // const formBackgroundClass = "form-background";
  // const todoItemClass = "todo-item";

  function _createTodoColumnElement(
    dateString: string,
    todoItems: ITodoItem[]
  ): HTMLElement {
    const todoColumn = _createElement("div", ["todo-column"]);
    const dateH3 = _createElement("h3", ["todo-date"]);
    dateH3.innerText = dateString;

    const todoElements = todoItems.map((todoItem) => {
      const todoElement = _createElement("div", [
        reusedClassNames.todoSmallClass,
      ]);
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

    const addTodoButton = _createElement("button", [
      reusedClassNames.addTodoButtonClass,
    ]);
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
    const form = _createElement("form", [reusedClassNames.addTodoFormClass]);

    const formCenter = _createElement("div", ["form-body"]);

    const titleFormElementWrapper = _createElement("div", [
      reusedClassNames.formElementWrapperClass,
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
      reusedClassNames.formElementWrapperClass,
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
      reusedClassNames.formElementWrapperClass,
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
      reusedClassNames.formElementWrapperClass,
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
      reusedClassNames.formElementWrapperClass,
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
        clickTarget.closest(`.${reusedClassNames.addTodoButtonClass}`)
      ) {
        // make form, add event listener on submit of that to invoke model's createTodo using submitted form information
        const form = _createAddTodoForm(cb);
        const formWrapper = _createElement("div", [
          reusedClassNames.formBackgroundClass,
        ]);
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
            !clickTarget.closest(`.${reusedClassNames.addTodoFormClass}`)
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
    const todoItemElement = _createElement("div", [
      reusedClassNames.todoItemClass,
    ]);

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
        clickTarget.closest(`.${reusedClassNames.todoSmallClass}`) &&
        !clickTarget.closest(".todo-done")
      ) {
        const todoItemElement = clickTarget.closest(
          `.${reusedClassNames.todoSmallClass}`
        ) as Element;
        const todoIndex = parseInt(
          _verifyNotNull(todoItemElement.getAttribute("data-index"))
        );
        const todoItem = readCb(todoIndex) as ITodoItem;

        const { element, getData } = _createReadTodoView(todoItem, deleteCb);

        const wrapper = _createElement("div", [
          reusedClassNames.formBackgroundClass,
        ]);
        wrapper.append(element);

        mainElement.append(wrapper);

        const clickHandler = function (clickEvent: MouseEvent) {
          const clickTarget = clickEvent.target;
          if (
            clickTarget &&
            clickTarget instanceof Element &&
            !clickTarget.closest(`.${reusedClassNames.todoItemClass}`)
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
