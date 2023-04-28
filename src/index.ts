import "./style.css";
import controller from "./controller.js";
import { model } from "./models/index.js";
import { sidebarView, mainView } from "./views/index.js";
controller(model, sidebarView, mainView);
