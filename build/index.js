/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Edit; }
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");








function Edit() {
  const [newTodo, setNewTodo] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const [addingTodo, setAddingTodo] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const data = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    const todosStore = select('learning-gutenberg/todos');
    return todosStore && {
      todos: todosStore.getTodos(),
      total: todosStore.getTodosCount(),
      done: todosStore.getTodosDoneCount(),
      notdone: todosStore.getTodosNotDoneCount()
    };
  }, []);
  const {
    todos
  } = data;
  const actions = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useDispatch)('learning-gutenberg/todos');
  const addTodo = actions && actions.addTodo;
  const toggleTodo = actions && actions.toggleTodo;
  const postType = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_3__.useSelect)(select => {
    return select('core/editor').getCurrentPostType();
  }, []);
  const [meta, setMeta] = (0,_wordpress_core_data__WEBPACK_IMPORTED_MODULE_4__.useEntityProp)('postType', postType, 'meta');
  const subTitleValue = meta._blocks_course_post_subtitle;

  const onSubtitleChange = value => {
    setMeta({ ...meta,
      _blocks_course_post_subtitle: value
    });
  };

  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, subTitleValue || subTitleValue === '' ? (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Post Subtitle', 'learning-gutenberg-data-stores'),
    value: subTitleValue,
    onChange: onSubtitleChange
  }) : (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Meta Field Not Registered.', 'learning-gutenberg-data-stores'), !todos && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Please make sure your plugin is activated.', 'learning-gutenberg-data-stores')), todos && (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", {
    className: "todos-status"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Done:', 'learning-gutenberg-data-stores'), ' ', data.done)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Not Done:', 'learning-gutenberg-data-stores'), data.notdone)), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("h5", null, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Total:', 'learning-gutenberg-data-stores'), ' ', data.total))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("ul", null, todos.map((todo, index) => (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("li", {
    key: todo.id,
    className: todo.completed && 'todo-completed'
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.CheckboxControl, {
    disabled: todo.loading,
    label: todo.title,
    checked: todo.completed,
    onChange: () => {
      if (toggleTodo) {
        toggleTodo(todo, index);
      }
    }
  })))), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("form", {
    onSubmit: async e => {
      e.preventDefault();

      if (addTodo && newTodo) {
        setAddingTodo(true);
        await addTodo(newTodo);
        setNewTodo('');
        setAddingTodo(false);
      }
    },
    className: "addtodo-form"
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.TextControl, {
    value: newTodo,
    onChange: v => setNewTodo(v)
  }), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__.Button, {
    disabled: addingTodo,
    type: "submit",
    isPrimary: true
  }, (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)('Add Todo', 'learning-gutenberg-data-stores'))))));
}

/***/ }),

/***/ "./src/plugins/sidebar.js":
/*!********************************!*\
  !*** ./src/plugins/sidebar.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/plugins */ "@wordpress/plugins");
/* harmony import */ var _wordpress_plugins__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/edit-post */ "@wordpress/edit-post");
/* harmony import */ var _wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);




(0,_wordpress_plugins__WEBPACK_IMPORTED_MODULE_1__.registerPlugin)('learning-gutenberg-plugin', {
  render: () => {
    return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginDocumentSettingPanel, {
      title: "My Panel",
      icon: "admin-settings"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Document Settings Panel")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginPostStatusInfo, null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Some Info")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginPrePublishPanel, {
      title: "PrePublish Title"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "PrePublish Panel Info")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginPostPublishPanel, {
      title: "PostPublish Title"
    }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("p", null, "Post Publish Panel Info")), (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_edit_post__WEBPACK_IMPORTED_MODULE_2__.PluginSidebar, {
      name: "meta-fields-sidebar",
      icon: "admin-settings",
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Post Options', 'learning-gutenberg-data-stores')
    }, "Custom Sidebar"));
  }
});

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ save; }
/* harmony export */ });
function save() {
  return null;
}

/***/ }),

/***/ "./src/todos-store/actions.js":
/*!************************************!*\
  !*** ./src/todos-store/actions.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addTodo": function() { return /* binding */ addTodo; },
/* harmony export */   "toggleTodo": function() { return /* binding */ toggleTodo; },
/* harmony export */   "updateTodo": function() { return /* binding */ updateTodo; },
/* harmony export */   "populateTodos": function() { return /* binding */ populateTodos; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/todos-store/types.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/todos-store/controls.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);



function* addTodo(title) {
  try {
    const todo = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.createTodo)(title);
    return {
      type: _types__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO,
      todo
    };
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/notices').createErrorNotice(error.message || 'Could not create todo.');
  }
}
function* toggleTodo(todo, index) {
  try {
    yield updateTodo({ ...todo,
      loading: true
    }, index);
    const updatedTodo = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.toggleTodo)(todo);
    return updateTodo(updatedTodo, index);
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)('core/notices').createErrorNotice(error.message || 'Could not update todo.');
  }
}
const updateTodo = (todo, index) => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_TODO,
    index,
    todo
  };
};
const populateTodos = todos => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.POPULATE_TODOS,
    todos
  };
};

/***/ }),

/***/ "./src/todos-store/controls.js":
/*!*************************************!*\
  !*** ./src/todos-store/controls.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchTodos": function() { return /* binding */ fetchTodos; },
/* harmony export */   "createTodo": function() { return /* binding */ createTodo; },
/* harmony export */   "toggleTodo": function() { return /* binding */ toggleTodo; }
/* harmony export */ });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/todos-store/types.js");

const fetchTodos = () => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.FETCH_TODOS
  };
};
const createTodo = title => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.CREATE_TODO,
    title
  };
};
const toggleTodo = todo => {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__.TOGGLE_TODO,
    todo
  };
};
/* harmony default export */ __webpack_exports__["default"] = ({
  FETCH_TODOS() {
    return window.fetch('https://jsonplaceholder.typicode.com/todos?_limit=10').then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Could not fetch todos.');
    });
  },

  CREATE_TODO(_ref) {
    let {
      title
    } = _ref;
    return window.fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      body: JSON.stringify({
        title,
        completed: false,
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Could not create todo.');
    });
  },

  TOGGLE_TODO(_ref2) {
    let {
      todo
    } = _ref2;
    return window.fetch(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify({
        completed: !todo.completed
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(response => {
      if (response.ok) {
        return response.json();
      }

      throw new Error('Could not update todo.');
    });
  }

});

/***/ }),

/***/ "./src/todos-store/index.js":
/*!**********************************!*\
  !*** ./src/todos-store/index.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/todos-store/reducer.js");
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./selectors */ "./src/todos-store/selectors.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./src/todos-store/actions.js");
/* harmony import */ var _resolvers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resolvers */ "./src/todos-store/resolvers.js");
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./controls */ "./src/todos-store/controls.js");






const store = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.createReduxStore)('learning-gutenberg/todos', {
  reducer: _reducer__WEBPACK_IMPORTED_MODULE_1__["default"],
  selectors: _selectors__WEBPACK_IMPORTED_MODULE_2__,
  actions: _actions__WEBPACK_IMPORTED_MODULE_3__,
  resolvers: _resolvers__WEBPACK_IMPORTED_MODULE_4__,
  controls: _controls__WEBPACK_IMPORTED_MODULE_5__["default"]
});
(0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.register)(store);

/***/ }),

/***/ "./src/todos-store/reducer.js":
/*!************************************!*\
  !*** ./src/todos-store/reducer.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./src/todos-store/types.js");

const DEFAULT_STATE = {
  items: []
};

const reducer = function () {
  let state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_STATE;
  let action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types__WEBPACK_IMPORTED_MODULE_0__.ADD_TODO:
      return { ...state,
        items: [...state.items, action.todo]
      };

    case _types__WEBPACK_IMPORTED_MODULE_0__.POPULATE_TODOS:
      {
        return { ...state,
          items: action.todos
        };
      }

    case _types__WEBPACK_IMPORTED_MODULE_0__.UPDATE_TODO:
      {
        const itemsCopy = [...state.items];
        itemsCopy[action.index] = action.todo;
        return { ...state,
          items: itemsCopy
        };
      }

    default:
      return state;
  }
};

/* harmony default export */ __webpack_exports__["default"] = (reducer);

/***/ }),

/***/ "./src/todos-store/resolvers.js":
/*!**************************************!*\
  !*** ./src/todos-store/resolvers.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodos": function() { return /* binding */ getTodos; }
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _controls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./controls */ "./src/todos-store/controls.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./actions */ "./src/todos-store/actions.js");



function* getTodos() {
  try {
    const todos = yield (0,_controls__WEBPACK_IMPORTED_MODULE_1__.fetchTodos)();
    return (0,_actions__WEBPACK_IMPORTED_MODULE_2__.populateTodos)(todos);
  } catch (error) {
    return (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.dispatch)('core/notices').createErrorNotice(error.message || 'Could not fetch todos.');
  }
}

/***/ }),

/***/ "./src/todos-store/selectors.js":
/*!**************************************!*\
  !*** ./src/todos-store/selectors.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTodos": function() { return /* binding */ getTodos; },
/* harmony export */   "getTodosCount": function() { return /* binding */ getTodosCount; },
/* harmony export */   "getTodosDoneCount": function() { return /* binding */ getTodosDoneCount; },
/* harmony export */   "getTodosNotDoneCount": function() { return /* binding */ getTodosNotDoneCount; }
/* harmony export */ });
const getTodos = state => {
  return state.items;
};
const getTodosCount = state => {
  return state.items.length;
};
const getTodosDoneCount = state => {
  return state.items.filter(todo => todo.completed).length;
};
const getTodosNotDoneCount = state => {
  return state.items.filter(todo => !todo.completed).length;
};

/***/ }),

/***/ "./src/todos-store/types.js":
/*!**********************************!*\
  !*** ./src/todos-store/types.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_TODO": function() { return /* binding */ ADD_TODO; },
/* harmony export */   "FETCH_TODOS": function() { return /* binding */ FETCH_TODOS; },
/* harmony export */   "POPULATE_TODOS": function() { return /* binding */ POPULATE_TODOS; },
/* harmony export */   "CREATE_TODO": function() { return /* binding */ CREATE_TODO; },
/* harmony export */   "TOGGLE_TODO": function() { return /* binding */ TOGGLE_TODO; },
/* harmony export */   "UPDATE_TODO": function() { return /* binding */ UPDATE_TODO; }
/* harmony export */ });
const ADD_TODO = 'ADD_TODO';
const FETCH_TODOS = 'FETCH_TODOS';
const POPULATE_TODOS = 'POPULATE_TODOS';
const CREATE_TODO = 'CREATE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const UPDATE_TODO = 'UPDATE_TODO';

/***/ }),

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["coreData"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/edit-post":
/*!**********************************!*\
  !*** external ["wp","editPost"] ***!
  \**********************************/
/***/ (function(module) {

module.exports = window["wp"]["editPost"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/plugins":
/*!*********************************!*\
  !*** external ["wp","plugins"] ***!
  \*********************************/
/***/ (function(module) {

module.exports = window["wp"]["plugins"];

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
/******/ 			// no module.id needed
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
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _todos_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos-store */ "./src/todos-store/index.js");
/* harmony import */ var _plugins_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/sidebar */ "./src/plugins/sidebar.js");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)('learning-gutenberg/data-stores', {
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"]
});
}();
/******/ })()
;
//# sourceMappingURL=index.js.map