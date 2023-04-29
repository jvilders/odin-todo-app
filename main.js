/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  font-family: sans-serif;\n\n  --lighter-black: rgb(29, 29, 29);\n  --form-bg: rgba(128, 128, 128, 0.493);\n}\n\nbutton {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\ninput {\n  font-family: inherit;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: minmax(250px, 1fr) 4fr;\n}\n\n#sidebar {\n  background-color: var(--lighter-black);\n  color: white;\n  fill: white;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n\n  padding: 1rem;\n}\n\n.project {\n  display: grid;\n  grid-template-columns: auto 1fr auto auto;\n  border-radius: 8px;\n  padding: 4px 8px;\n\n  align-items: center;\n  gap: 4px;\n}\n\n.project:hover {\n  background-color: rgba(255, 255, 255, 0.253);\n  cursor: pointer;\n}\n\n.project-todo-count {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.project-todo-count > div {\n  width: 20px;\n}\n\n.edit-project-button,\n.delete-project-button,\n.todo-delete {\n  display: grid;\n  width: 25px;\n}\n\n.edit-project-button:hover {\n  fill: orange;\n}\n\n.delete-project-button:hover {\n  fill: red;\n}\n\n.add-project-button {\n  border: 1px solid white;\n  border-radius: 4px;\n  color: inherit;\n  padding: 0.5rem;\n  font-size: 1rem;\n}\n\n.add-project-button:hover {\n  color: var(--lighter-black);\n  background-color: white;\n}\n\nmain {\n  position: relative;\n  overflow-x: scroll;\n  padding-left: 2rem;\n  padding-top: 1rem;\n}\n\n.project-heading {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.project-heading > h2 {\n  padding-left: 1rem;\n  margin-top: 0.5rem;\n}\n\n.add-todo-button {\n  border: 1px solid var(--lighter-black);\n  border-radius: 4px;\n  padding: 0.25rem 1rem;\n  margin-left: 1rem;\n  margin-top: 0.5rem;\n  font-size: 1rem;\n\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n\n.add-todo-button > svg {\n  width: 25px;\n}\n\n.add-todo-button:hover {\n  color: white;\n  fill: white;\n  background-color: var(--lighter-black);\n}\n\n.add-todo-form {\n  display: grid;\n  place-content: center;\n\n  overflow: scroll;\n}\n\n.form-body {\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  gap: 0.5rem 1rem;\n}\n\n.form-element-wrapper {\n  display: contents;\n}\n\n.add-todo-submit-button {\n  width: 60%;\n  margin-top: 1rem;\n  margin-inline: auto;\n  padding-block: 0.5rem;\n  grid-column-start: span 2;\n\n  border: 1px solid var(--lighter-black);\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\n.add-todo-submit-button:hover {\n  color: white;\n  background-color: var(--lighter-black);\n}\n\n.form-background {\n  position: absolute;\n  inset: 0;\n  z-index: 1000;\n\n  display: grid;\n  place-content: center;\n  place-items: center;\n\n  grid-template: 80% / 80%;\n\n  background-color: rgba(128, 128, 128, 0.493);\n}\n\n.add-todo-form {\n  background-color: white;\n  border-radius: 8px;\n  padding: 1rem;\n\n  width: clamp(200px, 80%, 500px);\n  min-height: 80%;\n}\n\n/* Todo collection */\n.todo-collection {\n  margin-top: 1rem;\n\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: max-content;\n\n  gap: 2rem;\n}\n\n.todo-column {\n  position: relative;\n}\n\n.todo-column + .todo-column::before {\n  position: absolute;\n  content: \"\";\n  left: -0.5rem;\n  top: 0;\n  bottom: 0;\n  border-left: 1px solid var(--lighter-black);\n}\n\n.todo-items-small {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: baseline;\n}\n\n.todo-small {\n  border: 1px solid var(--lighter-black);\n  border-radius: 4px;\n  max-width: 25ch;\n  padding: 0.5rem 1.5rem;\n  cursor: pointer;\n}\n\n.todo-small:hover {\n  color: white;\n  background-color: var(--lighter-black);\n}\n\n/* Todo view */\n.todo-item {\n  width: clamp(200px, 80%, 500px);\n  min-height: 80%;\n  border-radius: 8px;\n\n  padding: 1rem;\n\n  background-color: white;\n\n  display: grid;\n  grid-template:\n    \"title done . delete\" auto\n    \"priority dueDate . .\" auto\n    \"description description description .\" 1fr / minmax(12ch, auto)\n    auto 1fr auto;\n  gap: 0.5rem 1rem;\n  align-items: center;\n}\n\n.todo-read-title {\n  grid-area: title;\n  place-self: center;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.todo-delete {\n  grid-area: delete;\n  width: 30px;\n}\n\n.todo-delete:hover {\n  fill: red;\n}\n\n.todo-description {\n  grid-area: description;\n  align-self: start;\n  padding: 1rem;\n\n  border-top: 1px solid var(--lighter-black);\n  border-right: 1px solid var(--lighter-black);\n}\n\n.todo-priority {\n  grid-area: priority;\n  width: 100%;\n\n  display: flex;\n  gap: 4px;\n}\n\n.todo-priority > span:nth-child(2) {\n  flex-grow: 1;\n  text-align: center;\n}\n\n.todo-due-date {\n  grid-area: dueDate;\n}\n\n.todo-is-complete {\n  grid-area: done;\n  justify-self: center;\n  height: 25px;\n  width: 25px;\n}\n\n/* checkbox conditional styling */\n.todo-small {\n  position: relative;\n}\n\n.todo-small[data-done=\"true\"]::after {\n  position: absolute;\n  content: \"\";\n  left: calc(100% + 1rem);\n\n  height: 1rem;\n  width: 0.325rem;\n  rotate: 45deg;\n  border-bottom: 2px solid black;\n  border-right: 2px solid black;\n  border-left: 2px solid transparent;\n  border-top: 2px solid transparent;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["*,\n*::before,\n*::after {\n  padding: 0;\n  margin: 0;\n}\n\n:root {\n  font-family: sans-serif;\n\n  --lighter-black: rgb(29, 29, 29);\n  --form-bg: rgba(128, 128, 128, 0.493);\n}\n\nbutton {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n}\n\ninput {\n  font-family: inherit;\n}\n\nbody {\n  height: 100vh;\n  display: grid;\n  grid-template-columns: minmax(250px, 1fr) 4fr;\n}\n\n#sidebar {\n  background-color: var(--lighter-black);\n  color: white;\n  fill: white;\n  overflow-y: scroll;\n  overflow-x: hidden;\n}\n\n.projects {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n\n  padding: 1rem;\n}\n\n.project {\n  display: grid;\n  grid-template-columns: auto 1fr auto auto;\n  border-radius: 8px;\n  padding: 4px 8px;\n\n  align-items: center;\n  gap: 4px;\n}\n\n.project:hover {\n  background-color: rgba(255, 255, 255, 0.253);\n  cursor: pointer;\n}\n\n.project-todo-count {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n.project-todo-count > div {\n  width: 20px;\n}\n\n.edit-project-button,\n.delete-project-button,\n.todo-delete {\n  display: grid;\n  width: 25px;\n}\n\n.edit-project-button:hover {\n  fill: orange;\n}\n\n.delete-project-button:hover {\n  fill: red;\n}\n\n.add-project-button {\n  border: 1px solid white;\n  border-radius: 4px;\n  color: inherit;\n  padding: 0.5rem;\n  font-size: 1rem;\n}\n\n.add-project-button:hover {\n  color: var(--lighter-black);\n  background-color: white;\n}\n\nmain {\n  position: relative;\n  overflow-x: scroll;\n  padding-left: 2rem;\n  padding-top: 1rem;\n}\n\n.project-heading {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n}\n\n.project-heading > h2 {\n  padding-left: 1rem;\n  margin-top: 0.5rem;\n}\n\n.add-todo-button {\n  border: 1px solid var(--lighter-black);\n  border-radius: 4px;\n  padding: 0.25rem 1rem;\n  margin-left: 1rem;\n  margin-top: 0.5rem;\n  font-size: 1rem;\n\n  display: flex;\n  gap: 4px;\n  align-items: center;\n}\n\n.add-todo-button > svg {\n  width: 25px;\n}\n\n.add-todo-button:hover {\n  color: white;\n  fill: white;\n  background-color: var(--lighter-black);\n}\n\n.add-todo-form {\n  display: grid;\n  place-content: center;\n\n  overflow: scroll;\n}\n\n.form-body {\n  display: grid;\n  grid-template-columns: max-content 1fr;\n  gap: 0.5rem 1rem;\n}\n\n.form-element-wrapper {\n  display: contents;\n}\n\n.add-todo-submit-button {\n  width: 60%;\n  margin-top: 1rem;\n  margin-inline: auto;\n  padding-block: 0.5rem;\n  grid-column-start: span 2;\n\n  border: 1px solid var(--lighter-black);\n  border-radius: 4px;\n  font-size: 1rem;\n}\n\n.add-todo-submit-button:hover {\n  color: white;\n  background-color: var(--lighter-black);\n}\n\n.form-background {\n  position: absolute;\n  inset: 0;\n  z-index: 1000;\n\n  display: grid;\n  place-content: center;\n  place-items: center;\n\n  grid-template: 80% / 80%;\n\n  background-color: rgba(128, 128, 128, 0.493);\n}\n\n.add-todo-form {\n  background-color: white;\n  border-radius: 8px;\n  padding: 1rem;\n\n  width: clamp(200px, 80%, 500px);\n  min-height: 80%;\n}\n\n/* Todo collection */\n.todo-collection {\n  margin-top: 1rem;\n\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: max-content;\n\n  gap: 2rem;\n}\n\n.todo-column {\n  position: relative;\n}\n\n.todo-column + .todo-column::before {\n  position: absolute;\n  content: \"\";\n  left: -0.5rem;\n  top: 0;\n  bottom: 0;\n  border-left: 1px solid var(--lighter-black);\n}\n\n.todo-items-small {\n  margin-top: 1rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: baseline;\n}\n\n.todo-small {\n  border: 1px solid var(--lighter-black);\n  border-radius: 4px;\n  max-width: 25ch;\n  padding: 0.5rem 1.5rem;\n  cursor: pointer;\n}\n\n.todo-small:hover {\n  color: white;\n  background-color: var(--lighter-black);\n}\n\n/* Todo view */\n.todo-item {\n  width: clamp(200px, 80%, 500px);\n  min-height: 80%;\n  border-radius: 8px;\n\n  padding: 1rem;\n\n  background-color: white;\n\n  display: grid;\n  grid-template:\n    \"title done . delete\" auto\n    \"priority dueDate . .\" auto\n    \"description description description .\" 1fr / minmax(12ch, auto)\n    auto 1fr auto;\n  gap: 0.5rem 1rem;\n  align-items: center;\n}\n\n.todo-read-title {\n  grid-area: title;\n  place-self: center;\n  font-size: 1rem;\n  font-weight: bold;\n}\n\n.todo-delete {\n  grid-area: delete;\n  width: 30px;\n}\n\n.todo-delete:hover {\n  fill: red;\n}\n\n.todo-description {\n  grid-area: description;\n  align-self: start;\n  padding: 1rem;\n\n  border-top: 1px solid var(--lighter-black);\n  border-right: 1px solid var(--lighter-black);\n}\n\n.todo-priority {\n  grid-area: priority;\n  width: 100%;\n\n  display: flex;\n  gap: 4px;\n}\n\n.todo-priority > span:nth-child(2) {\n  flex-grow: 1;\n  text-align: center;\n}\n\n.todo-due-date {\n  grid-area: dueDate;\n}\n\n.todo-is-complete {\n  grid-area: done;\n  justify-self: center;\n  height: 25px;\n  width: 25px;\n}\n\n/* checkbox conditional styling */\n.todo-small {\n  position: relative;\n}\n\n.todo-small[data-done=\"true\"]::after {\n  position: absolute;\n  content: \"\";\n  left: calc(100% + 1rem);\n\n  height: 1rem;\n  width: 0.325rem;\n  rotate: 45deg;\n  border-bottom: 2px solid black;\n  border-right: 2px solid black;\n  border-left: 2px solid transparent;\n  border-top: 2px solid transparent;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/views/images/close-outline.svg":
/*!********************************************!*\
  !*** ./src/views/images/close-outline.svg ***!
  \********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M3,16.74L7.76,12L3,7.26L7.26,3L12,7.76L16.74,3L21,7.26L16.24,12L21,16.74L16.74,21L12,16.24L7.26,21L3,16.74M12,13.41L16.74,18.16L18.16,16.74L13.41,12L18.16,7.26L16.74,5.84L12,10.59L7.26,5.84L5.84,7.26L10.59,12L5.84,16.74L7.26,18.16L12,13.41Z\"></path></svg>"

/***/ }),

/***/ "./src/views/images/note-outline.svg":
/*!*******************************************!*\
  !*** ./src/views/images/note-outline.svg ***!
  \*******************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M14,10H19.5L14,4.5V10M5,3H15L21,9V19A2,2 0 0,1 19,21H5C3.89,21 3,20.1 3,19V5C3,3.89 3.89,3 5,3M5,5V19H19V12H12V5H5Z\"></path></svg>"

/***/ }),

/***/ "./src/views/images/pencil-outline.svg":
/*!*********************************************!*\
  !*** ./src/views/images/pencil-outline.svg ***!
  \*********************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z\"></path></svg>"

/***/ }),

/***/ "./src/views/images/plus.svg":
/*!***********************************!*\
  !*** ./src/views/images/plus.svg ***!
  \***********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"2 2 20 20\"><path d=\"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z\"></path></svg>"

/***/ }),

/***/ "./src/views/images/trash-can-outline.svg":
/*!************************************************!*\
  !*** ./src/views/images/trash-can-outline.svg ***!
  \************************************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z\"></path></svg>"

/***/ }),

/***/ "./src/controller.ts":
/*!***************************!*\
  !*** ./src/controller.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(model, sidebarView, mainView) {
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
    mainView.bindCreateTodo((todoProps) => {
        return model.getActiveProject().createTodoItem(todoProps);
    });
    mainView.bindReadTodo((todoIndex) => {
        return model.getActiveProject().readTodoItem(todoIndex);
    }, (itemId, props) => {
        return model.getActiveProject().updateTodoItem(itemId, props);
    }, (itemId) => {
        return model.getActiveProject().deleteTodoItem(itemId);
    });
    render();
}


/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Priority": () => (/* reexport safe */ _todo_js__WEBPACK_IMPORTED_MODULE_1__.Priority),
/* harmony export */   "model": () => (/* reexport safe */ _model_js__WEBPACK_IMPORTED_MODULE_0__.model)
/* harmony export */ });
/* harmony import */ var _model_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./model.js */ "./src/models/model.ts");
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.js */ "./src/models/todo.ts");




/***/ }),

/***/ "./src/models/model.ts":
/*!*****************************!*\
  !*** ./src/models/model.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "model": () => (/* binding */ model)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/models/project.ts");

const model = (function () {
    const localStorageKey = "projects";
    function _saveToLocalStorage() {
        const serializedProjects = projects.map((project) => project.serialize());
        localStorage.setItem(localStorageKey, JSON.stringify(serializedProjects));
        console.log("mocked save");
    }
    function _initializeFromLocalStorage() {
        const s = localStorage.getItem(localStorageKey);
        if (s === null) {
            return [];
        }
        const deserializedProjectProps = JSON.parse(s);
        const properProjectProps = deserializedProjectProps.map((deserializedProjectProps) => {
            const properTodoItemProps = deserializedProjectProps.todoItems.map((deserializedTodoItemProps) => {
                const newProps = {
                    itemTitle: deserializedTodoItemProps.itemTitle,
                    description: deserializedTodoItemProps.description,
                    dueDate: new Date(deserializedTodoItemProps.dueDate),
                    priority: deserializedTodoItemProps.priority,
                    isComplete: deserializedTodoItemProps.isComplete,
                };
                return newProps;
            });
            return {
                projectTitle: deserializedProjectProps.projectTitle,
                todoItems: properTodoItemProps,
            };
        });
        console.log(Object.assign({}, deserializedProjectProps));
        return properProjectProps.map((projectArgs) => {
            return (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectArgs, _commit);
        });
    }
    const projects = _initializeFromLocalStorage();
    let currentActiveProject = null;
    let renderCallBack = function () {
        return;
    };
    function _createProject(projectProps) {
        const newProject = (0,_project_js__WEBPACK_IMPORTED_MODULE_0__.createProject)(projectProps, _commit);
        projects.push(newProject);
        _commit(newProject.projectId);
        return newProject;
    }
    function readProject(projectId) {
        for (const project of projects) {
            if (project.projectId == projectId) {
                _commit(projectId);
                return project;
            }
        }
        return null;
    }
    function updateProjectTitle(projectId, projectTitle) {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].projectId == projectId) {
                projects[i].projectTitle = projectTitle;
                _commit(projectId);
                break;
            }
        }
    }
    function deleteProject(projectId) {
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].projectId == projectId) {
                projects.splice(i, 1);
                _commit(null);
                break;
            }
        }
    }
    function bindRender(cb) {
        renderCallBack = cb;
    }
    function _commit(projectId) {
        currentActiveProject = projectId;
        _saveToLocalStorage();
        renderCallBack();
    }
    function getActiveProject() {
        if (currentActiveProject === null) {
            return null;
        }
        const activeProject = projects.find((value) => value.projectId === currentActiveProject);
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


/***/ }),

/***/ "./src/models/project.ts":
/*!*******************************!*\
  !*** ./src/models/project.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject)
/* harmony export */ });
/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ "./src/models/todo.ts");

const createProject = (function () {
    let projectIdCounter = 0;
    function createProject(props, commitCallback) {
        const todoItems = props.todoItems.map((todoItemProps) => (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodoItem)(todoItemProps));
        const projectTitle = props.projectTitle;
        const projectId = projectIdCounter++;
        const curriedCommitCallback = () => commitCallback(projectId);
        const _createTodoItem = function (props) {
            const newItem = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodoItem)(props);
            todoItems.push(newItem);
            _commit();
            return newItem;
        };
        function readTodoItem(itemId) {
            for (const todoItem of todoItems) {
                if (todoItem.itemId == itemId) {
                    _commit();
                    return todoItem;
                }
            }
        }
        function updateTodoItem(itemId, props) {
            for (let i = 0; i < todoItems.length; i++) {
                if (todoItems[i].itemId == itemId) {
                    todoItems[i] = (0,_todo_js__WEBPACK_IMPORTED_MODULE_0__.createTodoItem)(props);
                    _commit();
                    break;
                }
            }
        }
        function deleteTodoItem(itemId) {
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
        function serialize() {
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


/***/ }),

/***/ "./src/models/todo.ts":
/*!****************************!*\
  !*** ./src/models/todo.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Priority": () => (/* binding */ Priority),
/* harmony export */   "createTodoItem": () => (/* binding */ createTodoItem)
/* harmony export */ });
// Model
// Todo items
var Priority;
(function (Priority) {
    Priority[Priority["Low"] = 0] = "Low";
    Priority[Priority["Medium"] = 1] = "Medium";
    Priority[Priority["High"] = 2] = "High";
    Priority[Priority["Critical"] = 3] = "Critical";
})(Priority = Priority || (Priority = {}));
const createTodoItem = (function () {
    let itemIdCounter = 0;
    function createTodoItem(props) {
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


/***/ }),

/***/ "./src/views/index.ts":
/*!****************************!*\
  !*** ./src/views/index.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainView": () => (/* reexport safe */ _mainView_js__WEBPACK_IMPORTED_MODULE_0__.mainView),
/* harmony export */   "sidebarView": () => (/* reexport safe */ _sidebarView_js__WEBPACK_IMPORTED_MODULE_1__.sidebarView)
/* harmony export */ });
/* harmony import */ var _mainView_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainView.js */ "./src/views/mainView.ts");
/* harmony import */ var _sidebarView_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebarView.js */ "./src/views/sidebarView.ts");




/***/ }),

/***/ "./src/views/mainView.ts":
/*!*******************************!*\
  !*** ./src/views/mainView.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mainView": () => (/* binding */ mainView)
/* harmony export */ });
/* harmony import */ var _models_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/index.js */ "./src/models/index.ts");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./src/views/utils.ts");
/* harmony import */ var _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/trash-can-outline.svg */ "./src/views/images/trash-can-outline.svg");
/* harmony import */ var _images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/plus.svg */ "./src/views/images/plus.svg");
/* harmony import */ var _images_plus_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_plus_svg__WEBPACK_IMPORTED_MODULE_3__);




const mainView = (function () {
    const reusedClassNames = {
        todoSmallClass: "todo-small",
        addTodoButtonClass: "add-todo-button",
        addTodoFormClass: "add-todo-form",
        formElementWrapperClass: "form-element-wrapper",
        formBackgroundClass: "form-background",
        todoItemClass: "todo-item",
    };
    const mainElement = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._verifyNotNull)(document.querySelector("main"));
    // const todoSmallClass = "todo-small";
    // const addTodoButtonClass = "add-todo-button";
    // const addTodoFormClass = "add-todo-form";
    // const formElementWrapperClass = "form-element-wrapper";
    // const formBackgroundClass = "form-background";
    // const todoItemClass = "todo-item";
    function _createTodoColumnElement(dateString, todoItems) {
        const todoColumn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", ["todo-column"]);
        const dateH3 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("h3", ["todo-date"]);
        dateH3.innerText = dateString;
        const todoElements = todoItems.map((todoItem) => {
            const todoElement = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", [
                reusedClassNames.todoSmallClass,
            ]);
            todoElement.setAttribute("data-index", todoItem.itemId.toString());
            todoElement.setAttribute("data-done", todoItem.isComplete ? "true" : "false");
            todoElement.setAttribute("data-priority", todoItem.priority.valueOf().toString());
            const todoTitle = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("span", ["todo-title"]);
            todoTitle.innerText = todoItem.itemTitle;
            todoElement.append(todoTitle);
            return todoElement;
        });
        const todoItemsElement = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", ["todo-items-small"]);
        todoItemsElement.append(...todoElements);
        todoColumn.append(dateH3, todoItemsElement);
        return todoColumn;
    }
    function displayTodoItems(project) {
        var _a;
        mainElement.innerHTML = "";
        if (project === null) {
            return;
        }
        const mainHeading = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", ["project-heading"]);
        const projectTitleElement = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("h2", ["project-title"]);
        projectTitleElement.innerText = project.projectTitle;
        const addTodoButton = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("button", [
            reusedClassNames.addTodoButtonClass,
        ]);
        addTodoButton.innerHTML = (_images_plus_svg__WEBPACK_IMPORTED_MODULE_3___default());
        const addTodoText = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("span");
        addTodoText.innerText = "New ticket";
        addTodoButton.appendChild(addTodoText);
        mainHeading.append(projectTitleElement, addTodoButton);
        const TodoCollectionElement = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", ["todo-collection"]);
        // sort todo items in project by date, ascending. This ensures map insertion order is ascending by date.
        const sortedTodoItems = [...project.todoItems].sort((a, b) => a.dueDate.valueOf() - b.dueDate.valueOf());
        // make a 'column' per day with todo items
        const dayMap = new Map();
        for (const todoItem of sortedTodoItems) {
            if (!dayMap.get(todoItem.dueDate.toDateString())) {
                dayMap.set(todoItem.dueDate.toDateString(), []);
            }
            (_a = dayMap.get(todoItem.dueDate.toDateString())) === null || _a === void 0 ? void 0 : _a.push(todoItem);
        }
        const todoColumnElements = [];
        for (const [dateString, todoItems] of dayMap) {
            const prioritySortedItems = todoItems
                .sort((a, b) => a.priority - b.priority)
                .reverse();
            todoColumnElements.push(_createTodoColumnElement(dateString, prioritySortedItems));
        }
        TodoCollectionElement.append(...todoColumnElements);
        mainElement.append(mainHeading, TodoCollectionElement);
    }
    function _createAddTodoForm(cb) {
        const form = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("form", [reusedClassNames.addTodoFormClass]);
        const formCenter = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", ["form-body"]);
        const titleFormElementWrapper = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", [
            reusedClassNames.formElementWrapperClass,
        ]);
        const titleLabel = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("label");
        titleLabel.innerText = "Title:";
        titleLabel.setAttribute("for", "todo_title");
        const todoTitle = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("input");
        todoTitle.setAttribute("id", "todo_title");
        todoTitle.setAttribute("required", "");
        todoTitle.setAttribute("name", "title");
        titleFormElementWrapper.append(titleLabel, todoTitle);
        const descriptionFormElementWrapper = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", [
            reusedClassNames.formElementWrapperClass,
        ]);
        const descriptionLabel = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("label");
        descriptionLabel.innerText = "Description:";
        descriptionLabel.setAttribute("for", "todo_description");
        const descriptionInput = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("textarea");
        descriptionInput.setAttribute("id", "todo_description");
        descriptionInput.setAttribute("rows", "5");
        descriptionInput.setAttribute("required", "");
        descriptionInput.setAttribute("name", "description");
        descriptionFormElementWrapper.append(descriptionLabel, descriptionInput);
        const dueDateFormElementWrapper = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", [
            reusedClassNames.formElementWrapperClass,
        ]);
        const dueDateLabel = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("label");
        dueDateLabel.innerText = "Due at:";
        dueDateLabel.setAttribute("for", "todo_due_date");
        const dueDateInput = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("input");
        dueDateInput.setAttribute("type", "date");
        dueDateInput.setAttribute("id", "todo_due_date");
        dueDateInput.setAttribute("required", "");
        dueDateInput.setAttribute("name", "due_date");
        dueDateFormElementWrapper.append(dueDateLabel, dueDateInput);
        const priorityFormElementWrapper = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", [
            reusedClassNames.formElementWrapperClass,
        ]);
        const priorityLabel = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("label");
        priorityLabel.innerText = "Priority:";
        priorityLabel.setAttribute("for", "todo_priority");
        const priorityInput = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("select");
        priorityInput.setAttribute("id", "todo_priority");
        priorityInput.setAttribute("required", "");
        priorityInput.setAttribute("name", "priority");
        const lowPriorityOption = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("option");
        lowPriorityOption.setAttribute("value", "Low");
        lowPriorityOption.innerText = "Low";
        const mediumPriorityOption = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("option");
        mediumPriorityOption.setAttribute("value", "Medium");
        mediumPriorityOption.innerText = "Medium";
        const highPriorityOption = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("option");
        highPriorityOption.setAttribute("value", "High");
        highPriorityOption.innerText = "High";
        const criticalPriorityOption = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("option");
        criticalPriorityOption.setAttribute("value", "Critical");
        criticalPriorityOption.innerText = "Critical";
        priorityInput.append(lowPriorityOption, mediumPriorityOption, highPriorityOption, criticalPriorityOption);
        priorityFormElementWrapper.append(priorityLabel, priorityInput);
        const isCompleteFormElementWrapper = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", [
            reusedClassNames.formElementWrapperClass,
        ]);
        const isCompleteLabel = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("label");
        isCompleteLabel.innerText = "Done?";
        isCompleteLabel.setAttribute("for", "todo_is_complete");
        const isCompleteInput = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("input");
        isCompleteInput.setAttribute("type", "checkbox");
        isCompleteInput.setAttribute("id", "todo_is_complete");
        isCompleteInput.setAttribute("name", "is_complete");
        isCompleteFormElementWrapper.append(isCompleteLabel, isCompleteInput);
        const submitButton = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("button", ["add-todo-submit-button"]);
        submitButton.innerText = "Add";
        formCenter.append(titleFormElementWrapper, descriptionFormElementWrapper, dueDateFormElementWrapper, priorityFormElementWrapper, isCompleteFormElementWrapper, submitButton);
        form.appendChild(formCenter);
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const [itemTitle, description, dueDate, priority, isComplete] = [
                formData.get("title"),
                formData.get("description"),
                new Date(formData.get("due_date")),
                _models_index_js__WEBPACK_IMPORTED_MODULE_0__.Priority[formData.get("priority")],
                formData.get("is_complete") === "on",
            ];
            cb({ itemTitle, description, dueDate, priority, isComplete });
        });
        return form;
    }
    function bindCreateTodo(cb) {
        mainElement.addEventListener("click", (clickEvent) => {
            const clickTarget = clickEvent.target;
            if (clickTarget &&
                clickTarget instanceof Element &&
                clickTarget.closest(`.${reusedClassNames.addTodoButtonClass}`)) {
                // make form, add event listener on submit of that to invoke model's createTodo using submitted form information
                const form = _createAddTodoForm(cb);
                const formWrapper = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", [
                    reusedClassNames.formBackgroundClass,
                ]);
                formWrapper.append(form);
                form.addEventListener("submit", () => {
                    formWrapper.remove();
                });
                // define separately so I can call it recursively. function expression instead of declaration
                // for eslint reasons
                const clickHandler = function (clickEvent) {
                    const clickTarget = clickEvent.target;
                    if (clickTarget &&
                        clickTarget instanceof Element &&
                        !clickTarget.closest(`.${reusedClassNames.addTodoFormClass}`)) {
                        formWrapper.remove();
                    }
                    else {
                        document.addEventListener("click", clickHandler, { once: true });
                    }
                };
                // setTimeout so that the first click (on the add Todo button) doesn't run the handler
                setTimeout(() => document.addEventListener("click", clickHandler, { once: true }), 0);
                mainElement.append(formWrapper);
            }
        });
    }
    function _createReadTodoView(todoItem, deleteCb) {
        // presents data from todoItem. each field has a clickhandler to edit the value (for text fields just make contenteditable,
        // for dueDate have to swap it out for the form element datepicker)
        const todoItemElement = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", [
            reusedClassNames.todoItemClass,
        ]);
        const todoTitle = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("span", ["todo-read-title"]);
        todoTitle.addEventListener("keypress", _utils_js__WEBPACK_IMPORTED_MODULE_1__.ignoreEnterCallback);
        todoTitle.innerText = todoItem.itemTitle;
        const todoDelete = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("button", ["todo-delete"]);
        todoDelete.innerHTML = (_images_trash_can_outline_svg__WEBPACK_IMPORTED_MODULE_2___default());
        todoDelete.addEventListener("click", () => {
            deleteCb(todoItem.itemId);
        });
        const todoDescription = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("p", ["todo-description"]);
        todoDescription.innerText = todoItem.description;
        [todoTitle, todoDescription].forEach((element) => {
            element.addEventListener("click", () => {
                if (element.getAttribute("contenteditable")) {
                    return;
                }
                element.setAttribute("contenteditable", "");
                element.focus();
                element.addEventListener("focusout", () => {
                    element.removeAttribute("contenteditable");
                }, { once: true });
            });
        });
        const todoPriorityWrapper = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", ["todo-priority"]);
        const leftChevron = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("span");
        leftChevron.innerText = "<";
        const todoPriority = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("span");
        let currentPriority = todoItem.priority.valueOf();
        todoPriority.innerText = _models_index_js__WEBPACK_IMPORTED_MODULE_0__.Priority[currentPriority];
        const rightChevron = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("span");
        rightChevron.innerText = ">";
        [[leftChevron, -1], [rightChevron, 1]].forEach((e) => {
            const [element, transformation] = e;
            element.addEventListener("click", () => {
                currentPriority = Math.max(Math.min(currentPriority + transformation, 3), 0);
                todoPriority.innerText = _models_index_js__WEBPACK_IMPORTED_MODULE_0__.Priority[currentPriority];
            });
        });
        todoPriorityWrapper.append(leftChevron, todoPriority, rightChevron);
        const todoDueDate = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("input", ["todo-due-date"]);
        todoDueDate.setAttribute("type", "date");
        todoDueDate.setAttribute("value", todoItem.dueDate.toISOString().slice(0, 10));
        const todoIsComplete = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("input", ["todo-is-complete"]);
        todoIsComplete.setAttribute("type", "checkbox");
        if (todoItem.isComplete) {
            todoIsComplete.setAttribute("checked", "true");
        }
        todoItemElement.append(todoTitle, todoDelete, todoDescription, todoPriorityWrapper, todoDueDate, todoIsComplete);
        function getProps() {
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
    function bindReadTodo(readCb, updateCb, deleteCb) {
        mainElement.addEventListener("click", (clickEvent) => {
            const clickTarget = clickEvent.target;
            if (clickTarget &&
                clickTarget instanceof Element &&
                clickTarget.closest(`.${reusedClassNames.todoSmallClass}`) &&
                !clickTarget.closest(".todo-done")) {
                const todoItemElement = clickTarget.closest(`.${reusedClassNames.todoSmallClass}`);
                const todoIndex = parseInt((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._verifyNotNull)(todoItemElement.getAttribute("data-index")));
                const todoItem = readCb(todoIndex);
                const { element, getData } = _createReadTodoView(todoItem, deleteCb);
                const wrapper = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", [
                    reusedClassNames.formBackgroundClass,
                ]);
                wrapper.append(element);
                mainElement.append(wrapper);
                const clickHandler = function (clickEvent) {
                    const clickTarget = clickEvent.target;
                    if (clickTarget &&
                        clickTarget instanceof Element &&
                        !clickTarget.closest(`.${reusedClassNames.todoItemClass}`)) {
                        const props = getData();
                        updateCb(todoIndex, props);
                    }
                    else {
                        document.addEventListener("click", clickHandler, { once: true });
                    }
                };
                setTimeout(() => document.addEventListener("click", clickHandler, { once: true }), 0);
            }
        });
    }
    return {
        displayTodoItems: displayTodoItems,
        bindCreateTodo: bindCreateTodo,
        bindReadTodo: bindReadTodo,
    };
})();


/***/ }),

/***/ "./src/views/sidebarView.ts":
/*!**********************************!*\
  !*** ./src/views/sidebarView.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sidebarView": () => (/* binding */ sidebarView)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils.js */ "./src/views/utils.ts");
/* harmony import */ var _images_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/pencil-outline.svg */ "./src/views/images/pencil-outline.svg");
/* harmony import */ var _images_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_close_outline_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/close-outline.svg */ "./src/views/images/close-outline.svg");
/* harmony import */ var _images_close_outline_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_close_outline_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_note_outline_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/note-outline.svg */ "./src/views/images/note-outline.svg");
/* harmony import */ var _images_note_outline_svg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_note_outline_svg__WEBPACK_IMPORTED_MODULE_3__);




const sidebarView = (function () {
    const sidebarProjects = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._verifyNotNull)(document.querySelector(".projects"));
    const reusedClassNames = {
        addProjectButtonClass: "add-project-button",
        editButtonClass: "edit-project-button",
        deleteButtonClass: "delete-project-button",
        projectSidebarTitleClass: "project-title-sidebar",
    };
    function _createProjectElement(project) {
        const projectContainer = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("div", ["project"]);
        projectContainer.setAttribute("data-index", project.projectId.toString());
        const editButton = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("button", [
            reusedClassNames.editButtonClass,
        ]);
        editButton.innerHTML = (_images_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1___default());
        const projectTitle = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("span", [
            "flex-grow",
            reusedClassNames.projectSidebarTitleClass,
        ]);
        projectTitle.innerText = project.projectTitle;
        const projectTodoCount = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("div", ["project-todo-count"]);
        const projectNr = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("span");
        projectNr.innerText = project.todoItems.length.toString();
        const projectImage = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("div");
        projectImage.innerHTML = (_images_note_outline_svg__WEBPACK_IMPORTED_MODULE_3___default());
        projectTodoCount.append(projectNr, projectImage);
        const deleteButton = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("button", [
            reusedClassNames.deleteButtonClass,
        ]);
        deleteButton.innerHTML = (_images_close_outline_svg__WEBPACK_IMPORTED_MODULE_2___default());
        projectContainer.append(editButton, projectTitle, projectTodoCount, deleteButton);
        return projectContainer;
    }
    function _createAddProjectElement() {
        const addProjectButton = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("button", [
            reusedClassNames.addProjectButtonClass,
        ]);
        addProjectButton.innerText = "Add project";
        return addProjectButton;
    }
    function displayProjects(projects) {
        sidebarProjects.innerHTML = "";
        sidebarProjects.append(...projects.map(_createProjectElement));
        sidebarProjects.appendChild(_createAddProjectElement());
    }
    function bindCreateProject(cb) {
        sidebarProjects.addEventListener("click", (clickEvent) => {
            const clickTarget = clickEvent.target;
            if (clickTarget &&
                clickTarget instanceof Element &&
                clickTarget.classList.contains(reusedClassNames.addProjectButtonClass)) {
                cb({ projectTitle: "New project", todoItems: [] });
            }
        });
    }
    function bindReadProject(cb) {
        sidebarProjects.addEventListener("click", (clickEvent) => {
            const clickTarget = clickEvent.target;
            if (clickTarget &&
                clickTarget instanceof Element &&
                clickTarget.classList.contains(reusedClassNames.projectSidebarTitleClass) &&
                !("contenteditable" in clickTarget.attributes)) {
                const projectIndex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._verifyNotNull)((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._verifyNotNull)(clickTarget.closest(".project")).getAttribute("data-index"));
                cb(parseInt(projectIndex));
            }
        });
    }
    function bindUpdateProject(cb) {
        sidebarProjects.addEventListener("click", (clickEvent) => {
            const clickTarget = clickEvent.target;
            if (clickTarget &&
                clickTarget instanceof Element &&
                clickTarget.closest(`.${reusedClassNames.editButtonClass}`)) {
                // make project title field editable
                const project = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._verifyNotNull)(clickTarget.closest(".project"));
                const projectTitle = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._verifyNotNull)(project.querySelector(`.${reusedClassNames.projectSidebarTitleClass}`));
                const projectIndex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._verifyNotNull)(project.getAttribute("data-index"));
                projectTitle.setAttribute("contenteditable", "true");
                projectTitle.addEventListener("keypress", _utils_js__WEBPACK_IMPORTED_MODULE_0__.ignoreEnterCallback);
                projectTitle.focus();
                // add once-firing eventlistener on focusout after editing that calls the cb
                projectTitle.addEventListener("focusout", () => {
                    projectTitle.removeAttribute("contenteditable");
                    const newTitle = projectTitle.innerText;
                    cb(parseInt(projectIndex), newTitle);
                }, { once: true });
            }
        });
    }
    function bindDeleteProject(cb) {
        sidebarProjects.addEventListener("click", (clickEvent) => {
            const clickTarget = clickEvent.target;
            if (clickTarget &&
                clickTarget instanceof Element &&
                clickTarget.closest(`.${reusedClassNames.deleteButtonClass}`)) {
                const projectIndex = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._verifyNotNull)((0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._verifyNotNull)(clickTarget.closest(".project")).getAttribute("data-index"));
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


/***/ }),

/***/ "./src/views/utils.ts":
/*!****************************!*\
  !*** ./src/views/utils.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_createElement": () => (/* binding */ _createElement),
/* harmony export */   "_verifyNotNull": () => (/* binding */ _verifyNotNull),
/* harmony export */   "ignoreEnterCallback": () => (/* binding */ ignoreEnterCallback)
/* harmony export */ });
function _verifyNotNull(p) {
    if (p === null) {
        throw "Should not be null!";
    }
    return p;
}
function _createElement(tag, classes) {
    const element = document.createElement(tag);
    if (classes) {
        element.classList.add(...classes);
    }
    return element;
}
function ignoreEnterCallback(keyEvent) {
    if (keyEvent.key === "Enter") {
        keyEvent.preventDefault();
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controller.js */ "./src/controller.ts");
/* harmony import */ var _models_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/index.js */ "./src/models/index.ts");
/* harmony import */ var _views_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/index.js */ "./src/views/index.ts");




(0,_controller_js__WEBPACK_IMPORTED_MODULE_1__["default"])(_models_index_js__WEBPACK_IMPORTED_MODULE_2__.model, _views_index_js__WEBPACK_IMPORTED_MODULE_3__.sidebarView, _views_index_js__WEBPACK_IMPORTED_MODULE_3__.mainView);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLGNBQWMsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sYUFBYSxXQUFXLFlBQVksY0FBYyxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FB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LHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQ29CO0FBQ0M7QUFDZTtBQUN6RCwwREFBVSxDQUFDLG1EQUFLLEVBQUUsd0RBQVcsRUFBRSxxREFBUSxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ltYWdlcy9jbG9zZS1vdXRsaW5lLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW1hZ2VzL25vdGUtb3V0bGluZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ltYWdlcy9wZW5jaWwtb3V0bGluZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ltYWdlcy9wbHVzLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW1hZ2VzL3RyYXNoLWNhbi1vdXRsaW5lLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvbW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9wcm9qZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvdG9kby50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL21haW5WaWV3LnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zaWRlYmFyVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovLy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuXFxuICAtLWxpZ2h0ZXItYmxhY2s6IHJnYigyOSwgMjksIDI5KTtcXG4gIC0tZm9ybS1iZzogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQ5Myk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNTBweCwgMWZyKSA0ZnI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItYmxhY2spO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZmlsbDogd2hpdGU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcblxcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1Myk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tY291bnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWNvdW50ID4gZGl2IHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbixcXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uLFxcbi50b2RvLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi5lZGl0LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGZpbGw6IG9yYW5nZTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBmaWxsOiByZWQ7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHRlci1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyA+IGgyIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLmFkZC10b2RvLWJ1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvLWJ1dHRvbiA+IHN2ZyB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLmFkZC10b2RvLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmaWxsOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItYmxhY2spO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcblxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmZvcm0tYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XFxuICBnYXA6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4uZm9ybS1lbGVtZW50LXdyYXBwZXIge1xcbiAgZGlzcGxheTogY29udGVudHM7XFxufVxcblxcbi5hZGQtdG9kby1zdWJtaXQtYnV0dG9uIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHBhZGRpbmctYmxvY2s6IDAuNXJlbTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDI7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFkZC10b2RvLXN1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1ibGFjayk7XFxufVxcblxcbi5mb3JtLWJhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaW5zZXQ6IDA7XFxuICB6LWluZGV4OiAxMDAwO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBncmlkLXRlbXBsYXRlOiA4MCUgLyA4MCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDkzKTtcXG59XFxuXFxuLmFkZC10b2RvLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgd2lkdGg6IGNsYW1wKDIwMHB4LCA4MCUsIDUwMHB4KTtcXG4gIG1pbi1oZWlnaHQ6IDgwJTtcXG59XFxuXFxuLyogVG9kbyBjb2xsZWN0aW9uICovXFxuLnRvZG8tY29sbGVjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQ7XFxuXFxuICBnYXA6IDJyZW07XFxufVxcblxcbi50b2RvLWNvbHVtbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWNvbHVtbiArIC50b2RvLWNvbHVtbjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgbGVmdDogLTAuNXJlbTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ibGFjayk7XFxufVxcblxcbi50b2RvLWl0ZW1zLXNtYWxsIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4udG9kby1zbWFsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1heC13aWR0aDogMjVjaDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLXNtYWxsOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItYmxhY2spO1xcbn1cXG5cXG4vKiBUb2RvIHZpZXcgKi9cXG4udG9kby1pdGVtIHtcXG4gIHdpZHRoOiBjbGFtcCgyMDBweCwgODAlLCA1MDBweCk7XFxuICBtaW4taGVpZ2h0OiA4MCU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuXFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgXFxcInRpdGxlIGRvbmUgLiBkZWxldGVcXFwiIGF1dG9cXG4gICAgXFxcInByaW9yaXR5IGR1ZURhdGUgLiAuXFxcIiBhdXRvXFxuICAgIFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiAuXFxcIiAxZnIgLyBtaW5tYXgoMTJjaCwgYXV0bylcXG4gICAgYXV0byAxZnIgYXV0bztcXG4gIGdhcDogMC41cmVtIDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1yZWFkLXRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRvZG8tZGVsZXRlIHtcXG4gIGdyaWQtYXJlYTogZGVsZXRlO1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi50b2RvLWRlbGV0ZTpob3ZlciB7XFxuICBmaWxsOiByZWQ7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ibGFjayk7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHkge1xcbiAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4udG9kby1wcmlvcml0eSA+IHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tZHVlLWRhdGUge1xcbiAgZ3JpZC1hcmVhOiBkdWVEYXRlO1xcbn1cXG5cXG4udG9kby1pcy1jb21wbGV0ZSB7XFxuICBncmlkLWFyZWE6IGRvbmU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4vKiBjaGVja2JveCBjb25kaXRpb25hbCBzdHlsaW5nICovXFxuLnRvZG8tc21hbGwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1zbWFsbFtkYXRhLWRvbmU9XFxcInRydWVcXFwiXTo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBsZWZ0OiBjYWxjKDEwMCUgKyAxcmVtKTtcXG5cXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiAwLjMyNXJlbTtcXG4gIHJvdGF0ZTogNDVkZWc7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7OztFQUdFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSx1QkFBdUI7O0VBRXZCLGdDQUFnQztFQUNoQyxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNkJBQTZCO0VBQzdCLGVBQWU7QUFD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RUFDZixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsYUFBYTs7RUFFYiwwQ0FBMEM7RUFDMUMsNENBQTRDO0FBQzlDOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7O0VBRVgsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixXQUFXO0FBQ2I7O0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCx1QkFBdUI7O0VBRXZCLFlBQVk7RUFDWixlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0Isa0NBQWtDO0VBQ2xDLGlDQUFpQztBQUNuQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG46cm9vdCB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG5cXG4gIC0tbGlnaHRlci1ibGFjazogcmdiKDI5LCAyOSwgMjkpO1xcbiAgLS1mb3JtLWJnOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDkzKTtcXG59XFxuXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5pbnB1dCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDI1MHB4LCAxZnIpIDRmcjtcXG59XFxuXFxuI3NpZGViYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1ibGFjayk7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmaWxsOiB3aGl0ZTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuLnByb2plY3RzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuXFxuICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDFmciBhdXRvIGF1dG87XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiA0cHggOHB4O1xcblxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4ucHJvamVjdDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUzKTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdG9kby1jb3VudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tY291bnQgPiBkaXYge1xcbiAgd2lkdGg6IDIwcHg7XFxufVxcblxcbi5lZGl0LXByb2plY3QtYnV0dG9uLFxcbi5kZWxldGUtcHJvamVjdC1idXR0b24sXFxuLnRvZG8tZGVsZXRlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgZmlsbDogb3JhbmdlO1xcbn1cXG5cXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGZpbGw6IHJlZDtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5tYWluIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHBhZGRpbmctbGVmdDogMnJlbTtcXG4gIHBhZGRpbmctdG9wOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkaW5nIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC1oZWFkaW5nID4gaDIge1xcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4uYWRkLXRvZG8tYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItYmxhY2spO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgcGFkZGluZzogMC4yNXJlbSAxcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0cHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYWRkLXRvZG8tYnV0dG9uID4gc3ZnIHtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uYWRkLXRvZG8tYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZpbGw6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1ibGFjayk7XFxufVxcblxcbi5hZGQtdG9kby1mb3JtIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICBvdmVyZmxvdzogc2Nyb2xsO1xcbn1cXG5cXG4uZm9ybS1ib2R5IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1heC1jb250ZW50IDFmcjtcXG4gIGdhcDogMC41cmVtIDFyZW07XFxufVxcblxcbi5mb3JtLWVsZW1lbnQtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBjb250ZW50cztcXG59XFxuXFxuLmFkZC10b2RvLXN1Ym1pdC1idXR0b24ge1xcbiAgd2lkdGg6IDYwJTtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBtYXJnaW4taW5saW5lOiBhdXRvO1xcbiAgcGFkZGluZy1ibG9jazogMC41cmVtO1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IHNwYW4gMjtcXG5cXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItYmxhY2spO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uYWRkLXRvZG8tc3VibWl0LWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG59XFxuXFxuLmZvcm0tYmFja2dyb3VuZCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBpbnNldDogMDtcXG4gIHotaW5kZXg6IDEwMDA7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcbiAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcXG5cXG4gIGdyaWQtdGVtcGxhdGU6IDgwJSAvIDgwJTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40OTMpO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICB3aWR0aDogY2xhbXAoMjAwcHgsIDgwJSwgNTAwcHgpO1xcbiAgbWluLWhlaWdodDogODAlO1xcbn1cXG5cXG4vKiBUb2RvIGNvbGxlY3Rpb24gKi9cXG4udG9kby1jb2xsZWN0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcXG4gIGdyaWQtYXV0by1jb2x1bW5zOiBtYXgtY29udGVudDtcXG5cXG4gIGdhcDogMnJlbTtcXG59XFxuXFxuLnRvZG8tY29sdW1uIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tY29sdW1uICsgLnRvZG8tY29sdW1uOjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBsZWZ0OiAtMC41cmVtO1xcbiAgdG9wOiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG59XFxuXFxuLnRvZG8taXRlbXMtc21hbGwge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgZ2FwOiAwLjVyZW07XFxuICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XFxufVxcblxcbi50b2RvLXNtYWxsIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItYmxhY2spO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgbWF4LXdpZHRoOiAyNWNoO1xcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnRvZG8tc21hbGw6aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1ibGFjayk7XFxufVxcblxcbi8qIFRvZG8gdmlldyAqL1xcbi50b2RvLWl0ZW0ge1xcbiAgd2lkdGg6IGNsYW1wKDIwMHB4LCA4MCUsIDUwMHB4KTtcXG4gIG1pbi1oZWlnaHQ6IDgwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG5cXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICBcXFwidGl0bGUgZG9uZSAuIGRlbGV0ZVxcXCIgYXV0b1xcbiAgICBcXFwicHJpb3JpdHkgZHVlRGF0ZSAuIC5cXFwiIGF1dG9cXG4gICAgXFxcImRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIGRlc2NyaXB0aW9uIC5cXFwiIDFmciAvIG1pbm1heCgxMmNoLCBhdXRvKVxcbiAgICBhdXRvIDFmciBhdXRvO1xcbiAgZ2FwOiAwLjVyZW0gMXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLXJlYWQtdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gIHBsYWNlLXNlbGY6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4udG9kby1kZWxldGUge1xcbiAgZ3JpZC1hcmVhOiBkZWxldGU7XFxuICB3aWR0aDogMzBweDtcXG59XFxuXFxuLnRvZG8tZGVsZXRlOmhvdmVyIHtcXG4gIGZpbGw6IHJlZDtcXG59XFxuXFxuLnRvZG8tZGVzY3JpcHRpb24ge1xcbiAgZ3JpZC1hcmVhOiBkZXNjcmlwdGlvbjtcXG4gIGFsaWduLXNlbGY6IHN0YXJ0O1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItYmxhY2spO1xcbn1cXG5cXG4udG9kby1wcmlvcml0eSB7XFxuICBncmlkLWFyZWE6IHByaW9yaXR5O1xcbiAgd2lkdGg6IDEwMCU7XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi50b2RvLXByaW9yaXR5ID4gc3BhbjpudGgtY2hpbGQoMikge1xcbiAgZmxleC1ncm93OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4udG9kby1kdWUtZGF0ZSB7XFxuICBncmlkLWFyZWE6IGR1ZURhdGU7XFxufVxcblxcbi50b2RvLWlzLWNvbXBsZXRlIHtcXG4gIGdyaWQtYXJlYTogZG9uZTtcXG4gIGp1c3RpZnktc2VsZjogY2VudGVyO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi8qIGNoZWNrYm94IGNvbmRpdGlvbmFsIHN0eWxpbmcgKi9cXG4udG9kby1zbWFsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLXNtYWxsW2RhdGEtZG9uZT1cXFwidHJ1ZVxcXCJdOjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGxlZnQ6IGNhbGMoMTAwJSArIDFyZW0pO1xcblxcbiAgaGVpZ2h0OiAxcmVtO1xcbiAgd2lkdGg6IDAuMzI1cmVtO1xcbiAgcm90YXRlOiA0NWRlZztcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMywxNi43NEw3Ljc2LDEyTDMsNy4yNkw3LjI2LDNMMTIsNy43NkwxNi43NCwzTDIxLDcuMjZMMTYuMjQsMTJMMjEsMTYuNzRMMTYuNzQsMjFMMTIsMTYuMjRMNy4yNiwyMUwzLDE2Ljc0TTEyLDEzLjQxTDE2Ljc0LDE4LjE2TDE4LjE2LDE2Ljc0TDEzLjQxLDEyTDE4LjE2LDcuMjZMMTYuNzQsNS44NEwxMiwxMC41OUw3LjI2LDUuODRMNS44NCw3LjI2TDEwLjU5LDEyTDUuODQsMTYuNzRMNy4yNiwxOC4xNkwxMiwxMy40MVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIj48cGF0aCBkPVxcXCJNMTQsMTBIMTkuNUwxNCw0LjVWMTBNNSwzSDE1TDIxLDlWMTlBMiwyIDAgMCwxIDE5LDIxSDVDMy44OSwyMSAzLDIwLjEgMywxOVY1QzMsMy44OSAzLjg5LDMgNSwzTTUsNVYxOUgxOVYxMkgxMlY1SDVaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTE0LjA2LDlMMTUsOS45NEw1LjkyLDE5SDVWMTguMDhMMTQuMDYsOU0xNy42NiwzQzE3LjQxLDMgMTcuMTUsMy4xIDE2Ljk2LDMuMjlMMTUuMTMsNS4xMkwxOC44OCw4Ljg3TDIwLjcxLDcuMDRDMjEuMSw2LjY1IDIxLjEsNiAyMC43MSw1LjYzTDE4LjM3LDMuMjlDMTguMTcsMy4wOSAxNy45MiwzIDE3LjY2LDNNMTQuMDYsNi4xOUwzLDE3LjI1VjIxSDYuNzVMMTcuODEsOS45NEwxNC4wNiw2LjE5WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIyIDIgMjAgMjBcXFwiPjxwYXRoIGQ9XFxcIk0xOSwxM0gxM1YxOUgxMVYxM0g1VjExSDExVjVIMTNWMTFIMTlWMTNaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTksM1Y0SDRWNkg1VjE5QTIsMiAwIDAsMCA3LDIxSDE3QTIsMiAwIDAsMCAxOSwxOVY2SDIwVjRIMTVWM0g5TTcsNkgxN1YxOUg3VjZNOSw4VjE3SDExVjhIOU0xMyw4VjE3SDE1VjhIMTNaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJpbXBvcnQge1xuICBJTW9kZWwsXG4gIFRvZG9JdGVtUHJvcHMsXG4gIElQcm9qZWN0LFxuICBJU2F2YWJsZVRvZG9JdGVtLFxufSBmcm9tIFwiLi9tb2RlbHMvaW5kZXguanNcIjtcbmltcG9ydCB7IElTaWRlYmFyVmlldywgSU1haW5WaWV3IH0gZnJvbSBcIi4vdmlld3MvaW5kZXguanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKFxuICBtb2RlbDogSU1vZGVsLFxuICBzaWRlYmFyVmlldzogSVNpZGViYXJWaWV3LFxuICBtYWluVmlldzogSU1haW5WaWV3XG4pIHtcbiAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHNpZGViYXJWaWV3LmRpc3BsYXlQcm9qZWN0cyhtb2RlbC5wcm9qZWN0cyk7XG4gICAgbWFpblZpZXcuZGlzcGxheVRvZG9JdGVtcyhtb2RlbC5nZXRBY3RpdmVQcm9qZWN0KCkpO1xuICB9XG5cbiAgbW9kZWwuYmluZFJlbmRlcihyZW5kZXIpO1xuXG4gIHNpZGViYXJWaWV3LmJpbmRDcmVhdGVQcm9qZWN0KG1vZGVsLmNyZWF0ZVByb2plY3QuYmluZChudWxsKSk7XG4gIC8vIG5lZWQgdGhlIG1haW5WaWV3IGNvbXBsZXRlZCB0byBwYXNzIGl0cyByZW5kZXIgbWV0aG9kIHRvIHNpZGViYXJWaWV3LmJpbmRSZWFkUHJvamVjdCwgc2luY2UgY2xpY2tpbmcgYSBwcm9qZWN0XG4gIC8vIHdpbGwgbWFpbmx5IHJlcmVuZGVyIHRoZSBtYWluIGNvbnRlbnQsIG5vdCB0aGUgc2lkZWJhclxuICBzaWRlYmFyVmlldy5iaW5kUmVhZFByb2plY3QobW9kZWwucmVhZFByb2plY3QuYmluZChudWxsKSk7XG4gIHNpZGViYXJWaWV3LmJpbmRVcGRhdGVQcm9qZWN0KG1vZGVsLnVwZGF0ZVByb2plY3RUaXRsZS5iaW5kKG51bGwpKTtcbiAgc2lkZWJhclZpZXcuYmluZERlbGV0ZVByb2plY3QobW9kZWwuZGVsZXRlUHJvamVjdC5iaW5kKG51bGwpKTtcblxuICBtYWluVmlldy5iaW5kQ3JlYXRlVG9kbygodG9kb1Byb3BzOiBUb2RvSXRlbVByb3BzKSA9PiB7XG4gICAgcmV0dXJuIChtb2RlbC5nZXRBY3RpdmVQcm9qZWN0KCkgYXMgSVByb2plY3QpLmNyZWF0ZVRvZG9JdGVtKHRvZG9Qcm9wcyk7XG4gIH0pO1xuICBtYWluVmlldy5iaW5kUmVhZFRvZG8oXG4gICAgKHRvZG9JbmRleDogbnVtYmVyKSA9PiB7XG4gICAgICByZXR1cm4gKG1vZGVsLmdldEFjdGl2ZVByb2plY3QoKSBhcyBJUHJvamVjdCkucmVhZFRvZG9JdGVtKFxuICAgICAgICB0b2RvSW5kZXhcbiAgICAgICkgYXMgSVNhdmFibGVUb2RvSXRlbTtcbiAgICB9LFxuICAgIChpdGVtSWQ6IG51bWJlciwgcHJvcHM6IFRvZG9JdGVtUHJvcHMpID0+IHtcbiAgICAgIHJldHVybiAobW9kZWwuZ2V0QWN0aXZlUHJvamVjdCgpIGFzIElQcm9qZWN0KS51cGRhdGVUb2RvSXRlbShcbiAgICAgICAgaXRlbUlkLFxuICAgICAgICBwcm9wc1xuICAgICAgKTtcbiAgICB9LFxuICAgIChpdGVtSWQ6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIChtb2RlbC5nZXRBY3RpdmVQcm9qZWN0KCkgYXMgSVByb2plY3QpLmRlbGV0ZVRvZG9JdGVtKGl0ZW1JZCk7XG4gICAgfVxuICApO1xuXG4gIHJlbmRlcigpO1xufVxuIiwiZXhwb3J0IHsgbW9kZWwsIElNb2RlbCB9IGZyb20gXCIuL21vZGVsLmpzXCI7XG5leHBvcnQgeyBJUHJvamVjdCwgUHJvamVjdFByb3BzIH0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuZXhwb3J0IHtcbiAgVG9kb0l0ZW1Qcm9wcyxcbiAgSVRvZG9JdGVtLFxuICBQcmlvcml0eSxcbiAgSVNhdmFibGVUb2RvSXRlbSxcbn0gZnJvbSBcIi4vdG9kby5qc1wiO1xuIiwiaW1wb3J0IHtcbiAgSVNhdmFibGVQcm9qZWN0LFxuICBJUHJvamVjdCxcbiAgY3JlYXRlUHJvamVjdCxcbiAgUHJvamVjdFByb3BzLFxufSBmcm9tIFwiLi9wcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBUb2RvSXRlbVByb3BzIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNb2RlbCB7XG4gIHByb2plY3RzOiBJUHJvamVjdFtdO1xuXG4gIGNyZWF0ZVByb2plY3QocHJvamVjdFByb3BzOiBQcm9qZWN0UHJvcHMpOiBJUHJvamVjdDtcbiAgcmVhZFByb2plY3QocHJvamVjdElkOiBudW1iZXIpOiBudWxsIHwgSVByb2plY3Q7XG4gIHVwZGF0ZVByb2plY3RUaXRsZShwcm9qZWN0SWQ6IG51bWJlciwgcHJvamVjdFRpdGxlOiBzdHJpbmcpOiB2b2lkO1xuICBkZWxldGVQcm9qZWN0KHByb2plY3RJZDogbnVtYmVyKTogdm9pZDtcblxuICBiaW5kUmVuZGVyKGNiOiAoKSA9PiB2b2lkKTogdm9pZDtcblxuICBnZXRBY3RpdmVQcm9qZWN0KCk6IElQcm9qZWN0IHwgbnVsbDtcbn1cblxuLy8gRGF0ZSBvYmplY3RzIGJlY29tZSBzdHJpbmdzIGFmdGVyIEpTT04uc3RyaW5naWZ5LCBzbyB0eXBlIG9mIGRlc2VyaWFsaXplZCBvYmplY3QgaXMgZGlmZmVyZW50XG50eXBlIGRlc2VyaWFsaXplZFRvZG9JdGVtUHJvcHMgPSBPbWl0PFRvZG9JdGVtUHJvcHMsIFwiZHVlRGF0ZVwiPiAmIHtcbiAgZHVlRGF0ZTogc3RyaW5nO1xufTtcbnR5cGUgZGVzZXJpYWxpemVkUHJvamVjdFByb3BzID0gT21pdDxQcm9qZWN0UHJvcHMsIFwidG9kb0l0ZW1zXCI+ICYge1xuICB0b2RvSXRlbXM6IGRlc2VyaWFsaXplZFRvZG9JdGVtUHJvcHNbXTtcbn07XG5cbmV4cG9ydCBjb25zdCBtb2RlbCA9IChmdW5jdGlvbiAoKTogSU1vZGVsIHtcbiAgY29uc3QgbG9jYWxTdG9yYWdlS2V5ID0gXCJwcm9qZWN0c1wiO1xuICBmdW5jdGlvbiBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk6IHZvaWQge1xuICAgIGNvbnN0IHNlcmlhbGl6ZWRQcm9qZWN0cyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4gcHJvamVjdC5zZXJpYWxpemUoKSk7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obG9jYWxTdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeShzZXJpYWxpemVkUHJvamVjdHMpKTtcbiAgICBjb25zb2xlLmxvZyhcIm1vY2tlZCBzYXZlXCIpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2luaXRpYWxpemVGcm9tTG9jYWxTdG9yYWdlKCk6IElTYXZhYmxlUHJvamVjdFtdIHtcbiAgICBjb25zdCBzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0obG9jYWxTdG9yYWdlS2V5KTtcbiAgICBpZiAocyA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGRlc2VyaWFsaXplZFByb2plY3RQcm9wcyA9IEpTT04ucGFyc2UoXG4gICAgICBzXG4gICAgKSBhcyBkZXNlcmlhbGl6ZWRQcm9qZWN0UHJvcHNbXTtcbiAgICBjb25zdCBwcm9wZXJQcm9qZWN0UHJvcHM6IFByb2plY3RQcm9wc1tdID0gZGVzZXJpYWxpemVkUHJvamVjdFByb3BzLm1hcChcbiAgICAgIChkZXNlcmlhbGl6ZWRQcm9qZWN0UHJvcHMpID0+IHtcbiAgICAgICAgY29uc3QgcHJvcGVyVG9kb0l0ZW1Qcm9wczogVG9kb0l0ZW1Qcm9wc1tdID1cbiAgICAgICAgICBkZXNlcmlhbGl6ZWRQcm9qZWN0UHJvcHMudG9kb0l0ZW1zLm1hcChcbiAgICAgICAgICAgIChkZXNlcmlhbGl6ZWRUb2RvSXRlbVByb3BzKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzOiBUb2RvSXRlbVByb3BzID0ge1xuICAgICAgICAgICAgICAgIGl0ZW1UaXRsZTogZGVzZXJpYWxpemVkVG9kb0l0ZW1Qcm9wcy5pdGVtVGl0bGUsXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2VyaWFsaXplZFRvZG9JdGVtUHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUoZGVzZXJpYWxpemVkVG9kb0l0ZW1Qcm9wcy5kdWVEYXRlKSxcbiAgICAgICAgICAgICAgICBwcmlvcml0eTogZGVzZXJpYWxpemVkVG9kb0l0ZW1Qcm9wcy5wcmlvcml0eSxcbiAgICAgICAgICAgICAgICBpc0NvbXBsZXRlOiBkZXNlcmlhbGl6ZWRUb2RvSXRlbVByb3BzLmlzQ29tcGxldGUsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIHJldHVybiBuZXdQcm9wcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHByb2plY3RUaXRsZTogZGVzZXJpYWxpemVkUHJvamVjdFByb3BzLnByb2plY3RUaXRsZSxcbiAgICAgICAgICB0b2RvSXRlbXM6IHByb3BlclRvZG9JdGVtUHJvcHMsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgKTtcblxuICAgIGNvbnNvbGUubG9nKHsgLi4uZGVzZXJpYWxpemVkUHJvamVjdFByb3BzIH0pO1xuICAgIHJldHVybiBwcm9wZXJQcm9qZWN0UHJvcHMubWFwKChwcm9qZWN0QXJncykgPT4ge1xuICAgICAgcmV0dXJuIGNyZWF0ZVByb2plY3QocHJvamVjdEFyZ3MsIF9jb21taXQpO1xuICAgIH0pO1xuICB9XG5cbiAgY29uc3QgcHJvamVjdHM6IElTYXZhYmxlUHJvamVjdFtdID0gX2luaXRpYWxpemVGcm9tTG9jYWxTdG9yYWdlKCk7XG4gIGxldCBjdXJyZW50QWN0aXZlUHJvamVjdDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XG4gIGxldCByZW5kZXJDYWxsQmFjayA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm47XG4gIH07XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZVByb2plY3QocHJvamVjdFByb3BzOiBQcm9qZWN0UHJvcHMpOiBJUHJvamVjdCB7XG4gICAgY29uc3QgbmV3UHJvamVjdCA9IGNyZWF0ZVByb2plY3QocHJvamVjdFByb3BzLCBfY29tbWl0KTtcbiAgICBwcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIF9jb21taXQobmV3UHJvamVjdC5wcm9qZWN0SWQpO1xuICAgIHJldHVybiBuZXdQcm9qZWN0O1xuICB9XG5cbiAgZnVuY3Rpb24gcmVhZFByb2plY3QocHJvamVjdElkOiBudW1iZXIpIHtcbiAgICBmb3IgKGNvbnN0IHByb2plY3Qgb2YgcHJvamVjdHMpIHtcbiAgICAgIGlmIChwcm9qZWN0LnByb2plY3RJZCA9PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgX2NvbW1pdChwcm9qZWN0SWQpO1xuICAgICAgICByZXR1cm4gcHJvamVjdDtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0VGl0bGUocHJvamVjdElkOiBudW1iZXIsIHByb2plY3RUaXRsZTogc3RyaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RzW2ldLnByb2plY3RJZCA9PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgcHJvamVjdHNbaV0ucHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlO1xuICAgICAgICBfY29tbWl0KHByb2plY3RJZCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdElkOiBudW1iZXIpOiB2b2lkIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAocHJvamVjdHNbaV0ucHJvamVjdElkID09IHByb2plY3RJZCkge1xuICAgICAgICBwcm9qZWN0cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIF9jb21taXQobnVsbCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmRSZW5kZXIoY2I6ICgpID0+IHZvaWQpOiB2b2lkIHtcbiAgICByZW5kZXJDYWxsQmFjayA9IGNiO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NvbW1pdChwcm9qZWN0SWQ6IG51bWJlciB8IG51bGwpIHtcbiAgICBjdXJyZW50QWN0aXZlUHJvamVjdCA9IHByb2plY3RJZDtcbiAgICBfc2F2ZVRvTG9jYWxTdG9yYWdlKCk7XG4gICAgcmVuZGVyQ2FsbEJhY2soKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdldEFjdGl2ZVByb2plY3QoKTogSVByb2plY3QgfCBudWxsIHtcbiAgICBpZiAoY3VycmVudEFjdGl2ZVByb2plY3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gcHJvamVjdHMuZmluZChcbiAgICAgICh2YWx1ZSkgPT4gdmFsdWUucHJvamVjdElkID09PSBjdXJyZW50QWN0aXZlUHJvamVjdFxuICAgICk7XG4gICAgaWYgKGFjdGl2ZVByb2plY3QgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgYENhbm5vdCByZXRyaWV2ZSBhY3RpdmUgcHJvamVjdCwgaWQgb2YgYWN0aXZlIHByb2plY3QgaXMgJHtjdXJyZW50QWN0aXZlUHJvamVjdH1gO1xuICAgIH1cbiAgICByZXR1cm4gYWN0aXZlUHJvamVjdDtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvamVjdHM6IHByb2plY3RzLFxuXG4gICAgY3JlYXRlUHJvamVjdDogX2NyZWF0ZVByb2plY3QsXG4gICAgcmVhZFByb2plY3Q6IHJlYWRQcm9qZWN0LFxuICAgIHVwZGF0ZVByb2plY3RUaXRsZTogdXBkYXRlUHJvamVjdFRpdGxlLFxuICAgIGRlbGV0ZVByb2plY3Q6IGRlbGV0ZVByb2plY3QsXG5cbiAgICBiaW5kUmVuZGVyOiBiaW5kUmVuZGVyLFxuXG4gICAgZ2V0QWN0aXZlUHJvamVjdDogZ2V0QWN0aXZlUHJvamVjdCxcbiAgfTtcbn0pKCk7XG4iLCJpbXBvcnQgSVNhdmFibGUgZnJvbSBcIi4vc2F2YWJsZS5qc1wiO1xuaW1wb3J0IHsgVG9kb0l0ZW1Qcm9wcywgSVNhdmFibGVUb2RvSXRlbSwgY3JlYXRlVG9kb0l0ZW0gfSBmcm9tIFwiLi90b2RvLmpzXCI7XG5cbi8vIFByb2plY3RcbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdFByb3BzIHtcbiAgcHJvamVjdFRpdGxlOiBzdHJpbmc7XG4gIHRvZG9JdGVtczogVG9kb0l0ZW1Qcm9wc1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElQcm9qZWN0IHtcbiAgcHJvamVjdElkOiBudW1iZXI7XG4gIHByb2plY3RUaXRsZTogc3RyaW5nO1xuICB0b2RvSXRlbXM6IElTYXZhYmxlVG9kb0l0ZW1bXTtcblxuICBjcmVhdGVUb2RvSXRlbShwcm9wczogVG9kb0l0ZW1Qcm9wcyk6IElTYXZhYmxlVG9kb0l0ZW07XG4gIHJlYWRUb2RvSXRlbShpdGVtSWQ6IG51bWJlcik6IHVuZGVmaW5lZCB8IElTYXZhYmxlVG9kb0l0ZW07XG4gIHVwZGF0ZVRvZG9JdGVtKGl0ZW1JZDogbnVtYmVyLCBwcm9wczogVG9kb0l0ZW1Qcm9wcyk6IHZvaWQ7XG4gIGRlbGV0ZVRvZG9JdGVtKGl0ZW1JZDogbnVtYmVyKTogdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgSVNhdmFibGVQcm9qZWN0ID0gSVByb2plY3QgJiBJU2F2YWJsZTxQcm9qZWN0UHJvcHM+O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlUHJvamVjdCA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBwcm9qZWN0SWRDb3VudGVyID0gMDtcblxuICBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KFxuICAgIHByb3BzOiBQcm9qZWN0UHJvcHMsXG4gICAgY29tbWl0Q2FsbGJhY2s6IChwcm9qZWN0SWQ6IG51bWJlcikgPT4gdm9pZFxuICApOiBJU2F2YWJsZVByb2plY3Qge1xuICAgIGNvbnN0IHRvZG9JdGVtcyA9IHByb3BzLnRvZG9JdGVtcy5tYXAoKHRvZG9JdGVtUHJvcHMpID0+XG4gICAgICBjcmVhdGVUb2RvSXRlbSh0b2RvSXRlbVByb3BzKVxuICAgICk7XG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gcHJvcHMucHJvamVjdFRpdGxlO1xuICAgIGNvbnN0IHByb2plY3RJZCA9IHByb2plY3RJZENvdW50ZXIrKztcbiAgICBjb25zdCBjdXJyaWVkQ29tbWl0Q2FsbGJhY2sgPSAoKSA9PiBjb21taXRDYWxsYmFjayhwcm9qZWN0SWQpO1xuXG4gICAgY29uc3QgX2NyZWF0ZVRvZG9JdGVtID0gZnVuY3Rpb24gKHByb3BzOiBUb2RvSXRlbVByb3BzKTogSVNhdmFibGVUb2RvSXRlbSB7XG4gICAgICBjb25zdCBuZXdJdGVtID0gY3JlYXRlVG9kb0l0ZW0ocHJvcHMpO1xuICAgICAgdG9kb0l0ZW1zLnB1c2gobmV3SXRlbSk7XG4gICAgICBfY29tbWl0KCk7XG4gICAgICByZXR1cm4gbmV3SXRlbTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcmVhZFRvZG9JdGVtKGl0ZW1JZDogbnVtYmVyKTogdW5kZWZpbmVkIHwgSVNhdmFibGVUb2RvSXRlbSB7XG4gICAgICBmb3IgKGNvbnN0IHRvZG9JdGVtIG9mIHRvZG9JdGVtcykge1xuICAgICAgICBpZiAodG9kb0l0ZW0uaXRlbUlkID09IGl0ZW1JZCkge1xuICAgICAgICAgIF9jb21taXQoKTtcbiAgICAgICAgICByZXR1cm4gdG9kb0l0ZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUb2RvSXRlbShpdGVtSWQ6IG51bWJlciwgcHJvcHM6IFRvZG9JdGVtUHJvcHMpOiB2b2lkIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2RvSXRlbXNbaV0uaXRlbUlkID09IGl0ZW1JZCkge1xuICAgICAgICAgIHRvZG9JdGVtc1tpXSA9IGNyZWF0ZVRvZG9JdGVtKHByb3BzKTtcbiAgICAgICAgICBfY29tbWl0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZWxldGVUb2RvSXRlbShpdGVtSWQ6IG51bWJlcik6IHZvaWQge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvSXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRvZG9JdGVtc1tpXS5pdGVtSWQgPT0gaXRlbUlkKSB7XG4gICAgICAgICAgdG9kb0l0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBfY29tbWl0KCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfY29tbWl0KCkge1xuICAgICAgY3VycmllZENvbW1pdENhbGxiYWNrKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc2VyaWFsaXplKCk6IFByb2plY3RQcm9wcyB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0VGl0bGU6IHByb2plY3RUaXRsZSxcbiAgICAgICAgdG9kb0l0ZW1zOiB0b2RvSXRlbXMubWFwKCh0b2RvSXRlbSkgPT4gdG9kb0l0ZW0uc2VyaWFsaXplKCkpLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcHJvamVjdElkOiBwcm9qZWN0SWQsXG4gICAgICB0b2RvSXRlbXM6IHRvZG9JdGVtcyxcbiAgICAgIHByb2plY3RUaXRsZTogcHJvamVjdFRpdGxlLFxuXG4gICAgICBjcmVhdGVUb2RvSXRlbTogX2NyZWF0ZVRvZG9JdGVtLFxuICAgICAgcmVhZFRvZG9JdGVtOiByZWFkVG9kb0l0ZW0sXG4gICAgICB1cGRhdGVUb2RvSXRlbTogdXBkYXRlVG9kb0l0ZW0sXG4gICAgICBkZWxldGVUb2RvSXRlbTogZGVsZXRlVG9kb0l0ZW0sXG5cbiAgICAgIHNlcmlhbGl6ZTogc2VyaWFsaXplLFxuICAgIH07XG4gIH1cblxuICByZXR1cm4gY3JlYXRlUHJvamVjdDtcbn0pKCk7XG4iLCJpbXBvcnQgSVNhdmFibGUgZnJvbSBcIi4vc2F2YWJsZS5qc1wiO1xuXG4vLyBNb2RlbFxuLy8gVG9kbyBpdGVtc1xuZXhwb3J0IGVudW0gUHJpb3JpdHkge1xuICBMb3cgPSAwLFxuICBNZWRpdW0sXG4gIEhpZ2gsXG4gIENyaXRpY2FsLFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRvZG9JdGVtUHJvcHMge1xuICBpdGVtVGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZHVlRGF0ZTogRGF0ZTtcbiAgcHJpb3JpdHk6IFByaW9yaXR5O1xuICBpc0NvbXBsZXRlOiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElUb2RvSXRlbSB7XG4gIGl0ZW1JZDogbnVtYmVyO1xuICBpdGVtVGl0bGU6IHN0cmluZztcbiAgZGVzY3JpcHRpb246IHN0cmluZztcbiAgZHVlRGF0ZTogRGF0ZTtcbiAgcHJpb3JpdHk6IFByaW9yaXR5O1xuICBpc0NvbXBsZXRlOiBib29sZWFuO1xufVxuXG5leHBvcnQgdHlwZSBJU2F2YWJsZVRvZG9JdGVtID0gSVRvZG9JdGVtICYgSVNhdmFibGU8VG9kb0l0ZW1Qcm9wcz47XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVUb2RvSXRlbSA9IChmdW5jdGlvbiAoKSB7XG4gIGxldCBpdGVtSWRDb3VudGVyID0gMDtcblxuICBmdW5jdGlvbiBjcmVhdGVUb2RvSXRlbShwcm9wczogVG9kb0l0ZW1Qcm9wcyk6IElTYXZhYmxlVG9kb0l0ZW0ge1xuICAgIC8vIG90aGVyIG1ldGhvZHMgY2FuIGJlIGRlZmluZWQgaW4gdGhlIGNsb3N1cmUgaGVyZVxuICAgIGZ1bmN0aW9uIHNlcmlhbGl6ZSgpIHtcbiAgICAgIHJldHVybiBwcm9wcztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgaXRlbUlkOiBpdGVtSWRDb3VudGVyKyssXG4gICAgICBpdGVtVGl0bGU6IHByb3BzLml0ZW1UaXRsZSxcbiAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgIGR1ZURhdGU6IHByb3BzLmR1ZURhdGUsXG4gICAgICBwcmlvcml0eTogcHJvcHMucHJpb3JpdHksXG4gICAgICBpc0NvbXBsZXRlOiBwcm9wcy5pc0NvbXBsZXRlLFxuXG4gICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVRvZG9JdGVtO1xufSkoKTtcbiIsImV4cG9ydCB7IG1haW5WaWV3LCBJTWFpblZpZXcgfSBmcm9tIFwiLi9tYWluVmlldy5qc1wiO1xuZXhwb3J0IHsgc2lkZWJhclZpZXcsIElTaWRlYmFyVmlldyB9IGZyb20gXCIuL3NpZGViYXJWaWV3LmpzXCI7XG4iLCJpbXBvcnQge1xuICBJUHJvamVjdCxcbiAgVG9kb0l0ZW1Qcm9wcyxcbiAgSVRvZG9JdGVtLFxuICBQcmlvcml0eSxcbn0gZnJvbSBcIi4uL21vZGVscy9pbmRleC5qc1wiO1xuaW1wb3J0IHtcbiAgX2NyZWF0ZUVsZW1lbnQsXG4gIF92ZXJpZnlOb3ROdWxsLFxuICBpZ25vcmVFbnRlckNhbGxiYWNrLFxufSBmcm9tIFwiLi91dGlscy5qc1wiO1xuXG5pbXBvcnQgVHJhc2hJbWFnZSBmcm9tIFwiLi9pbWFnZXMvdHJhc2gtY2FuLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgUGx1c0ltYWdlIGZyb20gXCIuL2ltYWdlcy9wbHVzLnN2Z1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNYWluVmlldyB7XG4gIGRpc3BsYXlUb2RvSXRlbXMocHJvamVjdDogSVByb2plY3QgfCBudWxsKTogdm9pZDtcbiAgYmluZENyZWF0ZVRvZG8oY2I6ICh0b2RvUHJvcHM6IFRvZG9JdGVtUHJvcHMpID0+IHZvaWQpOiB2b2lkO1xuICBiaW5kUmVhZFRvZG8oXG4gICAgcmVhZENiOiBJUHJvamVjdFtcInJlYWRUb2RvSXRlbVwiXSxcbiAgICB1cGRhdGVDYjogSVByb2plY3RbXCJ1cGRhdGVUb2RvSXRlbVwiXSxcbiAgICBkZWxldGVDYjogSVByb2plY3RbXCJkZWxldGVUb2RvSXRlbVwiXVxuICApOiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3QgbWFpblZpZXcgPSAoZnVuY3Rpb24gKCkge1xuICBjb25zdCByZXVzZWRDbGFzc05hbWVzID0ge1xuICAgIHRvZG9TbWFsbENsYXNzOiBcInRvZG8tc21hbGxcIixcbiAgICBhZGRUb2RvQnV0dG9uQ2xhc3M6IFwiYWRkLXRvZG8tYnV0dG9uXCIsXG4gICAgYWRkVG9kb0Zvcm1DbGFzczogXCJhZGQtdG9kby1mb3JtXCIsXG4gICAgZm9ybUVsZW1lbnRXcmFwcGVyQ2xhc3M6IFwiZm9ybS1lbGVtZW50LXdyYXBwZXJcIixcbiAgICBmb3JtQmFja2dyb3VuZENsYXNzOiBcImZvcm0tYmFja2dyb3VuZFwiLFxuICAgIHRvZG9JdGVtQ2xhc3M6IFwidG9kby1pdGVtXCIsXG4gIH07XG4gIGNvbnN0IG1haW5FbGVtZW50ID0gX3ZlcmlmeU5vdE51bGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIm1haW5cIikpO1xuICAvLyBjb25zdCB0b2RvU21hbGxDbGFzcyA9IFwidG9kby1zbWFsbFwiO1xuICAvLyBjb25zdCBhZGRUb2RvQnV0dG9uQ2xhc3MgPSBcImFkZC10b2RvLWJ1dHRvblwiO1xuICAvLyBjb25zdCBhZGRUb2RvRm9ybUNsYXNzID0gXCJhZGQtdG9kby1mb3JtXCI7XG4gIC8vIGNvbnN0IGZvcm1FbGVtZW50V3JhcHBlckNsYXNzID0gXCJmb3JtLWVsZW1lbnQtd3JhcHBlclwiO1xuICAvLyBjb25zdCBmb3JtQmFja2dyb3VuZENsYXNzID0gXCJmb3JtLWJhY2tncm91bmRcIjtcbiAgLy8gY29uc3QgdG9kb0l0ZW1DbGFzcyA9IFwidG9kby1pdGVtXCI7XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZVRvZG9Db2x1bW5FbGVtZW50KFxuICAgIGRhdGVTdHJpbmc6IHN0cmluZyxcbiAgICB0b2RvSXRlbXM6IElUb2RvSXRlbVtdXG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0b2RvQ29sdW1uID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widG9kby1jb2x1bW5cIl0pO1xuICAgIGNvbnN0IGRhdGVIMyA9IF9jcmVhdGVFbGVtZW50KFwiaDNcIiwgW1widG9kby1kYXRlXCJdKTtcbiAgICBkYXRlSDMuaW5uZXJUZXh0ID0gZGF0ZVN0cmluZztcblxuICAgIGNvbnN0IHRvZG9FbGVtZW50cyA9IHRvZG9JdGVtcy5tYXAoKHRvZG9JdGVtKSA9PiB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudCA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgICAgcmV1c2VkQ2xhc3NOYW1lcy50b2RvU21hbGxDbGFzcyxcbiAgICAgIF0pO1xuICAgICAgdG9kb0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCB0b2RvSXRlbS5pdGVtSWQudG9TdHJpbmcoKSk7XG4gICAgICB0b2RvRWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwiZGF0YS1kb25lXCIsXG4gICAgICAgIHRvZG9JdGVtLmlzQ29tcGxldGUgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgKTtcbiAgICAgIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJkYXRhLXByaW9yaXR5XCIsXG4gICAgICAgIHRvZG9JdGVtLnByaW9yaXR5LnZhbHVlT2YoKS50b1N0cmluZygpXG4gICAgICApO1xuXG4gICAgICBjb25zdCB0b2RvVGl0bGUgPSBfY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1widG9kby10aXRsZVwiXSk7XG4gICAgICB0b2RvVGl0bGUuaW5uZXJUZXh0ID0gdG9kb0l0ZW0uaXRlbVRpdGxlO1xuXG4gICAgICB0b2RvRWxlbWVudC5hcHBlbmQodG9kb1RpdGxlKTtcbiAgICAgIHJldHVybiB0b2RvRWxlbWVudDtcbiAgICB9KTtcbiAgICBjb25zdCB0b2RvSXRlbXNFbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widG9kby1pdGVtcy1zbWFsbFwiXSk7XG4gICAgdG9kb0l0ZW1zRWxlbWVudC5hcHBlbmQoLi4udG9kb0VsZW1lbnRzKTtcblxuICAgIHRvZG9Db2x1bW4uYXBwZW5kKGRhdGVIMywgdG9kb0l0ZW1zRWxlbWVudCk7XG4gICAgcmV0dXJuIHRvZG9Db2x1bW47XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5VG9kb0l0ZW1zKHByb2plY3Q6IElQcm9qZWN0IHwgbnVsbCkge1xuICAgIG1haW5FbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgaWYgKHByb2plY3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGVhZGluZyA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInByb2plY3QtaGVhZGluZ1wiXSk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGVFbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQoXCJoMlwiLCBbXCJwcm9qZWN0LXRpdGxlXCJdKTtcbiAgICBwcm9qZWN0VGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IHByb2plY3QucHJvamVjdFRpdGxlO1xuXG4gICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IF9jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcbiAgICAgIHJldXNlZENsYXNzTmFtZXMuYWRkVG9kb0J1dHRvbkNsYXNzLFxuICAgIF0pO1xuICAgIGFkZFRvZG9CdXR0b24uaW5uZXJIVE1MID0gUGx1c0ltYWdlO1xuICAgIGNvbnN0IGFkZFRvZG9UZXh0ID0gX2NyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGFkZFRvZG9UZXh0LmlubmVyVGV4dCA9IFwiTmV3IHRpY2tldFwiO1xuICAgIGFkZFRvZG9CdXR0b24uYXBwZW5kQ2hpbGQoYWRkVG9kb1RleHQpO1xuXG4gICAgbWFpbkhlYWRpbmcuYXBwZW5kKHByb2plY3RUaXRsZUVsZW1lbnQsIGFkZFRvZG9CdXR0b24pO1xuXG4gICAgY29uc3QgVG9kb0NvbGxlY3Rpb25FbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widG9kby1jb2xsZWN0aW9uXCJdKTtcblxuICAgIC8vIHNvcnQgdG9kbyBpdGVtcyBpbiBwcm9qZWN0IGJ5IGRhdGUsIGFzY2VuZGluZy4gVGhpcyBlbnN1cmVzIG1hcCBpbnNlcnRpb24gb3JkZXIgaXMgYXNjZW5kaW5nIGJ5IGRhdGUuXG4gICAgY29uc3Qgc29ydGVkVG9kb0l0ZW1zID0gWy4uLnByb2plY3QudG9kb0l0ZW1zXS5zb3J0KFxuICAgICAgKGEsIGIpID0+IGEuZHVlRGF0ZS52YWx1ZU9mKCkgLSBiLmR1ZURhdGUudmFsdWVPZigpXG4gICAgKTtcblxuICAgIC8vIG1ha2UgYSAnY29sdW1uJyBwZXIgZGF5IHdpdGggdG9kbyBpdGVtc1xuICAgIGNvbnN0IGRheU1hcDogTWFwPHN0cmluZywgSVRvZG9JdGVtW10+ID0gbmV3IE1hcCgpO1xuICAgIGZvciAoY29uc3QgdG9kb0l0ZW0gb2Ygc29ydGVkVG9kb0l0ZW1zKSB7XG4gICAgICBpZiAoIWRheU1hcC5nZXQodG9kb0l0ZW0uZHVlRGF0ZS50b0RhdGVTdHJpbmcoKSkpIHtcbiAgICAgICAgZGF5TWFwLnNldCh0b2RvSXRlbS5kdWVEYXRlLnRvRGF0ZVN0cmluZygpLCBbXSk7XG4gICAgICB9XG4gICAgICBkYXlNYXAuZ2V0KHRvZG9JdGVtLmR1ZURhdGUudG9EYXRlU3RyaW5nKCkpPy5wdXNoKHRvZG9JdGVtKTtcbiAgICB9XG5cbiAgICBjb25zdCB0b2RvQ29sdW1uRWxlbWVudHM6IEhUTUxFbGVtZW50W10gPSBbXTtcbiAgICBmb3IgKGNvbnN0IFtkYXRlU3RyaW5nLCB0b2RvSXRlbXNdIG9mIGRheU1hcCkge1xuICAgICAgY29uc3QgcHJpb3JpdHlTb3J0ZWRJdGVtcyA9IHRvZG9JdGVtc1xuICAgICAgICAuc29ydCgoYSwgYikgPT4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHkpXG4gICAgICAgIC5yZXZlcnNlKCk7XG4gICAgICB0b2RvQ29sdW1uRWxlbWVudHMucHVzaChcbiAgICAgICAgX2NyZWF0ZVRvZG9Db2x1bW5FbGVtZW50KGRhdGVTdHJpbmcsIHByaW9yaXR5U29ydGVkSXRlbXMpXG4gICAgICApO1xuICAgIH1cblxuICAgIFRvZG9Db2xsZWN0aW9uRWxlbWVudC5hcHBlbmQoLi4udG9kb0NvbHVtbkVsZW1lbnRzKTtcblxuICAgIG1haW5FbGVtZW50LmFwcGVuZChtYWluSGVhZGluZywgVG9kb0NvbGxlY3Rpb25FbGVtZW50KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVBZGRUb2RvRm9ybShcbiAgICBjYjogKHRvZG9Qcm9wczogVG9kb0l0ZW1Qcm9wcykgPT4gdm9pZFxuICApOiBIVE1MRm9ybUVsZW1lbnQge1xuICAgIGNvbnN0IGZvcm0gPSBfY3JlYXRlRWxlbWVudChcImZvcm1cIiwgW3JldXNlZENsYXNzTmFtZXMuYWRkVG9kb0Zvcm1DbGFzc10pO1xuXG4gICAgY29uc3QgZm9ybUNlbnRlciA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImZvcm0tYm9keVwiXSk7XG5cbiAgICBjb25zdCB0aXRsZUZvcm1FbGVtZW50V3JhcHBlciA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgIHJldXNlZENsYXNzTmFtZXMuZm9ybUVsZW1lbnRXcmFwcGVyQ2xhc3MsXG4gICAgXSk7XG5cbiAgICBjb25zdCB0aXRsZUxhYmVsID0gX2NyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9IFwiVGl0bGU6XCI7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvX3RpdGxlXCIpO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gX2NyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvX3RpdGxlXCIpO1xuICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuXG4gICAgdGl0bGVGb3JtRWxlbWVudFdyYXBwZXIuYXBwZW5kKHRpdGxlTGFiZWwsIHRvZG9UaXRsZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkZvcm1FbGVtZW50V3JhcHBlciA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgIHJldXNlZENsYXNzTmFtZXMuZm9ybUVsZW1lbnRXcmFwcGVyQ2xhc3MsXG4gICAgXSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gX2NyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLmlubmVyVGV4dCA9IFwiRGVzY3JpcHRpb246XCI7XG4gICAgZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvX2Rlc2NyaXB0aW9uXCIpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IF9jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9fZGVzY3JpcHRpb25cIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNVwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImRlc2NyaXB0aW9uXCIpO1xuXG4gICAgZGVzY3JpcHRpb25Gb3JtRWxlbWVudFdyYXBwZXIuYXBwZW5kKGRlc2NyaXB0aW9uTGFiZWwsIGRlc2NyaXB0aW9uSW5wdXQpO1xuXG4gICAgY29uc3QgZHVlRGF0ZUZvcm1FbGVtZW50V3JhcHBlciA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgIHJldXNlZENsYXNzTmFtZXMuZm9ybUVsZW1lbnRXcmFwcGVyQ2xhc3MsXG4gICAgXSk7XG5cbiAgICBjb25zdCBkdWVEYXRlTGFiZWwgPSBfY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGR1ZURhdGVMYWJlbC5pbm5lclRleHQgPSBcIkR1ZSBhdDpcIjtcbiAgICBkdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidG9kb19kdWVfZGF0ZVwiKTtcblxuICAgIGNvbnN0IGR1ZURhdGVJbnB1dCA9IF9jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9fZHVlX2RhdGVcIik7XG4gICAgZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInJlcXVpcmVkXCIsIFwiXCIpO1xuICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlX2RhdGVcIik7XG5cbiAgICBkdWVEYXRlRm9ybUVsZW1lbnRXcmFwcGVyLmFwcGVuZChkdWVEYXRlTGFiZWwsIGR1ZURhdGVJbnB1dCk7XG5cbiAgICBjb25zdCBwcmlvcml0eUZvcm1FbGVtZW50V3JhcHBlciA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgIHJldXNlZENsYXNzTmFtZXMuZm9ybUVsZW1lbnRXcmFwcGVyQ2xhc3MsXG4gICAgXSk7XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gX2NyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6XCI7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvX3ByaW9yaXR5XCIpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IF9jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvX3ByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG5cbiAgICBjb25zdCBsb3dQcmlvcml0eU9wdGlvbiA9IF9jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGxvd1ByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTG93XCIpO1xuICAgIGxvd1ByaW9yaXR5T3B0aW9uLmlubmVyVGV4dCA9IFwiTG93XCI7XG5cbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eU9wdGlvbiA9IF9jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG1lZGl1bVByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTWVkaXVtXCIpO1xuICAgIG1lZGl1bVByaW9yaXR5T3B0aW9uLmlubmVyVGV4dCA9IFwiTWVkaXVtXCI7XG5cbiAgICBjb25zdCBoaWdoUHJpb3JpdHlPcHRpb24gPSBfY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBoaWdoUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJIaWdoXCIpO1xuICAgIGhpZ2hQcmlvcml0eU9wdGlvbi5pbm5lclRleHQgPSBcIkhpZ2hcIjtcblxuICAgIGNvbnN0IGNyaXRpY2FsUHJpb3JpdHlPcHRpb24gPSBfY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBjcml0aWNhbFByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQ3JpdGljYWxcIik7XG4gICAgY3JpdGljYWxQcmlvcml0eU9wdGlvbi5pbm5lclRleHQgPSBcIkNyaXRpY2FsXCI7XG5cbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZChcbiAgICAgIGxvd1ByaW9yaXR5T3B0aW9uLFxuICAgICAgbWVkaXVtUHJpb3JpdHlPcHRpb24sXG4gICAgICBoaWdoUHJpb3JpdHlPcHRpb24sXG4gICAgICBjcml0aWNhbFByaW9yaXR5T3B0aW9uXG4gICAgKTtcblxuICAgIHByaW9yaXR5Rm9ybUVsZW1lbnRXcmFwcGVyLmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eUlucHV0KTtcblxuICAgIGNvbnN0IGlzQ29tcGxldGVGb3JtRWxlbWVudFdyYXBwZXIgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICByZXVzZWRDbGFzc05hbWVzLmZvcm1FbGVtZW50V3JhcHBlckNsYXNzLFxuICAgIF0pO1xuXG4gICAgY29uc3QgaXNDb21wbGV0ZUxhYmVsID0gX2NyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBpc0NvbXBsZXRlTGFiZWwuaW5uZXJUZXh0ID0gXCJEb25lP1wiO1xuICAgIGlzQ29tcGxldGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvX2lzX2NvbXBsZXRlXCIpO1xuXG4gICAgY29uc3QgaXNDb21wbGV0ZUlucHV0ID0gX2NyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICBpc0NvbXBsZXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGlzQ29tcGxldGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG9faXNfY29tcGxldGVcIik7XG4gICAgaXNDb21wbGV0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJpc19jb21wbGV0ZVwiKTtcblxuICAgIGlzQ29tcGxldGVGb3JtRWxlbWVudFdyYXBwZXIuYXBwZW5kKGlzQ29tcGxldGVMYWJlbCwgaXNDb21wbGV0ZUlucHV0KTtcblxuICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IF9jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcImFkZC10b2RvLXN1Ym1pdC1idXR0b25cIl0pO1xuICAgIHN1Ym1pdEJ1dHRvbi5pbm5lclRleHQgPSBcIkFkZFwiO1xuXG4gICAgZm9ybUNlbnRlci5hcHBlbmQoXG4gICAgICB0aXRsZUZvcm1FbGVtZW50V3JhcHBlcixcbiAgICAgIGRlc2NyaXB0aW9uRm9ybUVsZW1lbnRXcmFwcGVyLFxuICAgICAgZHVlRGF0ZUZvcm1FbGVtZW50V3JhcHBlcixcbiAgICAgIHByaW9yaXR5Rm9ybUVsZW1lbnRXcmFwcGVyLFxuICAgICAgaXNDb21wbGV0ZUZvcm1FbGVtZW50V3JhcHBlcixcbiAgICAgIHN1Ym1pdEJ1dHRvblxuICAgICk7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGZvcm1DZW50ZXIpO1xuXG4gICAgZm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGUudGFyZ2V0IGFzIEhUTUxGb3JtRWxlbWVudCk7XG5cbiAgICAgIGNvbnN0IFtpdGVtVGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgaXNDb21wbGV0ZV0gPSBbXG4gICAgICAgIGZvcm1EYXRhLmdldChcInRpdGxlXCIpIGFzIHN0cmluZyxcbiAgICAgICAgZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nLFxuICAgICAgICBuZXcgRGF0ZShmb3JtRGF0YS5nZXQoXCJkdWVfZGF0ZVwiKSBhcyBzdHJpbmcpLFxuICAgICAgICBQcmlvcml0eVtcbiAgICAgICAgICBmb3JtRGF0YS5nZXQoXCJwcmlvcml0eVwiKSBhcyBcIkxvd1wiIHwgXCJNZWRpdW1cIiB8IFwiSGlnaFwiIHwgXCJDcml0aWNhbFwiXG4gICAgICAgIF0sXG4gICAgICAgIChmb3JtRGF0YS5nZXQoXCJpc19jb21wbGV0ZVwiKSBhcyBzdHJpbmcpID09PSBcIm9uXCIsXG4gICAgICBdO1xuXG4gICAgICBjYih7IGl0ZW1UaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlIH0pO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIGZvcm07XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kQ3JlYXRlVG9kbyhjYjogKHRvZG9Qcm9wczogVG9kb0l0ZW1Qcm9wcykgPT4gdm9pZCk6IHZvaWQge1xuICAgIG1haW5FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoY2xpY2tFdmVudCkgPT4ge1xuICAgICAgY29uc3QgY2xpY2tUYXJnZXQgPSBjbGlja0V2ZW50LnRhcmdldDtcbiAgICAgIGlmIChcbiAgICAgICAgY2xpY2tUYXJnZXQgJiZcbiAgICAgICAgY2xpY2tUYXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50ICYmXG4gICAgICAgIGNsaWNrVGFyZ2V0LmNsb3Nlc3QoYC4ke3JldXNlZENsYXNzTmFtZXMuYWRkVG9kb0J1dHRvbkNsYXNzfWApXG4gICAgICApIHtcbiAgICAgICAgLy8gbWFrZSBmb3JtLCBhZGQgZXZlbnQgbGlzdGVuZXIgb24gc3VibWl0IG9mIHRoYXQgdG8gaW52b2tlIG1vZGVsJ3MgY3JlYXRlVG9kbyB1c2luZyBzdWJtaXR0ZWQgZm9ybSBpbmZvcm1hdGlvblxuICAgICAgICBjb25zdCBmb3JtID0gX2NyZWF0ZUFkZFRvZG9Gb3JtKGNiKTtcbiAgICAgICAgY29uc3QgZm9ybVdyYXBwZXIgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgcmV1c2VkQ2xhc3NOYW1lcy5mb3JtQmFja2dyb3VuZENsYXNzLFxuICAgICAgICBdKTtcbiAgICAgICAgZm9ybVdyYXBwZXIuYXBwZW5kKGZvcm0pO1xuXG4gICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoKSA9PiB7XG4gICAgICAgICAgZm9ybVdyYXBwZXIucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIGRlZmluZSBzZXBhcmF0ZWx5IHNvIEkgY2FuIGNhbGwgaXQgcmVjdXJzaXZlbHkuIGZ1bmN0aW9uIGV4cHJlc3Npb24gaW5zdGVhZCBvZiBkZWNsYXJhdGlvblxuICAgICAgICAvLyBmb3IgZXNsaW50IHJlYXNvbnNcbiAgICAgICAgY29uc3QgY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gKGNsaWNrRXZlbnQ6IE1vdXNlRXZlbnQpIHtcbiAgICAgICAgICBjb25zdCBjbGlja1RhcmdldCA9IGNsaWNrRXZlbnQudGFyZ2V0O1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGNsaWNrVGFyZ2V0ICYmXG4gICAgICAgICAgICBjbGlja1RhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiZcbiAgICAgICAgICAgICFjbGlja1RhcmdldC5jbG9zZXN0KGAuJHtyZXVzZWRDbGFzc05hbWVzLmFkZFRvZG9Gb3JtQ2xhc3N9YClcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGZvcm1XcmFwcGVyLnJlbW92ZSgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIHNldFRpbWVvdXQgc28gdGhhdCB0aGUgZmlyc3QgY2xpY2sgKG9uIHRoZSBhZGQgVG9kbyBidXR0b24pIGRvZXNuJ3QgcnVuIHRoZSBoYW5kbGVyXG4gICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KSxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG5cbiAgICAgICAgbWFpbkVsZW1lbnQuYXBwZW5kKGZvcm1XcmFwcGVyKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jcmVhdGVSZWFkVG9kb1ZpZXcoXG4gICAgdG9kb0l0ZW06IElUb2RvSXRlbSxcbiAgICBkZWxldGVDYjogSVByb2plY3RbXCJkZWxldGVUb2RvSXRlbVwiXVxuICApOiB7XG4gICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XG4gICAgZ2V0RGF0YTogKCkgPT4gVG9kb0l0ZW1Qcm9wcztcbiAgfSB7XG4gICAgLy8gcHJlc2VudHMgZGF0YSBmcm9tIHRvZG9JdGVtLiBlYWNoIGZpZWxkIGhhcyBhIGNsaWNraGFuZGxlciB0byBlZGl0IHRoZSB2YWx1ZSAoZm9yIHRleHQgZmllbGRzIGp1c3QgbWFrZSBjb250ZW50ZWRpdGFibGUsXG4gICAgLy8gZm9yIGR1ZURhdGUgaGF2ZSB0byBzd2FwIGl0IG91dCBmb3IgdGhlIGZvcm0gZWxlbWVudCBkYXRlcGlja2VyKVxuICAgIGNvbnN0IHRvZG9JdGVtRWxlbWVudCA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgIHJldXNlZENsYXNzTmFtZXMudG9kb0l0ZW1DbGFzcyxcbiAgICBdKTtcblxuICAgIGNvbnN0IHRvZG9UaXRsZSA9IF9jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXCJ0b2RvLXJlYWQtdGl0bGVcIl0pO1xuICAgIHRvZG9UaXRsZS5hZGRFdmVudExpc3RlbmVyKFwia2V5cHJlc3NcIiwgaWdub3JlRW50ZXJDYWxsYmFjayk7XG5cbiAgICB0b2RvVGl0bGUuaW5uZXJUZXh0ID0gdG9kb0l0ZW0uaXRlbVRpdGxlO1xuXG4gICAgY29uc3QgdG9kb0RlbGV0ZSA9IF9jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcInRvZG8tZGVsZXRlXCJdKTtcbiAgICB0b2RvRGVsZXRlLmlubmVySFRNTCA9IFRyYXNoSW1hZ2U7XG4gICAgdG9kb0RlbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgZGVsZXRlQ2IodG9kb0l0ZW0uaXRlbUlkKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRvZG9EZXNjcmlwdGlvbiA9IF9jcmVhdGVFbGVtZW50KFwicFwiLCBbXCJ0b2RvLWRlc2NyaXB0aW9uXCJdKTtcbiAgICB0b2RvRGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gdG9kb0l0ZW0uZGVzY3JpcHRpb247XG5cbiAgICBbdG9kb1RpdGxlLCB0b2RvRGVzY3JpcHRpb25dLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwiXCIpO1xuICAgICAgICBlbGVtZW50LmZvY3VzKCk7XG5cbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiZm9jdXNvdXRcIixcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eVdyYXBwZXIgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ0b2RvLXByaW9yaXR5XCJdKTtcbiAgICBjb25zdCBsZWZ0Q2hldnJvbiA9IF9jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBsZWZ0Q2hldnJvbi5pbm5lclRleHQgPSBcIjxcIjtcblxuICAgIGNvbnN0IHRvZG9Qcmlvcml0eSA9IF9jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgICBsZXQgY3VycmVudFByaW9yaXR5ID0gdG9kb0l0ZW0ucHJpb3JpdHkudmFsdWVPZigpO1xuICAgIHRvZG9Qcmlvcml0eS5pbm5lclRleHQgPSBQcmlvcml0eVtjdXJyZW50UHJpb3JpdHldO1xuXG4gICAgY29uc3QgcmlnaHRDaGV2cm9uID0gX2NyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHJpZ2h0Q2hldnJvbi5pbm5lclRleHQgPSBcIj5cIjtcblxuICAgIFtbbGVmdENoZXZyb24sIC0xXSBhcyBjb25zdCwgW3JpZ2h0Q2hldnJvbiwgMV0gYXMgY29uc3RdLmZvckVhY2goKGUpID0+IHtcbiAgICAgIGNvbnN0IFtlbGVtZW50LCB0cmFuc2Zvcm1hdGlvbl0gPSBlO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBjdXJyZW50UHJpb3JpdHkgPSBNYXRoLm1heChcbiAgICAgICAgICBNYXRoLm1pbihjdXJyZW50UHJpb3JpdHkgKyB0cmFuc2Zvcm1hdGlvbiwgMyksXG4gICAgICAgICAgMFxuICAgICAgICApO1xuICAgICAgICB0b2RvUHJpb3JpdHkuaW5uZXJUZXh0ID0gUHJpb3JpdHlbY3VycmVudFByaW9yaXR5XTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHRvZG9Qcmlvcml0eVdyYXBwZXIuYXBwZW5kKGxlZnRDaGV2cm9uLCB0b2RvUHJpb3JpdHksIHJpZ2h0Q2hldnJvbik7XG5cbiAgICBjb25zdCB0b2RvRHVlRGF0ZSA9IF9jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgW1widG9kby1kdWUtZGF0ZVwiXSk7XG4gICAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG4gICAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKFxuICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgdG9kb0l0ZW0uZHVlRGF0ZS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxuICAgICk7XG5cbiAgICBjb25zdCB0b2RvSXNDb21wbGV0ZSA9IF9jcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgW1widG9kby1pcy1jb21wbGV0ZVwiXSk7XG4gICAgdG9kb0lzQ29tcGxldGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuICAgIGlmICh0b2RvSXRlbS5pc0NvbXBsZXRlKSB7XG4gICAgICB0b2RvSXNDb21wbGV0ZS5zZXRBdHRyaWJ1dGUoXCJjaGVja2VkXCIsIFwidHJ1ZVwiKTtcbiAgICB9XG5cbiAgICB0b2RvSXRlbUVsZW1lbnQuYXBwZW5kKFxuICAgICAgdG9kb1RpdGxlLFxuICAgICAgdG9kb0RlbGV0ZSxcbiAgICAgIHRvZG9EZXNjcmlwdGlvbixcbiAgICAgIHRvZG9Qcmlvcml0eVdyYXBwZXIsXG4gICAgICB0b2RvRHVlRGF0ZSxcbiAgICAgIHRvZG9Jc0NvbXBsZXRlXG4gICAgKTtcblxuICAgIGZ1bmN0aW9uIGdldFByb3BzKCk6IFRvZG9JdGVtUHJvcHMge1xuICAgICAgY29uc29sZS5sb2codG9kb0R1ZURhdGUpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaXRlbVRpdGxlOiB0b2RvVGl0bGUuaW5uZXJUZXh0LFxuICAgICAgICBkZXNjcmlwdGlvbjogdG9kb0Rlc2NyaXB0aW9uLmlubmVyVGV4dCxcbiAgICAgICAgZHVlRGF0ZTogbmV3IERhdGUodG9kb0R1ZURhdGUudmFsdWUpLFxuICAgICAgICBwcmlvcml0eTogY3VycmVudFByaW9yaXR5LFxuICAgICAgICBpc0NvbXBsZXRlOiB0b2RvSXNDb21wbGV0ZS5jaGVja2VkLFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgZWxlbWVudDogdG9kb0l0ZW1FbGVtZW50LFxuICAgICAgZ2V0RGF0YTogZ2V0UHJvcHMsXG4gICAgfTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmRSZWFkVG9kbyhcbiAgICByZWFkQ2I6IElQcm9qZWN0W1wicmVhZFRvZG9JdGVtXCJdLFxuICAgIHVwZGF0ZUNiOiBJUHJvamVjdFtcInVwZGF0ZVRvZG9JdGVtXCJdLFxuICAgIGRlbGV0ZUNiOiBJUHJvamVjdFtcImRlbGV0ZVRvZG9JdGVtXCJdXG4gICk6IHZvaWQge1xuICAgIG1haW5FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoY2xpY2tFdmVudCkgPT4ge1xuICAgICAgY29uc3QgY2xpY2tUYXJnZXQgPSBjbGlja0V2ZW50LnRhcmdldDtcbiAgICAgIGlmIChcbiAgICAgICAgY2xpY2tUYXJnZXQgJiZcbiAgICAgICAgY2xpY2tUYXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50ICYmXG4gICAgICAgIGNsaWNrVGFyZ2V0LmNsb3Nlc3QoYC4ke3JldXNlZENsYXNzTmFtZXMudG9kb1NtYWxsQ2xhc3N9YCkgJiZcbiAgICAgICAgIWNsaWNrVGFyZ2V0LmNsb3Nlc3QoXCIudG9kby1kb25lXCIpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgdG9kb0l0ZW1FbGVtZW50ID0gY2xpY2tUYXJnZXQuY2xvc2VzdChcbiAgICAgICAgICBgLiR7cmV1c2VkQ2xhc3NOYW1lcy50b2RvU21hbGxDbGFzc31gXG4gICAgICAgICkgYXMgRWxlbWVudDtcbiAgICAgICAgY29uc3QgdG9kb0luZGV4ID0gcGFyc2VJbnQoXG4gICAgICAgICAgX3ZlcmlmeU5vdE51bGwodG9kb0l0ZW1FbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IHRvZG9JdGVtID0gcmVhZENiKHRvZG9JbmRleCkgYXMgSVRvZG9JdGVtO1xuXG4gICAgICAgIGNvbnN0IHsgZWxlbWVudCwgZ2V0RGF0YSB9ID0gX2NyZWF0ZVJlYWRUb2RvVmlldyh0b2RvSXRlbSwgZGVsZXRlQ2IpO1xuXG4gICAgICAgIGNvbnN0IHdyYXBwZXIgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICAgICAgcmV1c2VkQ2xhc3NOYW1lcy5mb3JtQmFja2dyb3VuZENsYXNzLFxuICAgICAgICBdKTtcbiAgICAgICAgd3JhcHBlci5hcHBlbmQoZWxlbWVudCk7XG5cbiAgICAgICAgbWFpbkVsZW1lbnQuYXBwZW5kKHdyYXBwZXIpO1xuXG4gICAgICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChjbGlja0V2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgY29uc3QgY2xpY2tUYXJnZXQgPSBjbGlja0V2ZW50LnRhcmdldDtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjbGlja1RhcmdldCAmJlxuICAgICAgICAgICAgY2xpY2tUYXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50ICYmXG4gICAgICAgICAgICAhY2xpY2tUYXJnZXQuY2xvc2VzdChgLiR7cmV1c2VkQ2xhc3NOYW1lcy50b2RvSXRlbUNsYXNzfWApXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGdldERhdGEoKTtcbiAgICAgICAgICAgIHVwZGF0ZUNiKHRvZG9JbmRleCwgcHJvcHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KSxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlUb2RvSXRlbXM6IGRpc3BsYXlUb2RvSXRlbXMsXG4gICAgYmluZENyZWF0ZVRvZG86IGJpbmRDcmVhdGVUb2RvLFxuICAgIGJpbmRSZWFkVG9kbzogYmluZFJlYWRUb2RvLFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IElNb2RlbCwgSVByb2plY3QsIFByb2plY3RQcm9wcyB9IGZyb20gXCIuLi9tb2RlbHMvaW5kZXguanNcIjtcbmltcG9ydCB7XG4gIF9jcmVhdGVFbGVtZW50LFxuICBfdmVyaWZ5Tm90TnVsbCxcbiAgaWdub3JlRW50ZXJDYWxsYmFjayxcbn0gZnJvbSBcIi4vdXRpbHMuanNcIjtcblxuaW1wb3J0IEVkaXRJbWFnZSBmcm9tIFwiLi9pbWFnZXMvcGVuY2lsLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgUmVtb3ZlSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2Nsb3NlLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgTm90ZUltYWdlIGZyb20gXCIuL2ltYWdlcy9ub3RlLW91dGxpbmUuc3ZnXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNpZGViYXJWaWV3IHtcbiAgYmluZENyZWF0ZVByb2plY3QoY2I6IElNb2RlbFtcImNyZWF0ZVByb2plY3RcIl0pOiB2b2lkO1xuICBiaW5kUmVhZFByb2plY3QoY2I6IElNb2RlbFtcInJlYWRQcm9qZWN0XCJdKTogdm9pZDtcbiAgYmluZFVwZGF0ZVByb2plY3QoY2I6IElNb2RlbFtcInVwZGF0ZVByb2plY3RUaXRsZVwiXSk6IHZvaWQ7XG4gIGJpbmREZWxldGVQcm9qZWN0KGNiOiBJTW9kZWxbXCJkZWxldGVQcm9qZWN0XCJdKTogdm9pZDtcblxuICBkaXNwbGF5UHJvamVjdHMocHJvamVjdHM6IElQcm9qZWN0W10pOiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3Qgc2lkZWJhclZpZXcgPSAoZnVuY3Rpb24gKCk6IElTaWRlYmFyVmlldyB7XG4gIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IF92ZXJpZnlOb3ROdWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIikpO1xuICBjb25zdCByZXVzZWRDbGFzc05hbWVzID0ge1xuICAgIGFkZFByb2plY3RCdXR0b25DbGFzczogXCJhZGQtcHJvamVjdC1idXR0b25cIixcbiAgICBlZGl0QnV0dG9uQ2xhc3M6IFwiZWRpdC1wcm9qZWN0LWJ1dHRvblwiLFxuICAgIGRlbGV0ZUJ1dHRvbkNsYXNzOiBcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiLFxuICAgIHByb2plY3RTaWRlYmFyVGl0bGVDbGFzczogXCJwcm9qZWN0LXRpdGxlLXNpZGViYXJcIixcbiAgfTtcblxuICBmdW5jdGlvbiBfY3JlYXRlUHJvamVjdEVsZW1lbnQocHJvamVjdDogSVByb2plY3QpOiBIVE1MRWxlbWVudCB7XG4gICAgY29uc3QgcHJvamVjdENvbnRhaW5lciA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInByb2plY3RcIl0pO1xuICAgIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBwcm9qZWN0LnByb2plY3RJZC50b1N0cmluZygpKTtcblxuICAgIGNvbnN0IGVkaXRCdXR0b24gPSBfY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXG4gICAgICByZXVzZWRDbGFzc05hbWVzLmVkaXRCdXR0b25DbGFzcyxcbiAgICBdKTtcbiAgICBlZGl0QnV0dG9uLmlubmVySFRNTCA9IEVkaXRJbWFnZTtcblxuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IF9jcmVhdGVFbGVtZW50KFwic3BhblwiLCBbXG4gICAgICBcImZsZXgtZ3Jvd1wiLFxuICAgICAgcmV1c2VkQ2xhc3NOYW1lcy5wcm9qZWN0U2lkZWJhclRpdGxlQ2xhc3MsXG4gICAgXSk7XG4gICAgcHJvamVjdFRpdGxlLmlubmVyVGV4dCA9IHByb2plY3QucHJvamVjdFRpdGxlO1xuXG4gICAgY29uc3QgcHJvamVjdFRvZG9Db3VudCA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInByb2plY3QtdG9kby1jb3VudFwiXSk7XG5cbiAgICBjb25zdCBwcm9qZWN0TnIgPSBfY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcHJvamVjdE5yLmlubmVyVGV4dCA9IHByb2plY3QudG9kb0l0ZW1zLmxlbmd0aC50b1N0cmluZygpO1xuXG4gICAgY29uc3QgcHJvamVjdEltYWdlID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdEltYWdlLmlubmVySFRNTCA9IE5vdGVJbWFnZTtcblxuICAgIHByb2plY3RUb2RvQ291bnQuYXBwZW5kKHByb2plY3ROciwgcHJvamVjdEltYWdlKTtcblxuICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IF9jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcbiAgICAgIHJldXNlZENsYXNzTmFtZXMuZGVsZXRlQnV0dG9uQ2xhc3MsXG4gICAgXSk7XG4gICAgZGVsZXRlQnV0dG9uLmlubmVySFRNTCA9IFJlbW92ZUltYWdlO1xuXG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmQoXG4gICAgICBlZGl0QnV0dG9uLFxuICAgICAgcHJvamVjdFRpdGxlLFxuICAgICAgcHJvamVjdFRvZG9Db3VudCxcbiAgICAgIGRlbGV0ZUJ1dHRvblxuICAgICk7XG4gICAgcmV0dXJuIHByb2plY3RDb250YWluZXI7XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlQWRkUHJvamVjdEVsZW1lbnQoKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IGFkZFByb2plY3RCdXR0b24gPSBfY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXG4gICAgICByZXVzZWRDbGFzc05hbWVzLmFkZFByb2plY3RCdXR0b25DbGFzcyxcbiAgICBdKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQWRkIHByb2plY3RcIjtcbiAgICByZXR1cm4gYWRkUHJvamVjdEJ1dHRvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0czogSVByb2plY3RbXSk6IHZvaWQge1xuICAgIHNpZGViYXJQcm9qZWN0cy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHNpZGViYXJQcm9qZWN0cy5hcHBlbmQoLi4ucHJvamVjdHMubWFwKF9jcmVhdGVQcm9qZWN0RWxlbWVudCkpO1xuICAgIHNpZGViYXJQcm9qZWN0cy5hcHBlbmRDaGlsZChfY3JlYXRlQWRkUHJvamVjdEVsZW1lbnQoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kQ3JlYXRlUHJvamVjdChjYjogKHByb2plY3RQcm9wczogUHJvamVjdFByb3BzKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgc2lkZWJhclByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoY2xpY2tFdmVudCkgPT4ge1xuICAgICAgY29uc3QgY2xpY2tUYXJnZXQgPSBjbGlja0V2ZW50LnRhcmdldDtcbiAgICAgIGlmIChcbiAgICAgICAgY2xpY2tUYXJnZXQgJiZcbiAgICAgICAgY2xpY2tUYXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50ICYmXG4gICAgICAgIGNsaWNrVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhyZXVzZWRDbGFzc05hbWVzLmFkZFByb2plY3RCdXR0b25DbGFzcylcbiAgICAgICkge1xuICAgICAgICBjYih7IHByb2plY3RUaXRsZTogXCJOZXcgcHJvamVjdFwiLCB0b2RvSXRlbXM6IFtdIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gYmluZFJlYWRQcm9qZWN0KGNiOiAocHJvamVjdEluZGV4OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBzaWRlYmFyUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChjbGlja0V2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjbGlja1RhcmdldCA9IGNsaWNrRXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKFxuICAgICAgICBjbGlja1RhcmdldCAmJlxuICAgICAgICBjbGlja1RhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiZcbiAgICAgICAgY2xpY2tUYXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFxuICAgICAgICAgIHJldXNlZENsYXNzTmFtZXMucHJvamVjdFNpZGViYXJUaXRsZUNsYXNzXG4gICAgICAgICkgJiZcbiAgICAgICAgIShcImNvbnRlbnRlZGl0YWJsZVwiIGluIGNsaWNrVGFyZ2V0LmF0dHJpYnV0ZXMpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gX3ZlcmlmeU5vdE51bGwoXG4gICAgICAgICAgX3ZlcmlmeU5vdE51bGwoY2xpY2tUYXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0XCIpKS5nZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcImRhdGEtaW5kZXhcIlxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgY2IocGFyc2VJbnQocHJvamVjdEluZGV4KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kVXBkYXRlUHJvamVjdChcbiAgICBjYjogKHByb2plY3RJbmRleDogbnVtYmVyLCBwcm9qZWN0VGl0bGU6IHN0cmluZykgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICBzaWRlYmFyUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChjbGlja0V2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjbGlja1RhcmdldCA9IGNsaWNrRXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKFxuICAgICAgICBjbGlja1RhcmdldCAmJlxuICAgICAgICBjbGlja1RhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiZcbiAgICAgICAgY2xpY2tUYXJnZXQuY2xvc2VzdChgLiR7cmV1c2VkQ2xhc3NOYW1lcy5lZGl0QnV0dG9uQ2xhc3N9YClcbiAgICAgICkge1xuICAgICAgICAvLyBtYWtlIHByb2plY3QgdGl0bGUgZmllbGQgZWRpdGFibGVcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IF92ZXJpZnlOb3ROdWxsKGNsaWNrVGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdFwiKSk7XG4gICAgICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IF92ZXJpZnlOb3ROdWxsKFxuICAgICAgICAgIHByb2plY3QucXVlcnlTZWxlY3RvcjxIVE1MRWxlbWVudD4oXG4gICAgICAgICAgICBgLiR7cmV1c2VkQ2xhc3NOYW1lcy5wcm9qZWN0U2lkZWJhclRpdGxlQ2xhc3N9YFxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gX3ZlcmlmeU5vdE51bGwocHJvamVjdC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIpKTtcblxuICAgICAgICBwcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIsIFwidHJ1ZVwiKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBpZ25vcmVFbnRlckNhbGxiYWNrKTtcbiAgICAgICAgcHJvamVjdFRpdGxlLmZvY3VzKCk7XG5cbiAgICAgICAgLy8gYWRkIG9uY2UtZmlyaW5nIGV2ZW50bGlzdGVuZXIgb24gZm9jdXNvdXQgYWZ0ZXIgZWRpdGluZyB0aGF0IGNhbGxzIHRoZSBjYlxuICAgICAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICBcImZvY3Vzb3V0XCIsXG4gICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgcHJvamVjdFRpdGxlLnJlbW92ZUF0dHJpYnV0ZShcImNvbnRlbnRlZGl0YWJsZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1RpdGxlID0gcHJvamVjdFRpdGxlLmlubmVyVGV4dDtcbiAgICAgICAgICAgIGNiKHBhcnNlSW50KHByb2plY3RJbmRleCksIG5ld1RpdGxlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgb25jZTogdHJ1ZSB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kRGVsZXRlUHJvamVjdChjYjogKHByb2plY3RJbmRleDogbnVtYmVyKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgc2lkZWJhclByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoY2xpY2tFdmVudCkgPT4ge1xuICAgICAgY29uc3QgY2xpY2tUYXJnZXQgPSBjbGlja0V2ZW50LnRhcmdldDtcbiAgICAgIGlmIChcbiAgICAgICAgY2xpY2tUYXJnZXQgJiZcbiAgICAgICAgY2xpY2tUYXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50ICYmXG4gICAgICAgIGNsaWNrVGFyZ2V0LmNsb3Nlc3QoYC4ke3JldXNlZENsYXNzTmFtZXMuZGVsZXRlQnV0dG9uQ2xhc3N9YClcbiAgICAgICkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBfdmVyaWZ5Tm90TnVsbChcbiAgICAgICAgICBfdmVyaWZ5Tm90TnVsbChjbGlja1RhcmdldC5jbG9zZXN0KFwiLnByb2plY3RcIikpLmdldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwiZGF0YS1pbmRleFwiXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBjYihwYXJzZUludChwcm9qZWN0SW5kZXgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmluZENyZWF0ZVByb2plY3Q6IGJpbmRDcmVhdGVQcm9qZWN0LFxuICAgIGJpbmRSZWFkUHJvamVjdDogYmluZFJlYWRQcm9qZWN0LFxuICAgIGJpbmRVcGRhdGVQcm9qZWN0OiBiaW5kVXBkYXRlUHJvamVjdCxcbiAgICBiaW5kRGVsZXRlUHJvamVjdDogYmluZERlbGV0ZVByb2plY3QsXG4gICAgZGlzcGxheVByb2plY3RzOiBkaXNwbGF5UHJvamVjdHMsXG4gIH07XG59KSgpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIF92ZXJpZnlOb3ROdWxsPFQ+KHA6IG51bGwgfCBUKTogVCB7XG4gIGlmIChwID09PSBudWxsKSB7XG4gICAgdGhyb3cgXCJTaG91bGQgbm90IGJlIG51bGwhXCI7XG4gIH1cbiAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudDxUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcbiAgdGFnOiBULFxuICBjbGFzc2VzPzogc3RyaW5nW11cbik6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtUXSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChjbGFzc2VzKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWdub3JlRW50ZXJDYWxsYmFjayhrZXlFdmVudDogS2V5Ym9hcmRFdmVudCkge1xuICBpZiAoa2V5RXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBrZXlFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgbW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvaW5kZXguanNcIjtcbmltcG9ydCB7IHNpZGViYXJWaWV3LCBtYWluVmlldyB9IGZyb20gXCIuL3ZpZXdzL2luZGV4LmpzXCI7XG5jb250cm9sbGVyKG1vZGVsLCBzaWRlYmFyVmlldywgbWFpblZpZXcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9