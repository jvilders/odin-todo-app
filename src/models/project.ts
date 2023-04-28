import ISavable from "./savable.js";
import { TodoItemProps, ISavableTodoItem, createTodoItem } from "./todo.js";

// Project
export interface ProjectProps {
  projectTitle: string;
  todoItems: TodoItemProps[];
}

export interface IProject {
  projectId: number;
  projectTitle: string;
  todoItems: ISavableTodoItem[];

  createTodoItem(props: TodoItemProps): ISavableTodoItem;
  readTodoItem(itemId: number): undefined | ISavableTodoItem;
  updateTodoItem(itemId: number, props: TodoItemProps): void;
  deleteTodoItem(itemId: number): void;
}

export type ISavableProject = IProject & ISavable<ProjectProps>;

export const createProject = (function () {
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
