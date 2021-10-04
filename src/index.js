// document.addEventListener("DOMContentLoaded", function () {
//   const canvas = document.getElementById('game-canvas');
//   const ctx = canvas.getContext("2d");
//   window.ctx = ctx;
// });

const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

window.MovingObject = MovingObject;
window.Asteroid = Asteroid;

document.addEventListener("DOMContentLoaded", function () {
  const canvas = document.getElementById('game-canvas');
  const ctx = canvas.getContext("2d");
  window.ctx = ctx;
});
