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
    const mainElement = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._verifyNotNull)(document.querySelector("main"));
    function _createTodoColumnElement(dateString, todoItems) {
        const todoColumn = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", ["todo-column"]);
        const dateH3 = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("h3", ["todo-date"]);
        dateH3.innerText = dateString;
        const todoElements = todoItems.map((todoItem) => {
            const todoElement = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", ["todo-small"]);
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
        const addTodoButton = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("button", ["add-todo-button"]);
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
        const form = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("form", ["add-todo-form"]);
        const formCenter = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", ["form-body"]);
        const titleFormElementWrapper = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", [
            "form-element-wrapper",
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
            "form-element-wrapper",
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
            "form-element-wrapper",
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
            "form-element-wrapper",
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
            "form-element-wrapper",
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
                clickTarget.closest(".add-todo-button")) {
                // make form, add event listener on submit of that to invoke model's createTodo using submitted form information
                const form = _createAddTodoForm(cb);
                const formWrapper = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", ["form-background"]);
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
                        !clickTarget.closest(".add-todo-form")) {
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
        const todoItemElement = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", ["todo-item"]);
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
                clickTarget.closest(".todo-small") &&
                !clickTarget.closest(".todo-done")) {
                const todoItemElement = clickTarget.closest(".todo-small");
                const todoIndex = parseInt((0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._verifyNotNull)(todoItemElement.getAttribute("data-index")));
                const todoItem = readCb(todoIndex);
                const { element, getData } = _createReadTodoView(todoItem, deleteCb);
                const wrapper = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__._createElement)("div", ["form-background"]);
                wrapper.append(element);
                mainElement.append(wrapper);
                const clickHandler = function (clickEvent) {
                    const clickTarget = clickEvent.target;
                    if (clickTarget &&
                        clickTarget instanceof Element &&
                        !clickTarget.closest(".todo-item")) {
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
    function _createProjectElement(project) {
        const projectContainer = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("div", ["project"]);
        projectContainer.setAttribute("data-index", project.projectId.toString());
        const editButton = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("button", ["edit-project-button"]);
        editButton.innerHTML = (_images_pencil_outline_svg__WEBPACK_IMPORTED_MODULE_1___default());
        const projectTitle = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("span", [
            "flex-grow",
            "project-title-sidebar",
        ]);
        projectTitle.innerText = project.projectTitle;
        const projectTodoCount = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("div", ["project-todo-count"]);
        const projectNr = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("span");
        projectNr.innerText = project.todoItems.length.toString();
        const projectImage = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("div");
        projectImage.innerHTML = (_images_note_outline_svg__WEBPACK_IMPORTED_MODULE_3___default());
        projectTodoCount.append(projectNr, projectImage);
        const deleteButton = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("button", ["delete-project-button"]);
        deleteButton.innerHTML = (_images_close_outline_svg__WEBPACK_IMPORTED_MODULE_2___default());
        projectContainer.append(editButton, projectTitle, projectTodoCount, deleteButton);
        return projectContainer;
    }
    function _createAddProjectElement() {
        const addProjectButton = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._createElement)("button", ["add-project-button"]);
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
                clickTarget.classList.contains("add-project-button")) {
                cb({ projectTitle: "New project", todoItems: [] });
            }
        });
    }
    function bindReadProject(cb) {
        sidebarProjects.addEventListener("click", (clickEvent) => {
            const clickTarget = clickEvent.target;
            if (clickTarget &&
                clickTarget instanceof Element &&
                clickTarget.classList.contains("project-title-sidebar") &&
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
                clickTarget.closest(".edit-project-button")) {
                // make project title field editable
                const project = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._verifyNotNull)(clickTarget.closest(".project"));
                const projectTitle = (0,_utils_js__WEBPACK_IMPORTED_MODULE_0__._verifyNotNull)(project.querySelector(".project-title-sidebar"));
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
                clickTarget.closest(".delete-project-button")) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TSxLQUFLLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFlBQVksVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsY0FBYyxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxPQUFPLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxZQUFZLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGNBQWMsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFdBQVcsVUFBVSxZQUFZLGNBQWMsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxZQUFZLFdBQVcsT0FBTyxZQUFZLE1BQU0sYUFBYSxXQUFXLFlBQVksY0FBYyxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FB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QUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUNvQjtBQUNDO0FBQ2U7QUFDekQsMERBQVUsQ0FBQyxtREFBSyxFQUFFLHdEQUFXLEVBQUUscURBQVEsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbWFnZXMvY2xvc2Utb3V0bGluZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ltYWdlcy9ub3RlLW91dGxpbmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbWFnZXMvcGVuY2lsLW91dGxpbmUuc3ZnIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbWFnZXMvcGx1cy5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ltYWdlcy90cmFzaC1jYW4tb3V0bGluZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9tb2RlbHMvcHJvamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL3RvZG8udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luZGV4LnRzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9tYWluVmlldy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2lkZWJhclZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3V0aWxzLnRzIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovLy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbjpyb290IHtcXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xcblxcbiAgLS1saWdodGVyLWJsYWNrOiByZ2IoMjksIDI5LCAyOSk7XFxuICAtLWZvcm0tYmc6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC40OTMpO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbmlucHV0IHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbn1cXG5cXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoMjUwcHgsIDFmcikgNGZyO1xcbn1cXG5cXG4jc2lkZWJhciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZpbGw6IHdoaXRlO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4ucHJvamVjdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG5cXG4gIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gMWZyIGF1dG8gYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIHBhZGRpbmc6IDRweCA4cHg7XFxuXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA0cHg7XFxufVxcblxcbi5wcm9qZWN0OmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yNTMpO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWNvdW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtdG9kby1jb3VudCA+IGRpdiB7XFxuICB3aWR0aDogMjBweDtcXG59XFxuXFxuLmVkaXQtcHJvamVjdC1idXR0b24sXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbixcXG4udG9kby1kZWxldGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBmaWxsOiBvcmFuZ2U7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgZmlsbDogcmVkO1xcbn1cXG5cXG4uYWRkLXByb2plY3QtYnV0dG9uIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBwYWRkaW5nOiAwLjVyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHZhcigtLWxpZ2h0ZXItYmxhY2spO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbm1haW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgcGFkZGluZy1sZWZ0OiAycmVtO1xcbiAgcGFkZGluZy10b3A6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LWhlYWRpbmcgPiBoMiB7XFxuICBwYWRkaW5nLWxlZnQ6IDFyZW07XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxufVxcblxcbi5hZGQtdG9kby1idXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ibGFjayk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5hZGQtdG9kby1idXR0b24gPiBzdmcge1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi5hZGQtdG9kby1idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZmlsbDogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG59XFxuXFxuLmFkZC10b2RvLWZvcm0ge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG5cXG4gIG92ZXJmbG93OiBzY3JvbGw7XFxufVxcblxcbi5mb3JtLWJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgMWZyO1xcbiAgZ2FwOiAwLjVyZW0gMXJlbTtcXG59XFxuXFxuLmZvcm0tZWxlbWVudC13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGNvbnRlbnRzO1xcbn1cXG5cXG4uYWRkLXRvZG8tc3VibWl0LWJ1dHRvbiB7XFxuICB3aWR0aDogNjAlO1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XFxuICBwYWRkaW5nLWJsb2NrOiAwLjVyZW07XFxuICBncmlkLWNvbHVtbi1zdGFydDogc3BhbiAyO1xcblxcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ibGFjayk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5hZGQtdG9kby1zdWJtaXQtYnV0dG9uOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItYmxhY2spO1xcbn1cXG5cXG4uZm9ybS1iYWNrZ3JvdW5kIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGluc2V0OiAwO1xcbiAgei1pbmRleDogMTAwMDtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XFxuICBwbGFjZS1pdGVtczogY2VudGVyO1xcblxcbiAgZ3JpZC10ZW1wbGF0ZTogODAlIC8gODAlO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQ5Myk7XFxufVxcblxcbi5hZGQtdG9kby1mb3JtIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIHdpZHRoOiBjbGFtcCgyMDBweCwgODAlLCA1MDBweCk7XFxuICBtaW4taGVpZ2h0OiA4MCU7XFxufVxcblxcbi8qIFRvZG8gY29sbGVjdGlvbiAqL1xcbi50b2RvLWNvbGxlY3Rpb24ge1xcbiAgbWFyZ2luLXRvcDogMXJlbTtcXG5cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xcbiAgZ3JpZC1hdXRvLWNvbHVtbnM6IG1heC1jb250ZW50O1xcblxcbiAgZ2FwOiAycmVtO1xcbn1cXG5cXG4udG9kby1jb2x1bW4ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1jb2x1bW4gKyAudG9kby1jb2x1bW46OmJlZm9yZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGxlZnQ6IC0wLjVyZW07XFxuICB0b3A6IDA7XFxuICBib3R0b206IDA7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItYmxhY2spO1xcbn1cXG5cXG4udG9kby1pdGVtcy1zbWFsbCB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBnYXA6IDAuNXJlbTtcXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcXG59XFxuXFxuLnRvZG8tc21hbGwge1xcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ibGFjayk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBtYXgtd2lkdGg6IDI1Y2g7XFxuICBwYWRkaW5nOiAwLjVyZW0gMS41cmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1zbWFsbDpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG59XFxuXFxuLyogVG9kbyB2aWV3ICovXFxuLnRvZG8taXRlbSB7XFxuICB3aWR0aDogY2xhbXAoMjAwcHgsIDgwJSwgNTAwcHgpO1xcbiAgbWluLWhlaWdodDogODAlO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcblxcbiAgcGFkZGluZzogMXJlbTtcXG5cXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgIFxcXCJ0aXRsZSBkb25lIC4gZGVsZXRlXFxcIiBhdXRvXFxuICAgIFxcXCJwcmlvcml0eSBkdWVEYXRlIC4gLlxcXCIgYXV0b1xcbiAgICBcXFwiZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gZGVzY3JpcHRpb24gLlxcXCIgMWZyIC8gbWlubWF4KDEyY2gsIGF1dG8pXFxuICAgIGF1dG8gMWZyIGF1dG87XFxuICBnYXA6IDAuNXJlbSAxcmVtO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tcmVhZC10aXRsZSB7XFxuICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgcGxhY2Utc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi50b2RvLWRlbGV0ZSB7XFxuICBncmlkLWFyZWE6IGRlbGV0ZTtcXG4gIHdpZHRoOiAzMHB4O1xcbn1cXG5cXG4udG9kby1kZWxldGU6aG92ZXIge1xcbiAgZmlsbDogcmVkO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICBncmlkLWFyZWE6IGRlc2NyaXB0aW9uO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWxpZ2h0ZXItYmxhY2spO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ibGFjayk7XFxufVxcblxcbi50b2RvLXByaW9yaXR5IHtcXG4gIGdyaWQtYXJlYTogcHJpb3JpdHk7XFxuICB3aWR0aDogMTAwJTtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHkgPiBzcGFuOm50aC1jaGlsZCgyKSB7XFxuICBmbGV4LWdyb3c6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50b2RvLWR1ZS1kYXRlIHtcXG4gIGdyaWQtYXJlYTogZHVlRGF0ZTtcXG59XFxuXFxuLnRvZG8taXMtY29tcGxldGUge1xcbiAgZ3JpZC1hcmVhOiBkb25lO1xcbiAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLyogY2hlY2tib3ggY29uZGl0aW9uYWwgc3R5bGluZyAqL1xcbi50b2RvLXNtYWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLnRvZG8tc21hbGxbZGF0YS1kb25lPVxcXCJ0cnVlXFxcIl06OmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgbGVmdDogY2FsYygxMDAlICsgMXJlbSk7XFxuXFxuICBoZWlnaHQ6IDFyZW07XFxuICB3aWR0aDogMC4zMjVyZW07XFxuICByb3RhdGU6IDQ1ZGVnO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItbGVmdDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJB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QUFZO0VBQ1osc0NBQXNDO0FBQ3hDOztBQUVBLGNBQWM7QUFDZDtFQUNFLCtCQUErQjtFQUMvQixlQUFlO0VBQ2Ysa0JBQWtCOztFQUVsQixhQUFhOztFQUViLHVCQUF1Qjs7RUFFdkIsYUFBYTtFQUNiOzs7O2lCQUllO0VBQ2YsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGFBQWE7O0VBRWIsMENBQTBDO0VBQzFDLDRDQUE0QztBQUM5Qzs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXOztFQUVYLGFBQWE7RUFDYixRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBLGlDQUFpQztBQUNqQztFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsdUJBQXVCOztFQUV2QixZQUFZO0VBQ1osZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLGtDQUFrQztFQUNsQyxpQ0FBaUM7QUFDbkNcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuOnJvb3Qge1xcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XFxuXFxuICAtLWxpZ2h0ZXItYmxhY2s6IHJnYigyOSwgMjksIDI5KTtcXG4gIC0tZm9ybS1iZzogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjQ5Myk7XFxufVxcblxcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuaW5wdXQge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IG1pbm1heCgyNTBweCwgMWZyKSA0ZnI7XFxufVxcblxcbiNzaWRlYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItYmxhY2spO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZmlsbDogd2hpdGU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbi5wcm9qZWN0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcblxcbiAgcGFkZGluZzogMXJlbTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byAxZnIgYXV0byBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogNHB4IDhweDtcXG5cXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDRweDtcXG59XFxuXFxuLnByb2plY3Q6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjI1Myk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5wcm9qZWN0LXRvZG8tY291bnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvamVjdC10b2RvLWNvdW50ID4gZGl2IHtcXG4gIHdpZHRoOiAyMHB4O1xcbn1cXG5cXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbixcXG4uZGVsZXRlLXByb2plY3QtYnV0dG9uLFxcbi50b2RvLWRlbGV0ZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDI1cHg7XFxufVxcblxcbi5lZGl0LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcXG4gIGZpbGw6IG9yYW5nZTtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBmaWxsOiByZWQ7XFxufVxcblxcbi5hZGQtcHJvamVjdC1idXR0b24ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFkZC1wcm9qZWN0LWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tbGlnaHRlci1ibGFjayk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxubWFpbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICBwYWRkaW5nLWxlZnQ6IDJyZW07XFxuICBwYWRkaW5nLXRvcDogMXJlbTtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnByb2plY3QtaGVhZGluZyA+IGgyIHtcXG4gIHBhZGRpbmctbGVmdDogMXJlbTtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLmFkZC10b2RvLWJ1dHRvbiB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHBhZGRpbmc6IDAuMjVyZW0gMXJlbTtcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmFkZC10b2RvLWJ1dHRvbiA+IHN2ZyB7XFxuICB3aWR0aDogMjVweDtcXG59XFxuXFxuLmFkZC10b2RvLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmaWxsOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItYmxhY2spO1xcbn1cXG5cXG4uYWRkLXRvZG8tZm9ybSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgcGxhY2UtY29udGVudDogY2VudGVyO1xcblxcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcXG59XFxuXFxuLmZvcm0tYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCAxZnI7XFxuICBnYXA6IDAuNXJlbSAxcmVtO1xcbn1cXG5cXG4uZm9ybS1lbGVtZW50LXdyYXBwZXIge1xcbiAgZGlzcGxheTogY29udGVudHM7XFxufVxcblxcbi5hZGQtdG9kby1zdWJtaXQtYnV0dG9uIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG4gIHBhZGRpbmctYmxvY2s6IDAuNXJlbTtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiBzcGFuIDI7XFxuXFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmFkZC10b2RvLXN1Ym1pdC1idXR0b246aG92ZXIge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHRlci1ibGFjayk7XFxufVxcblxcbi5mb3JtLWJhY2tncm91bmQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgaW5zZXQ6IDA7XFxuICB6LWluZGV4OiAxMDAwO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICBncmlkLXRlbXBsYXRlOiA4MCUgLyA4MCU7XFxuXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNDkzKTtcXG59XFxuXFxuLmFkZC10b2RvLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgd2lkdGg6IGNsYW1wKDIwMHB4LCA4MCUsIDUwMHB4KTtcXG4gIG1pbi1oZWlnaHQ6IDgwJTtcXG59XFxuXFxuLyogVG9kbyBjb2xsZWN0aW9uICovXFxuLnRvZG8tY29sbGVjdGlvbiB7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcblxcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XFxuICBncmlkLWF1dG8tY29sdW1uczogbWF4LWNvbnRlbnQ7XFxuXFxuICBnYXA6IDJyZW07XFxufVxcblxcbi50b2RvLWNvbHVtbiB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi50b2RvLWNvbHVtbiArIC50b2RvLWNvbHVtbjo6YmVmb3JlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgbGVmdDogLTAuNXJlbTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ibGFjayk7XFxufVxcblxcbi50b2RvLWl0ZW1zLXNtYWxsIHtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGdhcDogMC41cmVtO1xcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xcbn1cXG5cXG4udG9kby1zbWFsbCB7XFxuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIG1heC13aWR0aDogMjVjaDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAxLjVyZW07XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLXNtYWxsOmhvdmVyIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0ZXItYmxhY2spO1xcbn1cXG5cXG4vKiBUb2RvIHZpZXcgKi9cXG4udG9kby1pdGVtIHtcXG4gIHdpZHRoOiBjbGFtcCgyMDBweCwgODAlLCA1MDBweCk7XFxuICBtaW4taGVpZ2h0OiA4MCU7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuXFxuICBwYWRkaW5nOiAxcmVtO1xcblxcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgXFxcInRpdGxlIGRvbmUgLiBkZWxldGVcXFwiIGF1dG9cXG4gICAgXFxcInByaW9yaXR5IGR1ZURhdGUgLiAuXFxcIiBhdXRvXFxuICAgIFxcXCJkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiBkZXNjcmlwdGlvbiAuXFxcIiAxZnIgLyBtaW5tYXgoMTJjaCwgYXV0bylcXG4gICAgYXV0byAxZnIgYXV0bztcXG4gIGdhcDogMC41cmVtIDFyZW07XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9kby1yZWFkLXRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGU7XFxuICBwbGFjZS1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnRvZG8tZGVsZXRlIHtcXG4gIGdyaWQtYXJlYTogZGVsZXRlO1xcbiAgd2lkdGg6IDMwcHg7XFxufVxcblxcbi50b2RvLWRlbGV0ZTpob3ZlciB7XFxuICBmaWxsOiByZWQ7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gIGdyaWQtYXJlYTogZGVzY3JpcHRpb247XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG4gIHBhZGRpbmc6IDFyZW07XFxuXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbGlnaHRlci1ibGFjayk7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1saWdodGVyLWJsYWNrKTtcXG59XFxuXFxuLnRvZG8tcHJpb3JpdHkge1xcbiAgZ3JpZC1hcmVhOiBwcmlvcml0eTtcXG4gIHdpZHRoOiAxMDAlO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogNHB4O1xcbn1cXG5cXG4udG9kby1wcmlvcml0eSA+IHNwYW46bnRoLWNoaWxkKDIpIHtcXG4gIGZsZXgtZ3JvdzogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnRvZG8tZHVlLWRhdGUge1xcbiAgZ3JpZC1hcmVhOiBkdWVEYXRlO1xcbn1cXG5cXG4udG9kby1pcy1jb21wbGV0ZSB7XFxuICBncmlkLWFyZWE6IGRvbmU7XFxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4vKiBjaGVja2JveCBjb25kaXRpb25hbCBzdHlsaW5nICovXFxuLnRvZG8tc21hbGwge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG5cXG4udG9kby1zbWFsbFtkYXRhLWRvbmU9XFxcInRydWVcXFwiXTo6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBsZWZ0OiBjYWxjKDEwMCUgKyAxcmVtKTtcXG5cXG4gIGhlaWdodDogMXJlbTtcXG4gIHdpZHRoOiAwLjMyNXJlbTtcXG4gIHJvdGF0ZTogNDVkZWc7XFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1sZWZ0OiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiAycHggc29saWQgdHJhbnNwYXJlbnQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTMsMTYuNzRMNy43NiwxMkwzLDcuMjZMNy4yNiwzTDEyLDcuNzZMMTYuNzQsM0wyMSw3LjI2TDE2LjI0LDEyTDIxLDE2Ljc0TDE2Ljc0LDIxTDEyLDE2LjI0TDcuMjYsMjFMMywxNi43NE0xMiwxMy40MUwxNi43NCwxOC4xNkwxOC4xNiwxNi43NEwxMy40MSwxMkwxOC4xNiw3LjI2TDE2Ljc0LDUuODRMMTIsMTAuNTlMNy4yNiw1Ljg0TDUuODQsNy4yNkwxMC41OSwxMkw1Ljg0LDE2Ljc0TDcuMjYsMTguMTZMMTIsMTMuNDFaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCI+PHBhdGggZD1cXFwiTTE0LDEwSDE5LjVMMTQsNC41VjEwTTUsM0gxNUwyMSw5VjE5QTIsMiAwIDAsMSAxOSwyMUg1QzMuODksMjEgMywyMC4xIDMsMTlWNUMzLDMuODkgMy44OSwzIDUsM001LDVWMTlIMTlWMTJIMTJWNUg1WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk0xNC4wNiw5TDE1LDkuOTRMNS45MiwxOUg1VjE4LjA4TDE0LjA2LDlNMTcuNjYsM0MxNy40MSwzIDE3LjE1LDMuMSAxNi45NiwzLjI5TDE1LjEzLDUuMTJMMTguODgsOC44N0wyMC43MSw3LjA0QzIxLjEsNi42NSAyMS4xLDYgMjAuNzEsNS42M0wxOC4zNywzLjI5QzE4LjE3LDMuMDkgMTcuOTIsMyAxNy42NiwzTTE0LjA2LDYuMTlMMywxNy4yNVYyMUg2Ljc1TDE3LjgxLDkuOTRMMTQuMDYsNi4xOVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgdmlld0JveD1cXFwiMiAyIDIwIDIwXFxcIj48cGF0aCBkPVxcXCJNMTksMTNIMTNWMTlIMTFWMTNINVYxMUgxMVY1SDEzVjExSDE5VjEzWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiPjxwYXRoIGQ9XFxcIk05LDNWNEg0VjZINVYxOUEyLDIgMCAwLDAgNywyMUgxN0EyLDIgMCAwLDAgMTksMTlWNkgyMFY0SDE1VjNIOU03LDZIMTdWMTlIN1Y2TTksOFYxN0gxMVY4SDlNMTMsOFYxN0gxNVY4SDEzWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwiaW1wb3J0IHtcbiAgSU1vZGVsLFxuICBUb2RvSXRlbVByb3BzLFxuICBJUHJvamVjdCxcbiAgSVNhdmFibGVUb2RvSXRlbSxcbn0gZnJvbSBcIi4vbW9kZWxzL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBJU2lkZWJhclZpZXcsIElNYWluVmlldyB9IGZyb20gXCIuL3ZpZXdzL2luZGV4LmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIChcbiAgbW9kZWw6IElNb2RlbCxcbiAgc2lkZWJhclZpZXc6IElTaWRlYmFyVmlldyxcbiAgbWFpblZpZXc6IElNYWluVmlld1xuKSB7XG4gIGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICBzaWRlYmFyVmlldy5kaXNwbGF5UHJvamVjdHMobW9kZWwucHJvamVjdHMpO1xuICAgIG1haW5WaWV3LmRpc3BsYXlUb2RvSXRlbXMobW9kZWwuZ2V0QWN0aXZlUHJvamVjdCgpKTtcbiAgfVxuXG4gIG1vZGVsLmJpbmRSZW5kZXIocmVuZGVyKTtcblxuICBzaWRlYmFyVmlldy5iaW5kQ3JlYXRlUHJvamVjdChtb2RlbC5jcmVhdGVQcm9qZWN0LmJpbmQobnVsbCkpO1xuICAvLyBuZWVkIHRoZSBtYWluVmlldyBjb21wbGV0ZWQgdG8gcGFzcyBpdHMgcmVuZGVyIG1ldGhvZCB0byBzaWRlYmFyVmlldy5iaW5kUmVhZFByb2plY3QsIHNpbmNlIGNsaWNraW5nIGEgcHJvamVjdFxuICAvLyB3aWxsIG1haW5seSByZXJlbmRlciB0aGUgbWFpbiBjb250ZW50LCBub3QgdGhlIHNpZGViYXJcbiAgc2lkZWJhclZpZXcuYmluZFJlYWRQcm9qZWN0KG1vZGVsLnJlYWRQcm9qZWN0LmJpbmQobnVsbCkpO1xuICBzaWRlYmFyVmlldy5iaW5kVXBkYXRlUHJvamVjdChtb2RlbC51cGRhdGVQcm9qZWN0VGl0bGUuYmluZChudWxsKSk7XG4gIHNpZGViYXJWaWV3LmJpbmREZWxldGVQcm9qZWN0KG1vZGVsLmRlbGV0ZVByb2plY3QuYmluZChudWxsKSk7XG5cbiAgbWFpblZpZXcuYmluZENyZWF0ZVRvZG8oKHRvZG9Qcm9wczogVG9kb0l0ZW1Qcm9wcykgPT4ge1xuICAgIHJldHVybiAobW9kZWwuZ2V0QWN0aXZlUHJvamVjdCgpIGFzIElQcm9qZWN0KS5jcmVhdGVUb2RvSXRlbSh0b2RvUHJvcHMpO1xuICB9KTtcbiAgbWFpblZpZXcuYmluZFJlYWRUb2RvKFxuICAgICh0b2RvSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgcmV0dXJuIChtb2RlbC5nZXRBY3RpdmVQcm9qZWN0KCkgYXMgSVByb2plY3QpLnJlYWRUb2RvSXRlbShcbiAgICAgICAgdG9kb0luZGV4XG4gICAgICApIGFzIElTYXZhYmxlVG9kb0l0ZW07XG4gICAgfSxcbiAgICAoaXRlbUlkOiBudW1iZXIsIHByb3BzOiBUb2RvSXRlbVByb3BzKSA9PiB7XG4gICAgICByZXR1cm4gKG1vZGVsLmdldEFjdGl2ZVByb2plY3QoKSBhcyBJUHJvamVjdCkudXBkYXRlVG9kb0l0ZW0oXG4gICAgICAgIGl0ZW1JZCxcbiAgICAgICAgcHJvcHNcbiAgICAgICk7XG4gICAgfSxcbiAgICAoaXRlbUlkOiBudW1iZXIpID0+IHtcbiAgICAgIHJldHVybiAobW9kZWwuZ2V0QWN0aXZlUHJvamVjdCgpIGFzIElQcm9qZWN0KS5kZWxldGVUb2RvSXRlbShpdGVtSWQpO1xuICAgIH1cbiAgKTtcblxuICByZW5kZXIoKTtcbn1cbiIsImV4cG9ydCB7IG1vZGVsLCBJTW9kZWwgfSBmcm9tIFwiLi9tb2RlbC5qc1wiO1xuZXhwb3J0IHsgSVByb2plY3QsIFByb2plY3RQcm9wcyB9IGZyb20gXCIuL3Byb2plY3QuanNcIjtcbmV4cG9ydCB7XG4gIFRvZG9JdGVtUHJvcHMsXG4gIElUb2RvSXRlbSxcbiAgUHJpb3JpdHksXG4gIElTYXZhYmxlVG9kb0l0ZW0sXG59IGZyb20gXCIuL3RvZG8uanNcIjtcbiIsImltcG9ydCB7XG4gIElTYXZhYmxlUHJvamVjdCxcbiAgSVByb2plY3QsXG4gIGNyZWF0ZVByb2plY3QsXG4gIFByb2plY3RQcm9wcyxcbn0gZnJvbSBcIi4vcHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgVG9kb0l0ZW1Qcm9wcyB9IGZyb20gXCIuL3RvZG8uanNcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTW9kZWwge1xuICBwcm9qZWN0czogSVByb2plY3RbXTtcblxuICBjcmVhdGVQcm9qZWN0KHByb2plY3RQcm9wczogUHJvamVjdFByb3BzKTogSVByb2plY3Q7XG4gIHJlYWRQcm9qZWN0KHByb2plY3RJZDogbnVtYmVyKTogbnVsbCB8IElQcm9qZWN0O1xuICB1cGRhdGVQcm9qZWN0VGl0bGUocHJvamVjdElkOiBudW1iZXIsIHByb2plY3RUaXRsZTogc3RyaW5nKTogdm9pZDtcbiAgZGVsZXRlUHJvamVjdChwcm9qZWN0SWQ6IG51bWJlcik6IHZvaWQ7XG5cbiAgYmluZFJlbmRlcihjYjogKCkgPT4gdm9pZCk6IHZvaWQ7XG5cbiAgZ2V0QWN0aXZlUHJvamVjdCgpOiBJUHJvamVjdCB8IG51bGw7XG59XG5cbi8vIERhdGUgb2JqZWN0cyBiZWNvbWUgc3RyaW5ncyBhZnRlciBKU09OLnN0cmluZ2lmeSwgc28gdHlwZSBvZiBkZXNlcmlhbGl6ZWQgb2JqZWN0IGlzIGRpZmZlcmVudFxudHlwZSBkZXNlcmlhbGl6ZWRUb2RvSXRlbVByb3BzID0gT21pdDxUb2RvSXRlbVByb3BzLCBcImR1ZURhdGVcIj4gJiB7XG4gIGR1ZURhdGU6IHN0cmluZztcbn07XG50eXBlIGRlc2VyaWFsaXplZFByb2plY3RQcm9wcyA9IE9taXQ8UHJvamVjdFByb3BzLCBcInRvZG9JdGVtc1wiPiAmIHtcbiAgdG9kb0l0ZW1zOiBkZXNlcmlhbGl6ZWRUb2RvSXRlbVByb3BzW107XG59O1xuXG5leHBvcnQgY29uc3QgbW9kZWwgPSAoZnVuY3Rpb24gKCk6IElNb2RlbCB7XG4gIGNvbnN0IGxvY2FsU3RvcmFnZUtleSA9IFwicHJvamVjdHNcIjtcbiAgZnVuY3Rpb24gX3NhdmVUb0xvY2FsU3RvcmFnZSgpOiB2b2lkIHtcbiAgICBjb25zdCBzZXJpYWxpemVkUHJvamVjdHMgPSBwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IHByb2plY3Quc2VyaWFsaXplKCkpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGxvY2FsU3RvcmFnZUtleSwgSlNPTi5zdHJpbmdpZnkoc2VyaWFsaXplZFByb2plY3RzKSk7XG4gICAgY29uc29sZS5sb2coXCJtb2NrZWQgc2F2ZVwiKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9pbml0aWFsaXplRnJvbUxvY2FsU3RvcmFnZSgpOiBJU2F2YWJsZVByb2plY3RbXSB7XG4gICAgY29uc3QgcyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGxvY2FsU3RvcmFnZUtleSk7XG4gICAgaWYgKHMgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBkZXNlcmlhbGl6ZWRQcm9qZWN0UHJvcHMgPSBKU09OLnBhcnNlKFxuICAgICAgc1xuICAgICkgYXMgZGVzZXJpYWxpemVkUHJvamVjdFByb3BzW107XG4gICAgY29uc3QgcHJvcGVyUHJvamVjdFByb3BzOiBQcm9qZWN0UHJvcHNbXSA9IGRlc2VyaWFsaXplZFByb2plY3RQcm9wcy5tYXAoXG4gICAgICAoZGVzZXJpYWxpemVkUHJvamVjdFByb3BzKSA9PiB7XG4gICAgICAgIGNvbnN0IHByb3BlclRvZG9JdGVtUHJvcHM6IFRvZG9JdGVtUHJvcHNbXSA9XG4gICAgICAgICAgZGVzZXJpYWxpemVkUHJvamVjdFByb3BzLnRvZG9JdGVtcy5tYXAoXG4gICAgICAgICAgICAoZGVzZXJpYWxpemVkVG9kb0l0ZW1Qcm9wcykgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBuZXdQcm9wczogVG9kb0l0ZW1Qcm9wcyA9IHtcbiAgICAgICAgICAgICAgICBpdGVtVGl0bGU6IGRlc2VyaWFsaXplZFRvZG9JdGVtUHJvcHMuaXRlbVRpdGxlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNlcmlhbGl6ZWRUb2RvSXRlbVByb3BzLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgIGR1ZURhdGU6IG5ldyBEYXRlKGRlc2VyaWFsaXplZFRvZG9JdGVtUHJvcHMuZHVlRGF0ZSksXG4gICAgICAgICAgICAgICAgcHJpb3JpdHk6IGRlc2VyaWFsaXplZFRvZG9JdGVtUHJvcHMucHJpb3JpdHksXG4gICAgICAgICAgICAgICAgaXNDb21wbGV0ZTogZGVzZXJpYWxpemVkVG9kb0l0ZW1Qcm9wcy5pc0NvbXBsZXRlLFxuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICByZXR1cm4gbmV3UHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBwcm9qZWN0VGl0bGU6IGRlc2VyaWFsaXplZFByb2plY3RQcm9wcy5wcm9qZWN0VGl0bGUsXG4gICAgICAgICAgdG9kb0l0ZW1zOiBwcm9wZXJUb2RvSXRlbVByb3BzLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zb2xlLmxvZyh7IC4uLmRlc2VyaWFsaXplZFByb2plY3RQcm9wcyB9KTtcbiAgICByZXR1cm4gcHJvcGVyUHJvamVjdFByb3BzLm1hcCgocHJvamVjdEFyZ3MpID0+IHtcbiAgICAgIHJldHVybiBjcmVhdGVQcm9qZWN0KHByb2plY3RBcmdzLCBfY29tbWl0KTtcbiAgICB9KTtcbiAgfVxuXG4gIGNvbnN0IHByb2plY3RzOiBJU2F2YWJsZVByb2plY3RbXSA9IF9pbml0aWFsaXplRnJvbUxvY2FsU3RvcmFnZSgpO1xuICBsZXQgY3VycmVudEFjdGl2ZVByb2plY3Q6IG51bWJlciB8IG51bGwgPSBudWxsO1xuICBsZXQgcmVuZGVyQ2FsbEJhY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIGZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0KHByb2plY3RQcm9wczogUHJvamVjdFByb3BzKTogSVByb2plY3Qge1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBjcmVhdGVQcm9qZWN0KHByb2plY3RQcm9wcywgX2NvbW1pdCk7XG4gICAgcHJvamVjdHMucHVzaChuZXdQcm9qZWN0KTtcbiAgICBfY29tbWl0KG5ld1Byb2plY3QucHJvamVjdElkKTtcbiAgICByZXR1cm4gbmV3UHJvamVjdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlYWRQcm9qZWN0KHByb2plY3RJZDogbnVtYmVyKSB7XG4gICAgZm9yIChjb25zdCBwcm9qZWN0IG9mIHByb2plY3RzKSB7XG4gICAgICBpZiAocHJvamVjdC5wcm9qZWN0SWQgPT0gcHJvamVjdElkKSB7XG4gICAgICAgIF9jb21taXQocHJvamVjdElkKTtcbiAgICAgICAgcmV0dXJuIHByb2plY3Q7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlUHJvamVjdFRpdGxlKHByb2plY3RJZDogbnVtYmVyLCBwcm9qZWN0VGl0bGU6IHN0cmluZykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0c1tpXS5wcm9qZWN0SWQgPT0gcHJvamVjdElkKSB7XG4gICAgICAgIHByb2plY3RzW2ldLnByb2plY3RUaXRsZSA9IHByb2plY3RUaXRsZTtcbiAgICAgICAgX2NvbW1pdChwcm9qZWN0SWQpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KHByb2plY3RJZDogbnVtYmVyKTogdm9pZCB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RzW2ldLnByb2plY3RJZCA9PSBwcm9qZWN0SWQpIHtcbiAgICAgICAgcHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICBfY29tbWl0KG51bGwpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kUmVuZGVyKGNiOiAoKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgcmVuZGVyQ2FsbEJhY2sgPSBjYjtcbiAgfVxuXG4gIGZ1bmN0aW9uIF9jb21taXQocHJvamVjdElkOiBudW1iZXIgfCBudWxsKSB7XG4gICAgY3VycmVudEFjdGl2ZVByb2plY3QgPSBwcm9qZWN0SWQ7XG4gICAgX3NhdmVUb0xvY2FsU3RvcmFnZSgpO1xuICAgIHJlbmRlckNhbGxCYWNrKCk7XG4gIH1cblxuICBmdW5jdGlvbiBnZXRBY3RpdmVQcm9qZWN0KCk6IElQcm9qZWN0IHwgbnVsbCB7XG4gICAgaWYgKGN1cnJlbnRBY3RpdmVQcm9qZWN0ID09PSBudWxsKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHByb2plY3RzLmZpbmQoXG4gICAgICAodmFsdWUpID0+IHZhbHVlLnByb2plY3RJZCA9PT0gY3VycmVudEFjdGl2ZVByb2plY3RcbiAgICApO1xuICAgIGlmIChhY3RpdmVQcm9qZWN0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IGBDYW5ub3QgcmV0cmlldmUgYWN0aXZlIHByb2plY3QsIGlkIG9mIGFjdGl2ZSBwcm9qZWN0IGlzICR7Y3VycmVudEFjdGl2ZVByb2plY3R9YDtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2ZVByb2plY3Q7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHByb2plY3RzOiBwcm9qZWN0cyxcblxuICAgIGNyZWF0ZVByb2plY3Q6IF9jcmVhdGVQcm9qZWN0LFxuICAgIHJlYWRQcm9qZWN0OiByZWFkUHJvamVjdCxcbiAgICB1cGRhdGVQcm9qZWN0VGl0bGU6IHVwZGF0ZVByb2plY3RUaXRsZSxcbiAgICBkZWxldGVQcm9qZWN0OiBkZWxldGVQcm9qZWN0LFxuXG4gICAgYmluZFJlbmRlcjogYmluZFJlbmRlcixcblxuICAgIGdldEFjdGl2ZVByb2plY3Q6IGdldEFjdGl2ZVByb2plY3QsXG4gIH07XG59KSgpO1xuIiwiaW1wb3J0IElTYXZhYmxlIGZyb20gXCIuL3NhdmFibGUuanNcIjtcbmltcG9ydCB7IFRvZG9JdGVtUHJvcHMsIElTYXZhYmxlVG9kb0l0ZW0sIGNyZWF0ZVRvZG9JdGVtIH0gZnJvbSBcIi4vdG9kby5qc1wiO1xuXG4vLyBQcm9qZWN0XG5leHBvcnQgaW50ZXJmYWNlIFByb2plY3RQcm9wcyB7XG4gIHByb2plY3RUaXRsZTogc3RyaW5nO1xuICB0b2RvSXRlbXM6IFRvZG9JdGVtUHJvcHNbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUHJvamVjdCB7XG4gIHByb2plY3RJZDogbnVtYmVyO1xuICBwcm9qZWN0VGl0bGU6IHN0cmluZztcbiAgdG9kb0l0ZW1zOiBJU2F2YWJsZVRvZG9JdGVtW107XG5cbiAgY3JlYXRlVG9kb0l0ZW0ocHJvcHM6IFRvZG9JdGVtUHJvcHMpOiBJU2F2YWJsZVRvZG9JdGVtO1xuICByZWFkVG9kb0l0ZW0oaXRlbUlkOiBudW1iZXIpOiB1bmRlZmluZWQgfCBJU2F2YWJsZVRvZG9JdGVtO1xuICB1cGRhdGVUb2RvSXRlbShpdGVtSWQ6IG51bWJlciwgcHJvcHM6IFRvZG9JdGVtUHJvcHMpOiB2b2lkO1xuICBkZWxldGVUb2RvSXRlbShpdGVtSWQ6IG51bWJlcik6IHZvaWQ7XG59XG5cbmV4cG9ydCB0eXBlIElTYXZhYmxlUHJvamVjdCA9IElQcm9qZWN0ICYgSVNhdmFibGU8UHJvamVjdFByb3BzPjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVByb2plY3QgPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgcHJvamVjdElkQ291bnRlciA9IDA7XG5cbiAgZnVuY3Rpb24gY3JlYXRlUHJvamVjdChcbiAgICBwcm9wczogUHJvamVjdFByb3BzLFxuICAgIGNvbW1pdENhbGxiYWNrOiAocHJvamVjdElkOiBudW1iZXIpID0+IHZvaWRcbiAgKTogSVNhdmFibGVQcm9qZWN0IHtcbiAgICBjb25zdCB0b2RvSXRlbXMgPSBwcm9wcy50b2RvSXRlbXMubWFwKCh0b2RvSXRlbVByb3BzKSA9PlxuICAgICAgY3JlYXRlVG9kb0l0ZW0odG9kb0l0ZW1Qcm9wcylcbiAgICApO1xuICAgIGNvbnN0IHByb2plY3RUaXRsZSA9IHByb3BzLnByb2plY3RUaXRsZTtcbiAgICBjb25zdCBwcm9qZWN0SWQgPSBwcm9qZWN0SWRDb3VudGVyKys7XG4gICAgY29uc3QgY3VycmllZENvbW1pdENhbGxiYWNrID0gKCkgPT4gY29tbWl0Q2FsbGJhY2socHJvamVjdElkKTtcblxuICAgIGNvbnN0IF9jcmVhdGVUb2RvSXRlbSA9IGZ1bmN0aW9uIChwcm9wczogVG9kb0l0ZW1Qcm9wcyk6IElTYXZhYmxlVG9kb0l0ZW0ge1xuICAgICAgY29uc3QgbmV3SXRlbSA9IGNyZWF0ZVRvZG9JdGVtKHByb3BzKTtcbiAgICAgIHRvZG9JdGVtcy5wdXNoKG5ld0l0ZW0pO1xuICAgICAgX2NvbW1pdCgpO1xuICAgICAgcmV0dXJuIG5ld0l0ZW07XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHJlYWRUb2RvSXRlbShpdGVtSWQ6IG51bWJlcik6IHVuZGVmaW5lZCB8IElTYXZhYmxlVG9kb0l0ZW0ge1xuICAgICAgZm9yIChjb25zdCB0b2RvSXRlbSBvZiB0b2RvSXRlbXMpIHtcbiAgICAgICAgaWYgKHRvZG9JdGVtLml0ZW1JZCA9PSBpdGVtSWQpIHtcbiAgICAgICAgICBfY29tbWl0KCk7XG4gICAgICAgICAgcmV0dXJuIHRvZG9JdGVtO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlVG9kb0l0ZW0oaXRlbUlkOiBudW1iZXIsIHByb3BzOiBUb2RvSXRlbVByb3BzKTogdm9pZCB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9JdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodG9kb0l0ZW1zW2ldLml0ZW1JZCA9PSBpdGVtSWQpIHtcbiAgICAgICAgICB0b2RvSXRlbXNbaV0gPSBjcmVhdGVUb2RvSXRlbShwcm9wcyk7XG4gICAgICAgICAgX2NvbW1pdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZGVsZXRlVG9kb0l0ZW0oaXRlbUlkOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0l0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICh0b2RvSXRlbXNbaV0uaXRlbUlkID09IGl0ZW1JZCkge1xuICAgICAgICAgIHRvZG9JdGVtcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgX2NvbW1pdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gX2NvbW1pdCgpIHtcbiAgICAgIGN1cnJpZWRDb21taXRDYWxsYmFjaygpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNlcmlhbGl6ZSgpOiBQcm9qZWN0UHJvcHMge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcHJvamVjdFRpdGxlOiBwcm9qZWN0VGl0bGUsXG4gICAgICAgIHRvZG9JdGVtczogdG9kb0l0ZW1zLm1hcCgodG9kb0l0ZW0pID0+IHRvZG9JdGVtLnNlcmlhbGl6ZSgpKSxcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHByb2plY3RJZDogcHJvamVjdElkLFxuICAgICAgdG9kb0l0ZW1zOiB0b2RvSXRlbXMsXG4gICAgICBwcm9qZWN0VGl0bGU6IHByb2plY3RUaXRsZSxcblxuICAgICAgY3JlYXRlVG9kb0l0ZW06IF9jcmVhdGVUb2RvSXRlbSxcbiAgICAgIHJlYWRUb2RvSXRlbTogcmVhZFRvZG9JdGVtLFxuICAgICAgdXBkYXRlVG9kb0l0ZW06IHVwZGF0ZVRvZG9JdGVtLFxuICAgICAgZGVsZXRlVG9kb0l0ZW06IGRlbGV0ZVRvZG9JdGVtLFxuXG4gICAgICBzZXJpYWxpemU6IHNlcmlhbGl6ZSxcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGNyZWF0ZVByb2plY3Q7XG59KSgpO1xuIiwiaW1wb3J0IElTYXZhYmxlIGZyb20gXCIuL3NhdmFibGUuanNcIjtcblxuLy8gTW9kZWxcbi8vIFRvZG8gaXRlbXNcbmV4cG9ydCBlbnVtIFByaW9yaXR5IHtcbiAgTG93ID0gMCxcbiAgTWVkaXVtLFxuICBIaWdoLFxuICBDcml0aWNhbCxcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2RvSXRlbVByb3BzIHtcbiAgaXRlbVRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGR1ZURhdGU6IERhdGU7XG4gIHByaW9yaXR5OiBQcmlvcml0eTtcbiAgaXNDb21wbGV0ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJVG9kb0l0ZW0ge1xuICBpdGVtSWQ6IG51bWJlcjtcbiAgaXRlbVRpdGxlOiBzdHJpbmc7XG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gIGR1ZURhdGU6IERhdGU7XG4gIHByaW9yaXR5OiBQcmlvcml0eTtcbiAgaXNDb21wbGV0ZTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IHR5cGUgSVNhdmFibGVUb2RvSXRlbSA9IElUb2RvSXRlbSAmIElTYXZhYmxlPFRvZG9JdGVtUHJvcHM+O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVG9kb0l0ZW0gPSAoZnVuY3Rpb24gKCkge1xuICBsZXQgaXRlbUlkQ291bnRlciA9IDA7XG5cbiAgZnVuY3Rpb24gY3JlYXRlVG9kb0l0ZW0ocHJvcHM6IFRvZG9JdGVtUHJvcHMpOiBJU2F2YWJsZVRvZG9JdGVtIHtcbiAgICAvLyBvdGhlciBtZXRob2RzIGNhbiBiZSBkZWZpbmVkIGluIHRoZSBjbG9zdXJlIGhlcmVcbiAgICBmdW5jdGlvbiBzZXJpYWxpemUoKSB7XG4gICAgICByZXR1cm4gcHJvcHM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIGl0ZW1JZDogaXRlbUlkQ291bnRlcisrLFxuICAgICAgaXRlbVRpdGxlOiBwcm9wcy5pdGVtVGl0bGUsXG4gICAgICBkZXNjcmlwdGlvbjogcHJvcHMuZGVzY3JpcHRpb24sXG4gICAgICBkdWVEYXRlOiBwcm9wcy5kdWVEYXRlLFxuICAgICAgcHJpb3JpdHk6IHByb3BzLnByaW9yaXR5LFxuICAgICAgaXNDb21wbGV0ZTogcHJvcHMuaXNDb21wbGV0ZSxcblxuICAgICAgc2VyaWFsaXplOiBzZXJpYWxpemUsXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBjcmVhdGVUb2RvSXRlbTtcbn0pKCk7XG4iLCJleHBvcnQgeyBtYWluVmlldywgSU1haW5WaWV3IH0gZnJvbSBcIi4vbWFpblZpZXcuanNcIjtcbmV4cG9ydCB7IHNpZGViYXJWaWV3LCBJU2lkZWJhclZpZXcgfSBmcm9tIFwiLi9zaWRlYmFyVmlldy5qc1wiO1xuIiwiaW1wb3J0IHtcbiAgSVByb2plY3QsXG4gIFRvZG9JdGVtUHJvcHMsXG4gIElUb2RvSXRlbSxcbiAgUHJpb3JpdHksXG59IGZyb20gXCIuLi9tb2RlbHMvaW5kZXguanNcIjtcbmltcG9ydCB7XG4gIF9jcmVhdGVFbGVtZW50LFxuICBfdmVyaWZ5Tm90TnVsbCxcbiAgaWdub3JlRW50ZXJDYWxsYmFjayxcbn0gZnJvbSBcIi4vdXRpbHMuanNcIjtcblxuaW1wb3J0IFRyYXNoSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL3RyYXNoLWNhbi1vdXRsaW5lLnN2Z1wiO1xuaW1wb3J0IFBsdXNJbWFnZSBmcm9tIFwiLi9pbWFnZXMvcGx1cy5zdmdcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJTWFpblZpZXcge1xuICBkaXNwbGF5VG9kb0l0ZW1zKHByb2plY3Q6IElQcm9qZWN0IHwgbnVsbCk6IHZvaWQ7XG4gIGJpbmRDcmVhdGVUb2RvKGNiOiAodG9kb1Byb3BzOiBUb2RvSXRlbVByb3BzKSA9PiB2b2lkKTogdm9pZDtcbiAgYmluZFJlYWRUb2RvKFxuICAgIHJlYWRDYjogSVByb2plY3RbXCJyZWFkVG9kb0l0ZW1cIl0sXG4gICAgdXBkYXRlQ2I6IElQcm9qZWN0W1widXBkYXRlVG9kb0l0ZW1cIl0sXG4gICAgZGVsZXRlQ2I6IElQcm9qZWN0W1wiZGVsZXRlVG9kb0l0ZW1cIl1cbiAgKTogdm9pZDtcbn1cblxuZXhwb3J0IGNvbnN0IG1haW5WaWV3ID0gKGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbWFpbkVsZW1lbnQgPSBfdmVyaWZ5Tm90TnVsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwibWFpblwiKSk7XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZVRvZG9Db2x1bW5FbGVtZW50KFxuICAgIGRhdGVTdHJpbmc6IHN0cmluZyxcbiAgICB0b2RvSXRlbXM6IElUb2RvSXRlbVtdXG4gICk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCB0b2RvQ29sdW1uID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widG9kby1jb2x1bW5cIl0pO1xuICAgIGNvbnN0IGRhdGVIMyA9IF9jcmVhdGVFbGVtZW50KFwiaDNcIiwgW1widG9kby1kYXRlXCJdKTtcbiAgICBkYXRlSDMuaW5uZXJUZXh0ID0gZGF0ZVN0cmluZztcblxuICAgIGNvbnN0IHRvZG9FbGVtZW50cyA9IHRvZG9JdGVtcy5tYXAoKHRvZG9JdGVtKSA9PiB7XG4gICAgICBjb25zdCB0b2RvRWxlbWVudCA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInRvZG8tc21hbGxcIl0pO1xuICAgICAgdG9kb0VsZW1lbnQuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCB0b2RvSXRlbS5pdGVtSWQudG9TdHJpbmcoKSk7XG4gICAgICB0b2RvRWxlbWVudC5zZXRBdHRyaWJ1dGUoXG4gICAgICAgIFwiZGF0YS1kb25lXCIsXG4gICAgICAgIHRvZG9JdGVtLmlzQ29tcGxldGUgPyBcInRydWVcIiA6IFwiZmFsc2VcIlxuICAgICAgKTtcbiAgICAgIHRvZG9FbGVtZW50LnNldEF0dHJpYnV0ZShcbiAgICAgICAgXCJkYXRhLXByaW9yaXR5XCIsXG4gICAgICAgIHRvZG9JdGVtLnByaW9yaXR5LnZhbHVlT2YoKS50b1N0cmluZygpXG4gICAgICApO1xuXG4gICAgICBjb25zdCB0b2RvVGl0bGUgPSBfY3JlYXRlRWxlbWVudChcInNwYW5cIiwgW1widG9kby10aXRsZVwiXSk7XG4gICAgICB0b2RvVGl0bGUuaW5uZXJUZXh0ID0gdG9kb0l0ZW0uaXRlbVRpdGxlO1xuXG4gICAgICB0b2RvRWxlbWVudC5hcHBlbmQodG9kb1RpdGxlKTtcbiAgICAgIHJldHVybiB0b2RvRWxlbWVudDtcbiAgICB9KTtcbiAgICBjb25zdCB0b2RvSXRlbXNFbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1widG9kby1pdGVtcy1zbWFsbFwiXSk7XG4gICAgdG9kb0l0ZW1zRWxlbWVudC5hcHBlbmQoLi4udG9kb0VsZW1lbnRzKTtcblxuICAgIHRvZG9Db2x1bW4uYXBwZW5kKGRhdGVIMywgdG9kb0l0ZW1zRWxlbWVudCk7XG4gICAgcmV0dXJuIHRvZG9Db2x1bW47XG4gIH1cblxuICBmdW5jdGlvbiBkaXNwbGF5VG9kb0l0ZW1zKHByb2plY3Q6IElQcm9qZWN0IHwgbnVsbCkge1xuICAgIG1haW5FbGVtZW50LmlubmVySFRNTCA9IFwiXCI7XG4gICAgaWYgKHByb2plY3QgPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBtYWluSGVhZGluZyA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInByb2plY3QtaGVhZGluZ1wiXSk7XG5cbiAgICBjb25zdCBwcm9qZWN0VGl0bGVFbGVtZW50ID0gX2NyZWF0ZUVsZW1lbnQoXCJoMlwiLCBbXCJwcm9qZWN0LXRpdGxlXCJdKTtcbiAgICBwcm9qZWN0VGl0bGVFbGVtZW50LmlubmVyVGV4dCA9IHByb2plY3QucHJvamVjdFRpdGxlO1xuXG4gICAgY29uc3QgYWRkVG9kb0J1dHRvbiA9IF9jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcImFkZC10b2RvLWJ1dHRvblwiXSk7XG4gICAgYWRkVG9kb0J1dHRvbi5pbm5lckhUTUwgPSBQbHVzSW1hZ2U7XG4gICAgY29uc3QgYWRkVG9kb1RleHQgPSBfY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgYWRkVG9kb1RleHQuaW5uZXJUZXh0ID0gXCJOZXcgdGlja2V0XCI7XG4gICAgYWRkVG9kb0J1dHRvbi5hcHBlbmRDaGlsZChhZGRUb2RvVGV4dCk7XG5cbiAgICBtYWluSGVhZGluZy5hcHBlbmQocHJvamVjdFRpdGxlRWxlbWVudCwgYWRkVG9kb0J1dHRvbik7XG5cbiAgICBjb25zdCBUb2RvQ29sbGVjdGlvbkVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ0b2RvLWNvbGxlY3Rpb25cIl0pO1xuXG4gICAgLy8gc29ydCB0b2RvIGl0ZW1zIGluIHByb2plY3QgYnkgZGF0ZSwgYXNjZW5kaW5nLiBUaGlzIGVuc3VyZXMgbWFwIGluc2VydGlvbiBvcmRlciBpcyBhc2NlbmRpbmcgYnkgZGF0ZS5cbiAgICBjb25zdCBzb3J0ZWRUb2RvSXRlbXMgPSBbLi4ucHJvamVjdC50b2RvSXRlbXNdLnNvcnQoXG4gICAgICAoYSwgYikgPT4gYS5kdWVEYXRlLnZhbHVlT2YoKSAtIGIuZHVlRGF0ZS52YWx1ZU9mKClcbiAgICApO1xuXG4gICAgLy8gbWFrZSBhICdjb2x1bW4nIHBlciBkYXkgd2l0aCB0b2RvIGl0ZW1zXG4gICAgY29uc3QgZGF5TWFwOiBNYXA8c3RyaW5nLCBJVG9kb0l0ZW1bXT4gPSBuZXcgTWFwKCk7XG4gICAgZm9yIChjb25zdCB0b2RvSXRlbSBvZiBzb3J0ZWRUb2RvSXRlbXMpIHtcbiAgICAgIGlmICghZGF5TWFwLmdldCh0b2RvSXRlbS5kdWVEYXRlLnRvRGF0ZVN0cmluZygpKSkge1xuICAgICAgICBkYXlNYXAuc2V0KHRvZG9JdGVtLmR1ZURhdGUudG9EYXRlU3RyaW5nKCksIFtdKTtcbiAgICAgIH1cbiAgICAgIGRheU1hcC5nZXQodG9kb0l0ZW0uZHVlRGF0ZS50b0RhdGVTdHJpbmcoKSk/LnB1c2godG9kb0l0ZW0pO1xuICAgIH1cblxuICAgIGNvbnN0IHRvZG9Db2x1bW5FbGVtZW50czogSFRNTEVsZW1lbnRbXSA9IFtdO1xuICAgIGZvciAoY29uc3QgW2RhdGVTdHJpbmcsIHRvZG9JdGVtc10gb2YgZGF5TWFwKSB7XG4gICAgICBjb25zdCBwcmlvcml0eVNvcnRlZEl0ZW1zID0gdG9kb0l0ZW1zXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eSlcbiAgICAgICAgLnJldmVyc2UoKTtcbiAgICAgIHRvZG9Db2x1bW5FbGVtZW50cy5wdXNoKFxuICAgICAgICBfY3JlYXRlVG9kb0NvbHVtbkVsZW1lbnQoZGF0ZVN0cmluZywgcHJpb3JpdHlTb3J0ZWRJdGVtcylcbiAgICAgICk7XG4gICAgfVxuXG4gICAgVG9kb0NvbGxlY3Rpb25FbGVtZW50LmFwcGVuZCguLi50b2RvQ29sdW1uRWxlbWVudHMpO1xuXG4gICAgbWFpbkVsZW1lbnQuYXBwZW5kKG1haW5IZWFkaW5nLCBUb2RvQ29sbGVjdGlvbkVsZW1lbnQpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUFkZFRvZG9Gb3JtKFxuICAgIGNiOiAodG9kb1Byb3BzOiBUb2RvSXRlbVByb3BzKSA9PiB2b2lkXG4gICk6IEhUTUxGb3JtRWxlbWVudCB7XG4gICAgY29uc3QgZm9ybSA9IF9jcmVhdGVFbGVtZW50KFwiZm9ybVwiLCBbXCJhZGQtdG9kby1mb3JtXCJdKTtcblxuICAgIGNvbnN0IGZvcm1DZW50ZXIgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJmb3JtLWJvZHlcIl0pO1xuXG4gICAgY29uc3QgdGl0bGVGb3JtRWxlbWVudFdyYXBwZXIgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICBcImZvcm0tZWxlbWVudC13cmFwcGVyXCIsXG4gICAgXSk7XG5cbiAgICBjb25zdCB0aXRsZUxhYmVsID0gX2NyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICB0aXRsZUxhYmVsLmlubmVyVGV4dCA9IFwiVGl0bGU6XCI7XG4gICAgdGl0bGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvX3RpdGxlXCIpO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gX2NyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvX3RpdGxlXCIpO1xuICAgIHRvZG9UaXRsZS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICB0b2RvVGl0bGUuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRpdGxlXCIpO1xuXG4gICAgdGl0bGVGb3JtRWxlbWVudFdyYXBwZXIuYXBwZW5kKHRpdGxlTGFiZWwsIHRvZG9UaXRsZSk7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbkZvcm1FbGVtZW50V3JhcHBlciA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcbiAgICAgIFwiZm9ybS1lbGVtZW50LXdyYXBwZXJcIixcbiAgICBdKTtcblxuICAgIGNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBfY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGRlc2NyaXB0aW9uTGFiZWwuaW5uZXJUZXh0ID0gXCJEZXNjcmlwdGlvbjpcIjtcbiAgICBkZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9fZGVzY3JpcHRpb25cIik7XG5cbiAgICBjb25zdCBkZXNjcmlwdGlvbklucHV0ID0gX2NyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb19kZXNjcmlwdGlvblwiKTtcbiAgICBkZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpO1xuICAgIGRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG5cbiAgICBkZXNjcmlwdGlvbkZvcm1FbGVtZW50V3JhcHBlci5hcHBlbmQoZGVzY3JpcHRpb25MYWJlbCwgZGVzY3JpcHRpb25JbnB1dCk7XG5cbiAgICBjb25zdCBkdWVEYXRlRm9ybUVsZW1lbnRXcmFwcGVyID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1xuICAgICAgXCJmb3JtLWVsZW1lbnQtd3JhcHBlclwiLFxuICAgIF0pO1xuXG4gICAgY29uc3QgZHVlRGF0ZUxhYmVsID0gX2NyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBkdWVEYXRlTGFiZWwuaW5uZXJUZXh0ID0gXCJEdWUgYXQ6XCI7XG4gICAgZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9fZHVlX2RhdGVcIik7XG5cbiAgICBjb25zdCBkdWVEYXRlSW5wdXQgPSBfY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvX2R1ZV9kYXRlXCIpO1xuICAgIGR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKTtcbiAgICBkdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImR1ZV9kYXRlXCIpO1xuXG4gICAgZHVlRGF0ZUZvcm1FbGVtZW50V3JhcHBlci5hcHBlbmQoZHVlRGF0ZUxhYmVsLCBkdWVEYXRlSW5wdXQpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlGb3JtRWxlbWVudFdyYXBwZXIgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICBcImZvcm0tZWxlbWVudC13cmFwcGVyXCIsXG4gICAgXSk7XG5cbiAgICBjb25zdCBwcmlvcml0eUxhYmVsID0gX2NyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBwcmlvcml0eUxhYmVsLmlubmVyVGV4dCA9IFwiUHJpb3JpdHk6XCI7XG4gICAgcHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0b2RvX3ByaW9yaXR5XCIpO1xuXG4gICAgY29uc3QgcHJpb3JpdHlJbnB1dCA9IF9jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvX3ByaW9yaXR5XCIpO1xuICAgIHByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwicmVxdWlyZWRcIiwgXCJcIik7XG4gICAgcHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJpb3JpdHlcIik7XG5cbiAgICBjb25zdCBsb3dQcmlvcml0eU9wdGlvbiA9IF9jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIGxvd1ByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTG93XCIpO1xuICAgIGxvd1ByaW9yaXR5T3B0aW9uLmlubmVyVGV4dCA9IFwiTG93XCI7XG5cbiAgICBjb25zdCBtZWRpdW1Qcmlvcml0eU9wdGlvbiA9IF9jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG1lZGl1bVByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiTWVkaXVtXCIpO1xuICAgIG1lZGl1bVByaW9yaXR5T3B0aW9uLmlubmVyVGV4dCA9IFwiTWVkaXVtXCI7XG5cbiAgICBjb25zdCBoaWdoUHJpb3JpdHlPcHRpb24gPSBfY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBoaWdoUHJpb3JpdHlPcHRpb24uc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJIaWdoXCIpO1xuICAgIGhpZ2hQcmlvcml0eU9wdGlvbi5pbm5lclRleHQgPSBcIkhpZ2hcIjtcblxuICAgIGNvbnN0IGNyaXRpY2FsUHJpb3JpdHlPcHRpb24gPSBfY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBjcml0aWNhbFByaW9yaXR5T3B0aW9uLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiQ3JpdGljYWxcIik7XG4gICAgY3JpdGljYWxQcmlvcml0eU9wdGlvbi5pbm5lclRleHQgPSBcIkNyaXRpY2FsXCI7XG5cbiAgICBwcmlvcml0eUlucHV0LmFwcGVuZChcbiAgICAgIGxvd1ByaW9yaXR5T3B0aW9uLFxuICAgICAgbWVkaXVtUHJpb3JpdHlPcHRpb24sXG4gICAgICBoaWdoUHJpb3JpdHlPcHRpb24sXG4gICAgICBjcml0aWNhbFByaW9yaXR5T3B0aW9uXG4gICAgKTtcblxuICAgIHByaW9yaXR5Rm9ybUVsZW1lbnRXcmFwcGVyLmFwcGVuZChwcmlvcml0eUxhYmVsLCBwcmlvcml0eUlucHV0KTtcblxuICAgIGNvbnN0IGlzQ29tcGxldGVGb3JtRWxlbWVudFdyYXBwZXIgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXG4gICAgICBcImZvcm0tZWxlbWVudC13cmFwcGVyXCIsXG4gICAgXSk7XG5cbiAgICBjb25zdCBpc0NvbXBsZXRlTGFiZWwgPSBfY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGlzQ29tcGxldGVMYWJlbC5pbm5lclRleHQgPSBcIkRvbmU/XCI7XG4gICAgaXNDb21wbGV0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRvZG9faXNfY29tcGxldGVcIik7XG5cbiAgICBjb25zdCBpc0NvbXBsZXRlSW5wdXQgPSBfY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlzQ29tcGxldGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgaXNDb21wbGV0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kb19pc19jb21wbGV0ZVwiKTtcbiAgICBpc0NvbXBsZXRlSW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcImlzX2NvbXBsZXRlXCIpO1xuXG4gICAgaXNDb21wbGV0ZUZvcm1FbGVtZW50V3JhcHBlci5hcHBlbmQoaXNDb21wbGV0ZUxhYmVsLCBpc0NvbXBsZXRlSW5wdXQpO1xuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gX2NyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiYWRkLXRvZG8tc3VibWl0LWJ1dHRvblwiXSk7XG4gICAgc3VibWl0QnV0dG9uLmlubmVyVGV4dCA9IFwiQWRkXCI7XG5cbiAgICBmb3JtQ2VudGVyLmFwcGVuZChcbiAgICAgIHRpdGxlRm9ybUVsZW1lbnRXcmFwcGVyLFxuICAgICAgZGVzY3JpcHRpb25Gb3JtRWxlbWVudFdyYXBwZXIsXG4gICAgICBkdWVEYXRlRm9ybUVsZW1lbnRXcmFwcGVyLFxuICAgICAgcHJpb3JpdHlGb3JtRWxlbWVudFdyYXBwZXIsXG4gICAgICBpc0NvbXBsZXRlRm9ybUVsZW1lbnRXcmFwcGVyLFxuICAgICAgc3VibWl0QnV0dG9uXG4gICAgKTtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZm9ybUNlbnRlcik7XG5cbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZS50YXJnZXQgYXMgSFRNTEZvcm1FbGVtZW50KTtcblxuICAgICAgY29uc3QgW2l0ZW1UaXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBpc0NvbXBsZXRlXSA9IFtcbiAgICAgICAgZm9ybURhdGEuZ2V0KFwidGl0bGVcIikgYXMgc3RyaW5nLFxuICAgICAgICBmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcsXG4gICAgICAgIG5ldyBEYXRlKGZvcm1EYXRhLmdldChcImR1ZV9kYXRlXCIpIGFzIHN0cmluZyksXG4gICAgICAgIFByaW9yaXR5W1xuICAgICAgICAgIGZvcm1EYXRhLmdldChcInByaW9yaXR5XCIpIGFzIFwiTG93XCIgfCBcIk1lZGl1bVwiIHwgXCJIaWdoXCIgfCBcIkNyaXRpY2FsXCJcbiAgICAgICAgXSxcbiAgICAgICAgKGZvcm1EYXRhLmdldChcImlzX2NvbXBsZXRlXCIpIGFzIHN0cmluZykgPT09IFwib25cIixcbiAgICAgIF07XG5cbiAgICAgIGNiKHsgaXRlbVRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIGlzQ29tcGxldGUgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZm9ybTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmRDcmVhdGVUb2RvKGNiOiAodG9kb1Byb3BzOiBUb2RvSXRlbVByb3BzKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgbWFpbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChjbGlja0V2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjbGlja1RhcmdldCA9IGNsaWNrRXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKFxuICAgICAgICBjbGlja1RhcmdldCAmJlxuICAgICAgICBjbGlja1RhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiZcbiAgICAgICAgY2xpY2tUYXJnZXQuY2xvc2VzdChcIi5hZGQtdG9kby1idXR0b25cIilcbiAgICAgICkge1xuICAgICAgICAvLyBtYWtlIGZvcm0sIGFkZCBldmVudCBsaXN0ZW5lciBvbiBzdWJtaXQgb2YgdGhhdCB0byBpbnZva2UgbW9kZWwncyBjcmVhdGVUb2RvIHVzaW5nIHN1Ym1pdHRlZCBmb3JtIGluZm9ybWF0aW9uXG4gICAgICAgIGNvbnN0IGZvcm0gPSBfY3JlYXRlQWRkVG9kb0Zvcm0oY2IpO1xuICAgICAgICBjb25zdCBmb3JtV3JhcHBlciA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImZvcm0tYmFja2dyb3VuZFwiXSk7XG4gICAgICAgIGZvcm1XcmFwcGVyLmFwcGVuZChmb3JtKTtcblxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKCkgPT4ge1xuICAgICAgICAgIGZvcm1XcmFwcGVyLnJlbW92ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBkZWZpbmUgc2VwYXJhdGVseSBzbyBJIGNhbiBjYWxsIGl0IHJlY3Vyc2l2ZWx5LiBmdW5jdGlvbiBleHByZXNzaW9uIGluc3RlYWQgb2YgZGVjbGFyYXRpb25cbiAgICAgICAgLy8gZm9yIGVzbGludCByZWFzb25zXG4gICAgICAgIGNvbnN0IGNsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIChjbGlja0V2ZW50OiBNb3VzZUV2ZW50KSB7XG4gICAgICAgICAgY29uc3QgY2xpY2tUYXJnZXQgPSBjbGlja0V2ZW50LnRhcmdldDtcbiAgICAgICAgICBpZiAoXG4gICAgICAgICAgICBjbGlja1RhcmdldCAmJlxuICAgICAgICAgICAgY2xpY2tUYXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50ICYmXG4gICAgICAgICAgICAhY2xpY2tUYXJnZXQuY2xvc2VzdChcIi5hZGQtdG9kby1mb3JtXCIpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBmb3JtV3JhcHBlci5yZW1vdmUoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzZXRUaW1lb3V0IHNvIHRoYXQgdGhlIGZpcnN0IGNsaWNrIChvbiB0aGUgYWRkIFRvZG8gYnV0dG9uKSBkb2Vzbid0IHJ1biB0aGUgaGFuZGxlclxuICAgICAgICBzZXRUaW1lb3V0KFxuICAgICAgICAgICgpID0+XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyLCB7IG9uY2U6IHRydWUgfSksXG4gICAgICAgICAgMFxuICAgICAgICApO1xuXG4gICAgICAgIG1haW5FbGVtZW50LmFwcGVuZChmb3JtV3JhcHBlcik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBfY3JlYXRlUmVhZFRvZG9WaWV3KFxuICAgIHRvZG9JdGVtOiBJVG9kb0l0ZW0sXG4gICAgZGVsZXRlQ2I6IElQcm9qZWN0W1wiZGVsZXRlVG9kb0l0ZW1cIl1cbiAgKToge1xuICAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xuICAgIGdldERhdGE6ICgpID0+IFRvZG9JdGVtUHJvcHM7XG4gIH0ge1xuICAgIC8vIHByZXNlbnRzIGRhdGEgZnJvbSB0b2RvSXRlbS4gZWFjaCBmaWVsZCBoYXMgYSBjbGlja2hhbmRsZXIgdG8gZWRpdCB0aGUgdmFsdWUgKGZvciB0ZXh0IGZpZWxkcyBqdXN0IG1ha2UgY29udGVudGVkaXRhYmxlLFxuICAgIC8vIGZvciBkdWVEYXRlIGhhdmUgdG8gc3dhcCBpdCBvdXQgZm9yIHRoZSBmb3JtIGVsZW1lbnQgZGF0ZXBpY2tlcilcbiAgICBjb25zdCB0b2RvSXRlbUVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJ0b2RvLWl0ZW1cIl0pO1xuXG4gICAgY29uc3QgdG9kb1RpdGxlID0gX2NyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcInRvZG8tcmVhZC10aXRsZVwiXSk7XG4gICAgdG9kb1RpdGxlLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCBpZ25vcmVFbnRlckNhbGxiYWNrKTtcblxuICAgIHRvZG9UaXRsZS5pbm5lclRleHQgPSB0b2RvSXRlbS5pdGVtVGl0bGU7XG5cbiAgICBjb25zdCB0b2RvRGVsZXRlID0gX2NyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1widG9kby1kZWxldGVcIl0pO1xuICAgIHRvZG9EZWxldGUuaW5uZXJIVE1MID0gVHJhc2hJbWFnZTtcbiAgICB0b2RvRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBkZWxldGVDYih0b2RvSXRlbS5pdGVtSWQpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9kb0Rlc2NyaXB0aW9uID0gX2NyZWF0ZUVsZW1lbnQoXCJwXCIsIFtcInRvZG8tZGVzY3JpcHRpb25cIl0pO1xuICAgIHRvZG9EZXNjcmlwdGlvbi5pbm5lclRleHQgPSB0b2RvSXRlbS5kZXNjcmlwdGlvbjtcblxuICAgIFt0b2RvVGl0bGUsIHRvZG9EZXNjcmlwdGlvbl0uZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICBpZiAoZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIikpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJcIik7XG4gICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcblxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgXCJmb2N1c291dFwiLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5V3JhcHBlciA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcInRvZG8tcHJpb3JpdHlcIl0pO1xuICAgIGNvbnN0IGxlZnRDaGV2cm9uID0gX2NyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxlZnRDaGV2cm9uLmlubmVyVGV4dCA9IFwiPFwiO1xuXG4gICAgY29uc3QgdG9kb1ByaW9yaXR5ID0gX2NyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIGxldCBjdXJyZW50UHJpb3JpdHkgPSB0b2RvSXRlbS5wcmlvcml0eS52YWx1ZU9mKCk7XG4gICAgdG9kb1ByaW9yaXR5LmlubmVyVGV4dCA9IFByaW9yaXR5W2N1cnJlbnRQcmlvcml0eV07XG5cbiAgICBjb25zdCByaWdodENoZXZyb24gPSBfY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gICAgcmlnaHRDaGV2cm9uLmlubmVyVGV4dCA9IFwiPlwiO1xuXG4gICAgW1tsZWZ0Q2hldnJvbiwgLTFdIGFzIGNvbnN0LCBbcmlnaHRDaGV2cm9uLCAxXSBhcyBjb25zdF0uZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgY29uc3QgW2VsZW1lbnQsIHRyYW5zZm9ybWF0aW9uXSA9IGU7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGN1cnJlbnRQcmlvcml0eSA9IE1hdGgubWF4KFxuICAgICAgICAgIE1hdGgubWluKGN1cnJlbnRQcmlvcml0eSArIHRyYW5zZm9ybWF0aW9uLCAzKSxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICAgIHRvZG9Qcmlvcml0eS5pbm5lclRleHQgPSBQcmlvcml0eVtjdXJyZW50UHJpb3JpdHldO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgdG9kb1ByaW9yaXR5V3JhcHBlci5hcHBlbmQobGVmdENoZXZyb24sIHRvZG9Qcmlvcml0eSwgcmlnaHRDaGV2cm9uKTtcblxuICAgIGNvbnN0IHRvZG9EdWVEYXRlID0gX2NyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBbXCJ0b2RvLWR1ZS1kYXRlXCJdKTtcbiAgICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICB0b2RvRHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXG4gICAgICBcInZhbHVlXCIsXG4gICAgICB0b2RvSXRlbS5kdWVEYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gICAgKTtcblxuICAgIGNvbnN0IHRvZG9Jc0NvbXBsZXRlID0gX2NyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBbXCJ0b2RvLWlzLWNvbXBsZXRlXCJdKTtcbiAgICB0b2RvSXNDb21wbGV0ZS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG4gICAgaWYgKHRvZG9JdGVtLmlzQ29tcGxldGUpIHtcbiAgICAgIHRvZG9Jc0NvbXBsZXRlLnNldEF0dHJpYnV0ZShcImNoZWNrZWRcIiwgXCJ0cnVlXCIpO1xuICAgIH1cblxuICAgIHRvZG9JdGVtRWxlbWVudC5hcHBlbmQoXG4gICAgICB0b2RvVGl0bGUsXG4gICAgICB0b2RvRGVsZXRlLFxuICAgICAgdG9kb0Rlc2NyaXB0aW9uLFxuICAgICAgdG9kb1ByaW9yaXR5V3JhcHBlcixcbiAgICAgIHRvZG9EdWVEYXRlLFxuICAgICAgdG9kb0lzQ29tcGxldGVcbiAgICApO1xuXG4gICAgZnVuY3Rpb24gZ2V0UHJvcHMoKTogVG9kb0l0ZW1Qcm9wcyB7XG4gICAgICBjb25zb2xlLmxvZyh0b2RvRHVlRGF0ZSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpdGVtVGl0bGU6IHRvZG9UaXRsZS5pbm5lclRleHQsXG4gICAgICAgIGRlc2NyaXB0aW9uOiB0b2RvRGVzY3JpcHRpb24uaW5uZXJUZXh0LFxuICAgICAgICBkdWVEYXRlOiBuZXcgRGF0ZSh0b2RvRHVlRGF0ZS52YWx1ZSksXG4gICAgICAgIHByaW9yaXR5OiBjdXJyZW50UHJpb3JpdHksXG4gICAgICAgIGlzQ29tcGxldGU6IHRvZG9Jc0NvbXBsZXRlLmNoZWNrZWQsXG4gICAgICB9O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICBlbGVtZW50OiB0b2RvSXRlbUVsZW1lbnQsXG4gICAgICBnZXREYXRhOiBnZXRQcm9wcyxcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gYmluZFJlYWRUb2RvKFxuICAgIHJlYWRDYjogSVByb2plY3RbXCJyZWFkVG9kb0l0ZW1cIl0sXG4gICAgdXBkYXRlQ2I6IElQcm9qZWN0W1widXBkYXRlVG9kb0l0ZW1cIl0sXG4gICAgZGVsZXRlQ2I6IElQcm9qZWN0W1wiZGVsZXRlVG9kb0l0ZW1cIl1cbiAgKTogdm9pZCB7XG4gICAgbWFpbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChjbGlja0V2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjbGlja1RhcmdldCA9IGNsaWNrRXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKFxuICAgICAgICBjbGlja1RhcmdldCAmJlxuICAgICAgICBjbGlja1RhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiZcbiAgICAgICAgY2xpY2tUYXJnZXQuY2xvc2VzdChcIi50b2RvLXNtYWxsXCIpICYmXG4gICAgICAgICFjbGlja1RhcmdldC5jbG9zZXN0KFwiLnRvZG8tZG9uZVwiKVxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHRvZG9JdGVtRWxlbWVudCA9IGNsaWNrVGFyZ2V0LmNsb3Nlc3QoXCIudG9kby1zbWFsbFwiKSBhcyBFbGVtZW50O1xuICAgICAgICBjb25zdCB0b2RvSW5kZXggPSBwYXJzZUludChcbiAgICAgICAgICBfdmVyaWZ5Tm90TnVsbCh0b2RvSXRlbUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiKSlcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgdG9kb0l0ZW0gPSByZWFkQ2IodG9kb0luZGV4KSBhcyBJVG9kb0l0ZW07XG5cbiAgICAgICAgY29uc3QgeyBlbGVtZW50LCBnZXREYXRhIH0gPSBfY3JlYXRlUmVhZFRvZG9WaWV3KHRvZG9JdGVtLCBkZWxldGVDYik7XG5cbiAgICAgICAgY29uc3Qgd3JhcHBlciA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIsIFtcImZvcm0tYmFja2dyb3VuZFwiXSk7XG4gICAgICAgIHdyYXBwZXIuYXBwZW5kKGVsZW1lbnQpO1xuXG4gICAgICAgIG1haW5FbGVtZW50LmFwcGVuZCh3cmFwcGVyKTtcblxuICAgICAgICBjb25zdCBjbGlja0hhbmRsZXIgPSBmdW5jdGlvbiAoY2xpY2tFdmVudDogTW91c2VFdmVudCkge1xuICAgICAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gY2xpY2tFdmVudC50YXJnZXQ7XG4gICAgICAgICAgaWYgKFxuICAgICAgICAgICAgY2xpY2tUYXJnZXQgJiZcbiAgICAgICAgICAgIGNsaWNrVGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCAmJlxuICAgICAgICAgICAgIWNsaWNrVGFyZ2V0LmNsb3Nlc3QoXCIudG9kby1pdGVtXCIpXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGdldERhdGEoKTtcbiAgICAgICAgICAgIHVwZGF0ZUNiKHRvZG9JbmRleCwgcHJvcHMpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgKCkgPT5cbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBjbGlja0hhbmRsZXIsIHsgb25jZTogdHJ1ZSB9KSxcbiAgICAgICAgICAwXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGRpc3BsYXlUb2RvSXRlbXM6IGRpc3BsYXlUb2RvSXRlbXMsXG4gICAgYmluZENyZWF0ZVRvZG86IGJpbmRDcmVhdGVUb2RvLFxuICAgIGJpbmRSZWFkVG9kbzogYmluZFJlYWRUb2RvLFxuICB9O1xufSkoKTtcbiIsImltcG9ydCB7IElNb2RlbCwgSVByb2plY3QsIFByb2plY3RQcm9wcyB9IGZyb20gXCIuLi9tb2RlbHMvaW5kZXguanNcIjtcbmltcG9ydCB7XG4gIF9jcmVhdGVFbGVtZW50LFxuICBfdmVyaWZ5Tm90TnVsbCxcbiAgaWdub3JlRW50ZXJDYWxsYmFjayxcbn0gZnJvbSBcIi4vdXRpbHMuanNcIjtcblxuaW1wb3J0IEVkaXRJbWFnZSBmcm9tIFwiLi9pbWFnZXMvcGVuY2lsLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgUmVtb3ZlSW1hZ2UgZnJvbSBcIi4vaW1hZ2VzL2Nsb3NlLW91dGxpbmUuc3ZnXCI7XG5pbXBvcnQgTm90ZUltYWdlIGZyb20gXCIuL2ltYWdlcy9ub3RlLW91dGxpbmUuc3ZnXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSVNpZGViYXJWaWV3IHtcbiAgYmluZENyZWF0ZVByb2plY3QoY2I6IElNb2RlbFtcImNyZWF0ZVByb2plY3RcIl0pOiB2b2lkO1xuICBiaW5kUmVhZFByb2plY3QoY2I6IElNb2RlbFtcInJlYWRQcm9qZWN0XCJdKTogdm9pZDtcbiAgYmluZFVwZGF0ZVByb2plY3QoY2I6IElNb2RlbFtcInVwZGF0ZVByb2plY3RUaXRsZVwiXSk6IHZvaWQ7XG4gIGJpbmREZWxldGVQcm9qZWN0KGNiOiBJTW9kZWxbXCJkZWxldGVQcm9qZWN0XCJdKTogdm9pZDtcblxuICBkaXNwbGF5UHJvamVjdHMocHJvamVjdHM6IElQcm9qZWN0W10pOiB2b2lkO1xufVxuXG5leHBvcnQgY29uc3Qgc2lkZWJhclZpZXcgPSAoZnVuY3Rpb24gKCk6IElTaWRlYmFyVmlldyB7XG4gIGNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IF92ZXJpZnlOb3ROdWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdHNcIikpO1xuXG4gIGZ1bmN0aW9uIF9jcmVhdGVQcm9qZWN0RWxlbWVudChwcm9qZWN0OiBJUHJvamVjdCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gX2NyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgW1wicHJvamVjdFwiXSk7XG4gICAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIHByb2plY3QucHJvamVjdElkLnRvU3RyaW5nKCkpO1xuXG4gICAgY29uc3QgZWRpdEJ1dHRvbiA9IF9jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIsIFtcImVkaXQtcHJvamVjdC1idXR0b25cIl0pO1xuICAgIGVkaXRCdXR0b24uaW5uZXJIVE1MID0gRWRpdEltYWdlO1xuXG4gICAgY29uc3QgcHJvamVjdFRpdGxlID0gX2NyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFtcbiAgICAgIFwiZmxleC1ncm93XCIsXG4gICAgICBcInByb2plY3QtdGl0bGUtc2lkZWJhclwiLFxuICAgIF0pO1xuICAgIHByb2plY3RUaXRsZS5pbm5lclRleHQgPSBwcm9qZWN0LnByb2plY3RUaXRsZTtcblxuICAgIGNvbnN0IHByb2plY3RUb2RvQ291bnQgPSBfY3JlYXRlRWxlbWVudChcImRpdlwiLCBbXCJwcm9qZWN0LXRvZG8tY291bnRcIl0pO1xuXG4gICAgY29uc3QgcHJvamVjdE5yID0gX2NyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICAgIHByb2plY3ROci5pbm5lclRleHQgPSBwcm9qZWN0LnRvZG9JdGVtcy5sZW5ndGgudG9TdHJpbmcoKTtcblxuICAgIGNvbnN0IHByb2plY3RJbWFnZSA9IF9jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RJbWFnZS5pbm5lckhUTUwgPSBOb3RlSW1hZ2U7XG5cbiAgICBwcm9qZWN0VG9kb0NvdW50LmFwcGVuZChwcm9qZWN0TnIsIHByb2plY3RJbWFnZSk7XG5cbiAgICBjb25zdCBkZWxldGVCdXR0b24gPSBfY3JlYXRlRWxlbWVudChcImJ1dHRvblwiLCBbXCJkZWxldGUtcHJvamVjdC1idXR0b25cIl0pO1xuICAgIGRlbGV0ZUJ1dHRvbi5pbm5lckhUTUwgPSBSZW1vdmVJbWFnZTtcblxuICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kKFxuICAgICAgZWRpdEJ1dHRvbixcbiAgICAgIHByb2plY3RUaXRsZSxcbiAgICAgIHByb2plY3RUb2RvQ291bnQsXG4gICAgICBkZWxldGVCdXR0b25cbiAgICApO1xuICAgIHJldHVybiBwcm9qZWN0Q29udGFpbmVyO1xuICB9XG5cbiAgZnVuY3Rpb24gX2NyZWF0ZUFkZFByb2plY3RFbGVtZW50KCk6IEhUTUxFbGVtZW50IHtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gX2NyZWF0ZUVsZW1lbnQoXCJidXR0b25cIiwgW1wiYWRkLXByb2plY3QtYnV0dG9uXCJdKTtcbiAgICBhZGRQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9IFwiQWRkIHByb2plY3RcIjtcbiAgICByZXR1cm4gYWRkUHJvamVjdEJ1dHRvbjtcbiAgfVxuXG4gIGZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0cyhwcm9qZWN0czogSVByb2plY3RbXSk6IHZvaWQge1xuICAgIHNpZGViYXJQcm9qZWN0cy5pbm5lckhUTUwgPSBcIlwiO1xuICAgIHNpZGViYXJQcm9qZWN0cy5hcHBlbmQoLi4ucHJvamVjdHMubWFwKF9jcmVhdGVQcm9qZWN0RWxlbWVudCkpO1xuICAgIHNpZGViYXJQcm9qZWN0cy5hcHBlbmRDaGlsZChfY3JlYXRlQWRkUHJvamVjdEVsZW1lbnQoKSk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kQ3JlYXRlUHJvamVjdChjYjogKHByb2plY3RQcm9wczogUHJvamVjdFByb3BzKSA9PiB2b2lkKTogdm9pZCB7XG4gICAgc2lkZWJhclByb2plY3RzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoY2xpY2tFdmVudCkgPT4ge1xuICAgICAgY29uc3QgY2xpY2tUYXJnZXQgPSBjbGlja0V2ZW50LnRhcmdldDtcbiAgICAgIGlmIChcbiAgICAgICAgY2xpY2tUYXJnZXQgJiZcbiAgICAgICAgY2xpY2tUYXJnZXQgaW5zdGFuY2VvZiBFbGVtZW50ICYmXG4gICAgICAgIGNsaWNrVGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFkZC1wcm9qZWN0LWJ1dHRvblwiKVxuICAgICAgKSB7XG4gICAgICAgIGNiKHsgcHJvamVjdFRpdGxlOiBcIk5ldyBwcm9qZWN0XCIsIHRvZG9JdGVtczogW10gfSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kUmVhZFByb2plY3QoY2I6IChwcm9qZWN0SW5kZXg6IG51bWJlcikgPT4gdm9pZCk6IHZvaWQge1xuICAgIHNpZGViYXJQcm9qZWN0cy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGNsaWNrRXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IGNsaWNrVGFyZ2V0ID0gY2xpY2tFdmVudC50YXJnZXQ7XG4gICAgICBpZiAoXG4gICAgICAgIGNsaWNrVGFyZ2V0ICYmXG4gICAgICAgIGNsaWNrVGFyZ2V0IGluc3RhbmNlb2YgRWxlbWVudCAmJlxuICAgICAgICBjbGlja1RhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0LXRpdGxlLXNpZGViYXJcIikgJiZcbiAgICAgICAgIShcImNvbnRlbnRlZGl0YWJsZVwiIGluIGNsaWNrVGFyZ2V0LmF0dHJpYnV0ZXMpXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gX3ZlcmlmeU5vdE51bGwoXG4gICAgICAgICAgX3ZlcmlmeU5vdE51bGwoY2xpY2tUYXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0XCIpKS5nZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcImRhdGEtaW5kZXhcIlxuICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICAgICAgY2IocGFyc2VJbnQocHJvamVjdEluZGV4KSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBiaW5kVXBkYXRlUHJvamVjdChcbiAgICBjYjogKHByb2plY3RJbmRleDogbnVtYmVyLCBwcm9qZWN0VGl0bGU6IHN0cmluZykgPT4gdm9pZFxuICApOiB2b2lkIHtcbiAgICBzaWRlYmFyUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChjbGlja0V2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjbGlja1RhcmdldCA9IGNsaWNrRXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKFxuICAgICAgICBjbGlja1RhcmdldCAmJlxuICAgICAgICBjbGlja1RhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiZcbiAgICAgICAgY2xpY2tUYXJnZXQuY2xvc2VzdChcIi5lZGl0LXByb2plY3QtYnV0dG9uXCIpXG4gICAgICApIHtcbiAgICAgICAgLy8gbWFrZSBwcm9qZWN0IHRpdGxlIGZpZWxkIGVkaXRhYmxlXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBfdmVyaWZ5Tm90TnVsbChjbGlja1RhcmdldC5jbG9zZXN0KFwiLnByb2plY3RcIikpO1xuICAgICAgICBjb25zdCBwcm9qZWN0VGl0bGUgPSBfdmVyaWZ5Tm90TnVsbChcbiAgICAgICAgICBwcm9qZWN0LnF1ZXJ5U2VsZWN0b3I8SFRNTEVsZW1lbnQ+KFwiLnByb2plY3QtdGl0bGUtc2lkZWJhclwiKVxuICAgICAgICApO1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBfdmVyaWZ5Tm90TnVsbChwcm9qZWN0LmdldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIikpO1xuXG4gICAgICAgIHByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJjb250ZW50ZWRpdGFibGVcIiwgXCJ0cnVlXCIpO1xuICAgICAgICBwcm9qZWN0VGl0bGUuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIGlnbm9yZUVudGVyQ2FsbGJhY2spO1xuICAgICAgICBwcm9qZWN0VGl0bGUuZm9jdXMoKTtcblxuICAgICAgICAvLyBhZGQgb25jZS1maXJpbmcgZXZlbnRsaXN0ZW5lciBvbiBmb2N1c291dCBhZnRlciBlZGl0aW5nIHRoYXQgY2FsbHMgdGhlIGNiXG4gICAgICAgIHByb2plY3RUaXRsZS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgIFwiZm9jdXNvdXRcIixcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qZWN0VGl0bGUucmVtb3ZlQXR0cmlidXRlKFwiY29udGVudGVkaXRhYmxlXCIpO1xuICAgICAgICAgICAgY29uc3QgbmV3VGl0bGUgPSBwcm9qZWN0VGl0bGUuaW5uZXJUZXh0O1xuICAgICAgICAgICAgY2IocGFyc2VJbnQocHJvamVjdEluZGV4KSwgbmV3VGl0bGUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBvbmNlOiB0cnVlIH1cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGJpbmREZWxldGVQcm9qZWN0KGNiOiAocHJvamVjdEluZGV4OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICBzaWRlYmFyUHJvamVjdHMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChjbGlja0V2ZW50KSA9PiB7XG4gICAgICBjb25zdCBjbGlja1RhcmdldCA9IGNsaWNrRXZlbnQudGFyZ2V0O1xuICAgICAgaWYgKFxuICAgICAgICBjbGlja1RhcmdldCAmJlxuICAgICAgICBjbGlja1RhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiZcbiAgICAgICAgY2xpY2tUYXJnZXQuY2xvc2VzdChcIi5kZWxldGUtcHJvamVjdC1idXR0b25cIilcbiAgICAgICkge1xuICAgICAgICBjb25zdCBwcm9qZWN0SW5kZXggPSBfdmVyaWZ5Tm90TnVsbChcbiAgICAgICAgICBfdmVyaWZ5Tm90TnVsbChjbGlja1RhcmdldC5jbG9zZXN0KFwiLnByb2plY3RcIikpLmdldEF0dHJpYnV0ZShcbiAgICAgICAgICAgIFwiZGF0YS1pbmRleFwiXG4gICAgICAgICAgKVxuICAgICAgICApO1xuICAgICAgICBjYihwYXJzZUludChwcm9qZWN0SW5kZXgpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgYmluZENyZWF0ZVByb2plY3Q6IGJpbmRDcmVhdGVQcm9qZWN0LFxuICAgIGJpbmRSZWFkUHJvamVjdDogYmluZFJlYWRQcm9qZWN0LFxuICAgIGJpbmRVcGRhdGVQcm9qZWN0OiBiaW5kVXBkYXRlUHJvamVjdCxcbiAgICBiaW5kRGVsZXRlUHJvamVjdDogYmluZERlbGV0ZVByb2plY3QsXG4gICAgZGlzcGxheVByb2plY3RzOiBkaXNwbGF5UHJvamVjdHMsXG4gIH07XG59KSgpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIF92ZXJpZnlOb3ROdWxsPFQ+KHA6IG51bGwgfCBUKTogVCB7XG4gIGlmIChwID09PSBudWxsKSB7XG4gICAgdGhyb3cgXCJTaG91bGQgbm90IGJlIG51bGwhXCI7XG4gIH1cbiAgcmV0dXJuIHA7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBfY3JlYXRlRWxlbWVudDxUIGV4dGVuZHMga2V5b2YgSFRNTEVsZW1lbnRUYWdOYW1lTWFwPihcbiAgdGFnOiBULFxuICBjbGFzc2VzPzogc3RyaW5nW11cbik6IEhUTUxFbGVtZW50VGFnTmFtZU1hcFtUXSB7XG4gIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gIGlmIChjbGFzc2VzKSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKC4uLmNsYXNzZXMpO1xuICB9XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaWdub3JlRW50ZXJDYWxsYmFjayhrZXlFdmVudDogS2V5Ym9hcmRFdmVudCkge1xuICBpZiAoa2V5RXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICBrZXlFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGNvbnRyb2xsZXIgZnJvbSBcIi4vY29udHJvbGxlci5qc1wiO1xuaW1wb3J0IHsgbW9kZWwgfSBmcm9tIFwiLi9tb2RlbHMvaW5kZXguanNcIjtcbmltcG9ydCB7IHNpZGViYXJWaWV3LCBtYWluVmlldyB9IGZyb20gXCIuL3ZpZXdzL2luZGV4LmpzXCI7XG5jb250cm9sbGVyKG1vZGVsLCBzaWRlYmFyVmlldywgbWFpblZpZXcpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9