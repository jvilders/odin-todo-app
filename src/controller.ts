import {
  IModel,
  TodoItemProps,
  IProject,
  ISavableTodoItem,
} from "./models/index.js";
import { ISidebarView, IMainView } from "./views/index.js";

export default function (
  model: IModel,
  sidebarView: ISidebarView,
  mainView: IMainView
) {
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

  render();
}
