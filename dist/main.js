/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\n\n// const COLOR = 'red';\n// const RADIUS = 10;\n\nfunction Asteroid(posObj, game) { // {pos: [10, 10]}\n    const COLOR = 'red';\n    const RADIUS = 10;\n\n    //let that = this;\n    const object = {\n        'pos': posObj.pos,\n        'vel': Util.randomVec(2.5),\n        'radius': RADIUS,\n        'color': COLOR,\n        'game': game\n    }\n\n    MovingObject.call(this, object);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack://W9D1/./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\")\n\nfunction Game() {\n  this.DIM_X = 500;\n  this.DIM_Y = 500;\n  const NUM_ASTEROIDS = 10;\n  this.asteroids = [];\n  for (i=0; i<NUM_ASTEROIDS; i++) {\n    this.asteroids.push(this.addAsteroids());\n  }\n}\n\nGame.prototype.addAsteroids = function () {\n  return new Asteroid(this.randomPosition(), this);\n}\n\nGame.prototype.randomPosition = function () {\n  let x = Math.floor(Math.random() * this.DIM_X);\n  let y = Math.floor(Math.random() * this.DIM_Y);\n  return {pos: [x, y]};\n}\n\nGame.prototype.draw = function(ctx) {\n  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n  this.asteroids.forEach(function(asteroid) {\n    asteroid.draw(ctx);\n  })\n}\n\nGame.prototype.moveObjects = function () {\n  this.asteroids.forEach(function (asteroid) {\n    asteroid.move();\n  })\n}\n\nGame.prototype.wrap = function (pos) {\n  let x = pos[0];\n  let y = pos[1];\n\n  if (x < 0) {\n    x = 499;\n  } else if (x > 500) {\n    x = 1;\n  } else if (y < 0) {\n    y = 499;\n  } else if (y > 500) {\n    y = 1;\n  }\n\n  return [x, y];\n}\n\nGame.prototype.checkCollisions = function () {\n  for (let i=0; i<this.asteroids.length; i++) {\n    for (let j = 0; j < this.asteroids.length; j++) {\n      \n    }\n  }\n}\n\nmodule.exports = Game;\n\n\n\n//# sourceURL=webpack://W9D1/./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\n\nfunction GameView () {\n  this.game = new Game();\n  this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n  let that = this;\n  setInterval(function () {\n    that.game.draw(that.ctx);\n    that.game.moveObjects();\n  }, 20);\n}\n\nmodule.exports = GameView;\n\n\n//# sourceURL=webpack://W9D1/./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// document.addEventListener(\"DOMContentLoaded\", function () {\n//   const canvas = document.getElementById('game-canvas');\n//   const ctx = canvas.getContext(\"2d\");\n//   window.ctx = ctx;\n// });\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\")\n\nwindow.MovingObject = MovingObject;\nwindow.Asteroid = Asteroid;\nwindow.Game = Game;\nwindow.GameView = GameView;\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  const canvas = document.getElementById('game-canvas');\n  const ctx = canvas.getContext(\"2d\");\n  window.ctx = ctx;\n  let newGame = new GameView();\n  newGame.start();\n});\n\n\n//# sourceURL=webpack://W9D1/./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(object) {\n  this.pos = object[\"pos\"];\n  this.vel = object[\"vel\"];\n  this.radius = object[\"radius\"];\n  this.color = object[\"color\"];\n  this.game = object[\"game\"];\n}\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);\n  ctx.strokeStyle = this.color;\n  ctx.stroke();\n  ctx.fillStyle = this.color;\n  ctx.fill();\n}\n\nMovingObject.prototype.move = function() {\n  this.pos[0] = this.pos[0] + this.vel[0];\n  this.pos[1] = this.pos[1] + this.vel[1];\n  this.pos = this.game.wrap(this.pos);\n}\n\nMovingObject.prototype.isCollidedWith = function(otherObject) {\n  let horizontalDiff = this.pos[0] - otherObject.pos[0];\n  let verticalDiff = this.pos[1] - otherObject.pos[1];\n  let diagonalDiff = Math.sqrt(Math.pow(horizontalDiff, 2) + Math.pow(verticalDiff, 2));\n  let sumOfRadii = this.radius + otherObject.radius;\n\n  if (diagonalDiff < sumOfRadii) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack://W9D1/./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(childClass, parentClass) {\n        function Surrogate() {};\n        Surrogate.prototype = parentClass.prototype;\n        childClass.prototype = new Surrogate();\n        childClass.prototype.constructor = childClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack://W9D1/./src/util.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;