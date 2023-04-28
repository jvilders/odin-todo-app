import {
  ISavableProject,
  IProject,
  createProject,
  ProjectProps,
} from "./project.js";
import { TodoItemProps } from "./todo.js";

export interface IModel {
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

export const model = (function (): IModel {
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
