/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/mainDom.js":
/*!************************!*\
  !*** ./src/mainDom.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weather.js */ "./src/weather.js");


function addMainDOM(containerClass) {
  const container = document.querySelector(containerClass);

  //Create seach bar
  const weatherSearch = document.createElement('input');
  weatherSearch.type = 'search';
  container.appendChild(weatherSearch);

  //Create search button
  const searchButton = document.createElement('button');
  searchButton.innerHTML = 'Search'
  container.appendChild(searchButton);

  //When clicked, search weather
  searchButton.addEventListener('click', (e) => {
    e.preventDefault();
    let location = weatherSearch.value;
    (0,_weather_js__WEBPACK_IMPORTED_MODULE_0__["default"])(getURL(location))
  })

  //create content area
  const content = document.createElement('div');
  content.classList.add('content')
  container.append(content);
}


function getURL(location) {
  const MY_API = 'ea990b4bfa6943c57e16e6c91e3b6fc2'
  return "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=" + MY_API;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addMainDOM);

/***/ }),

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });


async function getWeather(fetchURL) {
  const content = document.querySelector(".content");
  try{
    const response = await fetch(fetchURL)
    const data = await response.json()  
    
    let newData = {}; //TODO move this to another function so the catch error is handles Response not invalid type
    newData = data.main;
    newData.name = data.name;
    newData.clouds = data.weather[0];

    console.table(newData);
    for(let key in newData) {
      if(key === 'clouds') {
        content.innerHTML += key + ': ' + JSON.stringify(newData[key]) + '<br>';
      } else {
        content.innerHTML += key + ': ' + newData[key] + '<br>';
      }
    }
    
  } catch(err){
    throw new Error(err);
    content.innerHTML = "City not found";
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeather);

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
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mainDom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainDom.js */ "./src/mainDom.js");


(0,_mainDom_js__WEBPACK_IMPORTED_MODULE_0__["default"])('.container')





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBdUM7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHVEQUFVO0FBQ2QsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxVQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FDaEN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlOzs7Ozs7VUM1QmY7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQzs7QUFFcEMsdURBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL21haW5Eb20uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC8uL3NyYy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXJhcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBnZXRXZWF0aGVyICBmcm9tIFwiLi93ZWF0aGVyLmpzXCI7XG5cbmZ1bmN0aW9uIGFkZE1haW5ET00oY29udGFpbmVyQ2xhc3MpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJDbGFzcyk7XG5cbiAgLy9DcmVhdGUgc2VhY2ggYmFyXG4gIGNvbnN0IHdlYXRoZXJTZWFyY2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB3ZWF0aGVyU2VhcmNoLnR5cGUgPSAnc2VhcmNoJztcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXJTZWFyY2gpO1xuXG4gIC8vQ3JlYXRlIHNlYXJjaCBidXR0b25cbiAgY29uc3Qgc2VhcmNoQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gIHNlYXJjaEJ1dHRvbi5pbm5lckhUTUwgPSAnU2VhcmNoJ1xuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2VhcmNoQnV0dG9uKTtcblxuICAvL1doZW4gY2xpY2tlZCwgc2VhcmNoIHdlYXRoZXJcbiAgc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGxvY2F0aW9uID0gd2VhdGhlclNlYXJjaC52YWx1ZTtcbiAgICBnZXRXZWF0aGVyKGdldFVSTChsb2NhdGlvbikpXG4gIH0pXG5cbiAgLy9jcmVhdGUgY29udGVudCBhcmVhXG4gIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdjb250ZW50JylcbiAgY29udGFpbmVyLmFwcGVuZChjb250ZW50KTtcbn1cblxuXG5mdW5jdGlvbiBnZXRVUkwobG9jYXRpb24pIHtcbiAgY29uc3QgTVlfQVBJID0gJ2VhOTkwYjRiZmE2OTQzYzU3ZTE2ZTZjOTFlM2I2ZmMyJ1xuICByZXR1cm4gXCJodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPVwiICsgbG9jYXRpb24gKyBcIiZBUFBJRD1cIiArIE1ZX0FQSTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgYWRkTWFpbkRPTTsiLCJcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihmZXRjaFVSTCkge1xuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuICB0cnl7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChmZXRjaFVSTClcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpICBcbiAgICBcbiAgICBsZXQgbmV3RGF0YSA9IHt9OyAvL1RPRE8gbW92ZSB0aGlzIHRvIGFub3RoZXIgZnVuY3Rpb24gc28gdGhlIGNhdGNoIGVycm9yIGlzIGhhbmRsZXMgUmVzcG9uc2Ugbm90IGludmFsaWQgdHlwZVxuICAgIG5ld0RhdGEgPSBkYXRhLm1haW47XG4gICAgbmV3RGF0YS5uYW1lID0gZGF0YS5uYW1lO1xuICAgIG5ld0RhdGEuY2xvdWRzID0gZGF0YS53ZWF0aGVyWzBdO1xuXG4gICAgY29uc29sZS50YWJsZShuZXdEYXRhKTtcbiAgICBmb3IobGV0IGtleSBpbiBuZXdEYXRhKSB7XG4gICAgICBpZihrZXkgPT09ICdjbG91ZHMnKSB7XG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MICs9IGtleSArICc6ICcgKyBKU09OLnN0cmluZ2lmeShuZXdEYXRhW2tleV0pICsgJzxicj4nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgKz0ga2V5ICsgJzogJyArIG5ld0RhdGFba2V5XSArICc8YnI+JztcbiAgICAgIH1cbiAgICB9XG4gICAgXG4gIH0gY2F0Y2goZXJyKXtcbiAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICBjb250ZW50LmlubmVySFRNTCA9IFwiQ2l0eSBub3QgZm91bmRcIjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVyIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZHJhd01haW4gZnJvbSBcIi4vbWFpbkRvbS5qc1wiO1xuXG5kcmF3TWFpbignLmNvbnRhaW5lcicpXG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==