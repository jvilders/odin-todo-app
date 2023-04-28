import ISavable from "./savable.js";

// Model
// Todo items
export enum Priority {
  Low = 0,
  Medium,
  High,
  Critical,
}

export interface TodoItemProps {
  itemTitle: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  isComplete: boolean;
}

export interface ITodoItem {
  itemId: number;
  itemTitle: string;
  description: string;
  dueDate: Date;
  priority: Priority;
  isComplete: boolean;
}

export type ISavableTodoItem = ITodoItem & ISavable<TodoItemProps>;

export const createTodoItem = (function () {
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
