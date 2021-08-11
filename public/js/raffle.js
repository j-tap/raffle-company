/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./resources/js/Form.js":
/*!******************************!*\
  !*** ./resources/js/Form.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Form)
/* harmony export */ });
/* harmony import */ var _methods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./methods.js */ "./resources/js/methods.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classPrivateMethodGet(receiver, privateSet, fn) { if (!privateSet.has(receiver)) { throw new TypeError("attempted to get private field on non-instance"); } return fn; }

function _classPrivateFieldGet(receiver, privateMap) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get"); return _classApplyDescriptorGet(receiver, descriptor); }

function _classApplyDescriptorGet(receiver, descriptor) { if (descriptor.get) { return descriptor.get.call(receiver); } return descriptor.value; }

function _classPrivateFieldSet(receiver, privateMap, value) { var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set"); _classApplyDescriptorSet(receiver, descriptor, value); return value; }

function _classExtractFieldDescriptor(receiver, privateMap, action) { if (!privateMap.has(receiver)) { throw new TypeError("attempted to " + action + " private field on non-instance"); } return privateMap.get(receiver); }

function _classApplyDescriptorSet(receiver, descriptor, value) { if (descriptor.set) { descriptor.set.call(receiver, value); } else { if (!descriptor.writable) { throw new TypeError("attempted to set read only private field"); } descriptor.value = value; } }



var _form = /*#__PURE__*/new WeakMap();

var _url = /*#__PURE__*/new WeakMap();

var _fieldUpdateErrors = /*#__PURE__*/new WeakSet();

var Form = /*#__PURE__*/function () {
  function Form(form, url) {
    _classCallCheck(this, Form);

    _fieldUpdateErrors.add(this);

    _defineProperty(this, "formErrors", {});

    _form.set(this, {
      writable: true,
      value: void 0
    });

    _url.set(this, {
      writable: true,
      value: void 0
    });

    _classPrivateFieldSet(this, _form, form);

    _classPrivateFieldSet(this, _url, url);
  }

  _createClass(Form, [{
    key: "formSendData",
    value: function formSendData(callback) {
      var _this = this;

      _classPrivateFieldGet(this, _form).addEventListener('submit', function (event) {
        event.preventDefault();
        event.stopPropagation();
        _this.formErrors = {};
        var formData = new FormData(_classPrivateFieldGet(_this, _form));
        var requestData = (0,_methods_js__WEBPACK_IMPORTED_MODULE_0__.serializeForm)(formData);

        _classPrivateMethodGet(_this, _fieldUpdateErrors, _fieldUpdateErrors2).call(_this);

        _this.updateLoading(true);

        _this.updateErrorAlert();

        window.axios.post(_classPrivateFieldGet(_this, _url), requestData).then(function (response) {
          callback(response);
        })["catch"](function (error) {
          _this.updateErrorAlert(error);
        })["finally"](function () {
          _classPrivateMethodGet(_this, _fieldUpdateErrors, _fieldUpdateErrors2).call(_this);

          _this.updateLoading();
        });
      });
    }
  }, {
    key: "fieldUpdateError",
    value: function fieldUpdateError(field) {
      var classError = 'is-invalid';
      var key = field.getAttribute('name');
      var errorFeedback = field.nextElementSibling;
      var textError = '';

      if (this.formErrors[key]) {
        textError = this.formErrors[key].join(', \n');
        field.classList.add(classError);
      } else {
        field.classList.remove(classError);
      }

      errorFeedback.innerText = textError;
    }
  }, {
    key: "updateLoading",
    value: function updateLoading() {
      var is = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      var btn = _classPrivateFieldGet(this, _form).querySelector('[type="submit"]');

      var preloader = btn.querySelector('.spinner-border');

      if (is) {
        preloader.classList.remove(window.hideClass);
        btn.setAttribute('disabled', true);
      } else {
        preloader.classList.add(window.hideClass);
        btn.removeAttribute('disabled');
      }
    }
  }, {
    key: "updateErrorAlert",
    value: function updateErrorAlert(error) {
      var alert = _classPrivateFieldGet(this, _form).querySelector('.alert-danger');

      var msg = '';

      if (error) {
        var resp = error.response;
        msg = error;

        if (resp) {
          if (resp.statusText) msg = resp.statusText;

          if (resp.data) {
            if (resp.data.message) msg = resp.data.message;
          }

          if (resp.data.errors) {
            this.formErrors = resp.data.errors;
          }
        }

        alert.classList.remove(window.hideClass);
      } else {
        alert.classList.add(window.hideClass);
      }

      alert.innerText = msg;
    }
  }]);

  return Form;
}();

function _fieldUpdateErrors2() {
  var _this2 = this;

  Array.prototype.slice.call(_classPrivateFieldGet(this, _form).querySelectorAll("[name]")).forEach(function (field) {
    return _this2.fieldUpdateError(field);
  });
}



/***/ }),

/***/ "./resources/js/methods.js":
/*!*********************************!*\
  !*** ./resources/js/methods.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "goToTelegram": () => (/* binding */ goToTelegram),
/* harmony export */   "serializeForm": () => (/* binding */ serializeForm)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function goToTelegram(channel) {
  window.location.replace("tg://resolve?domain=@".concat(channel));
}
;
function serializeForm(form) {
  var obj = {};

  var _iterator = _createForOfIteratorHelper(form),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
          key = _step$value[0],
          value = _step$value[1];

      if (obj[key] !== undefined) {
        if (!Array.isArray(obj[key])) {
          obj[key] = [obj[key]];
        }

        obj[key].push(value);
      } else {
        obj[key] = value;
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return obj;
}
;

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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************************!*\
  !*** ./resources/js/raffle.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.js */ "./resources/js/Form.js");
/* harmony import */ var _methods_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./methods.js */ "./resources/js/methods.js");


var tgChannel = 'test_group_123';
window.hideClass = 'd-none';
var personalCodeVariable = 'personal_code';

(function () {
  var eStart = document.getElementById('start-block');
  var eFinal = document.getElementById('final-block');
  var eForm = document.getElementById('main-form');
  var aBtnsGotoTg = document.querySelectorAll('.btn-goto-tg');
  var personalCode = localStorage.getItem(personalCodeVariable);

  for (var i = 0; i < aBtnsGotoTg.length; i++) {
    aBtnsGotoTg[i].addEventListener('click', function (event) {
      (0,_methods_js__WEBPACK_IMPORTED_MODULE_1__.goToTelegram)(tgChannel);
    });
  }

  if (personalCode) {
    showSuccess(personalCode);
  } else {
    var form = new _Form_js__WEBPACK_IMPORTED_MODULE_0__.default(eForm, '/api/users');
    form.formSendData(function (resp) {
      personalCode = resp.data.code;

      if (personalCode) {
        localStorage.setItem(personalCodeVariable, personalCode);
        showSuccess(personalCode);
      } else {
        form.updateErrorAlert('Unknow error!');
      }
    });
  }

  function showSuccess(code) {
    var eCode = document.getElementById('code');
    eCode.innerText = code;
    eStart.classList.add(window.hideClass);
    eFinal.classList.remove(window.hideClass);
  }

  ;
})();
})();

/******/ })()
;