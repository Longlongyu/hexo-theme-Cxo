/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/fancybox.js":
/*!****************************!*\
  !*** ./src/js/fancybox.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nexports.default = function () {\n  document.querySelectorAll('.recent-post-content img,.article-entry img').forEach(function (img) {\n    var outer = img.outerHTML;\n    var imgSrc = /src=\"(.*)\"/.exec(outer) && /src=\"(.*)\"/.exec(outer)[1];\n    var imgAlt = /alt=\"(.*)\"/.exec(outer) && /alt=\"(.*)\"/.exec(outer)[1];\n    img.outerHTML = '<a class=\"fancy-link\" href=\"' + imgSrc + '\" data-fancybox=\"group\" data-caption=\"' + imgAlt + '\">' + outer + '<div class=\"img-alt\">' + imgAlt + '</div></a>';\n  });\n};\n\n//# sourceURL=webpack:///./src/js/fancybox.js?");

/***/ }),

/***/ "./src/js/init.js":
/*!************************!*\
  !*** ./src/js/init.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction init() {\n  $('#cxo-profile').removeClass('profile-close');\n  if ($(document).scrollTop() !== 0) {\n    $('#go-up').removeClass('chose');\n  }\n  // profile收起\n  function profileClose(e) {\n    var $parent = $(this).parents('#cxo-profile');\n    if ($parent && !$parent.hasClass('profile-close')) {\n      $parent.addClass('profile-close');\n    } else if ($parent && $parent.hasClass('profile-close')) {\n      $parent.removeClass('profile-close');\n    }\n  }\n  // go-up收起\n  function goUpClose() {\n    $('html, body').animate({ scrollTop: 0 }, '500');\n  }\n  $('.profile-avatar>i').on('click', profileClose);\n  $('#go-up').on('click', goUpClose);\n}\n\nexports.default = init;\n\n//# sourceURL=webpack:///./src/js/init.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _init = __webpack_require__(/*! ./init */ \"./src/js/init.js\");\n\nvar _init2 = _interopRequireDefault(_init);\n\nvar _scroll = __webpack_require__(/*! ./scroll */ \"./src/js/scroll.js\");\n\nvar _scroll2 = _interopRequireDefault(_scroll);\n\nvar _fancybox = __webpack_require__(/*! ./fancybox */ \"./src/js/fancybox.js\");\n\nvar _fancybox2 = _interopRequireDefault(_fancybox);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(0, _init2.default)();\n\n(0, _scroll2.default)();\n\n(0, _fancybox2.default)();\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/scroll.js":
/*!**************************!*\
  !*** ./src/js/scroll.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar scroll = function scroll() {\n  var $nav = $('#cxo-intro-nav'),\n      $nav_a = $('#cxo-intro-nav>section>div a,#cxo-intro-nav i'),\n      $toc = $('.toc-wrapper'),\n      tocTop = $toc.css('top'),\n      introHeight = $('#cxo-intro').height(),\n      $progressBar = $('.read-progress'),\n      $goup = $('#go-up');\n  // 滚动\n  var previousHeight = 0,\n      continueScroll = 0;\n  function isScrollingUpOrDown(currTop) {\n    continueScroll = currTop - previousHeight;\n    previousHeight = currTop;\n    if (continueScroll > 10) {\n      // 向下滑动\n      continueScroll = 0;\n      return 1;\n    } else if (continueScroll < -20) {\n      // 向上滑动\n      continueScroll = 0;\n      return -1;\n    } else {\n      return 0;\n    }\n  }\n\n  // 滚动超过intro\n  var crossingState = -1;\n  var isHigherThanIntro = true;\n  function isCrossingIntro(currTop) {\n    // 向下滑动超过intro\n    if (currTop > introHeight) {\n      if (crossingState !== 1) {\n        crossingState = 1;\n        isHigherThanIntro = false;\n        return 1;\n      }\n    } else {\n      // 向上滑动超过intro\n      if (crossingState !== -1) {\n        crossingState = -1;\n        isHigherThanIntro = true;\n        return -1;\n      }\n    }\n    return 0;\n  }\n\n  // 判断是否为post-page\n  var isPostPage = false;\n  var articleHeight = void 0,\n      articleTop = void 0;\n  if ($('#post').length) {\n    isPostPage = true;\n    articleTop = introHeight;\n    articleHeight = $('.article-entry').outerHeight();\n  }\n\n  function updateProgress(scrollTop, beginY, contentHeight) {\n    var windowHeight = $(window).height();\n    var readPercent = void 0;\n    if (scrollTop < introHeight) {\n      readPercent = 0;\n    } else {\n      readPercent = (scrollTop - beginY) / (contentHeight - windowHeight) * 100;\n    }\n    readPercent = readPercent >= 100 ? 100 : readPercent;\n    $progressBar[0].style.width = readPercent + '%';\n  }\n\n  function findHeadPosition(scrollTop) {\n    if (isPostPage) {\n      var list = $('#post').find('h1,h2,h3,h4,h5,h6'),\n          currentId = '';\n      list.each(function () {\n        var head = $(this);\n        if (head.offset().top < scrollTop) {\n          currentId = '#' + head.attr('id');\n        }\n      });\n      var currentToc = $('.toc-link.active');\n      if (currentId && currentToc.attr('href') !== currentId) {\n        $('.toc-link').removeClass('active');\n        var _this = $('.toc-link[href=\"' + currentId + '\"]');\n        _this.addClass('active');\n      }\n    }\n  }\n\n  var navHeight = $nav.outerHeight();\n  function updateScroll(scrollTop) {\n    var upDownState = isScrollingUpOrDown(scrollTop),\n        crossingState = isCrossingIntro(scrollTop);\n    if (upDownState === 1) {\n      $nav.css('top', -navHeight + 'px');\n      // $nav.removeClass('banner-show')\n    } else if (upDownState === -1) {\n      $nav.css('top', 0);\n    }\n    if (scrollTop === 0) {\n      $nav_a.removeClass('main-color');\n      $nav.css('top', 0);\n      $nav.removeClass('nav-style-two');\n      $goup.addClass('close');\n    } else {\n      $nav.addClass('nav-style-two');\n      $nav_a.addClass('main-color');\n      $goup.removeClass('close');\n    }\n    // 如果不是post - page 以下忽略\n    if (isPostPage) {\n      if (crossingState === 1) {\n        $toc.css('position', 'fixed');\n        $toc.css('top', '0');\n      } else if (crossingState === -1) {\n        $toc.css('position', 'absolute');\n        $toc.css('top', tocTop);\n      }\n      // 进度条君的长度\n      updateProgress(scrollTop, articleTop, articleHeight);\n      findHeadPosition(scrollTop);\n    }\n    // previousHeight = scrollTop\n    // tickingScroll = false\n  }\n\n  function onScroll() {\n    var scrollTop = $(document).scrollTop();\n    updateScroll(scrollTop);\n  }\n\n  $(document).on('scroll', onScroll);\n};\n\nexports.default = scroll;\n\n//# sourceURL=webpack:///./src/js/scroll.js?");

/***/ }),

/***/ "./src/scss/style.scss":
/*!*****************************!*\
  !*** ./src/scss/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./src/scss/style.scss?");

/***/ }),

/***/ 0:
/*!****************************************************!*\
  !*** multi ./src/js/main.js ./src/scss/style.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./src/js/main.js */\"./src/js/main.js\");\nmodule.exports = __webpack_require__(/*! ./src/scss/style.scss */\"./src/scss/style.scss\");\n\n\n//# sourceURL=webpack:///multi_./src/js/main.js_./src/scss/style.scss?");

/***/ })

/******/ });