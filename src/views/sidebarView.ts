import { IModel, IProject, ProjectProps } from "../models/index.js";
import {
  _createElement,
  _verifyNotNull,
  ignoreEnterCallback,
} from "./utils.js";

import EditImage from "./images/pencil-outline.svg";
import RemoveImage from "./images/close-outline.svg";
import NoteImage from "./images/note-outline.svg";

export interface ISidebarView {
  bindCreateProject(cb: IModel["createProject"]): void;
  bindReadProject(cb: IModel["readProject"]): void;
  bindUpdateProject(cb: IModel["updateProjectTitle"]): void;
  bindDeleteProject(cb: IModel["deleteProject"]): void;

  displayProjects(projects: IProject[]): void;
}

export const sidebarView = (function (): ISidebarView {
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
