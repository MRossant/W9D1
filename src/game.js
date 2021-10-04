const Asteroid = require("./asteroid.js")

function Game() {
  this.DIM_X = 500;
  this.DIM_Y = 500;
  const NUM_ASTEROIDS = 10;
  this.asteroids = [];
  for (i=0; i<NUM_ASTEROIDS; i++) {
    this.asteroids.push(this.addAsteroids());
  }
}

Game.prototype.addAsteroids = function () {
  return new Asteroid(this.randomPosition(), this);
}

Game.prototype.randomPosition = function () {
  let x = Math.floor(Math.random() * this.DIM_X);
  let y = Math.floor(Math.random() * this.DIM_Y);
  return {pos: [x, y]};
}

Game.prototype.draw = function(ctx) {
  ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);
  this.asteroids.forEach(function(asteroid) {
    asteroid.draw(ctx);
  })
}

Game.prototype.moveObjects = function () {
  this.asteroids.forEach(function (asteroid) {
    asteroid.move();
  })
}

Game.prototype.wrap = function (pos) {
  let x = pos[0];
  let y = pos[1];

  if (x < 0) {
    x = 499;
  } else if (x > 500) {
    x = 1;
  } else if (y < 0) {
    y = 499;
  } else if (y > 500) {
    y = 1;
  }

  return [x, y];
}

Game.prototype.checkCollisions = function () {
  for (let i=0; i<this.asteroids.length; i++) {
    for (let j = 0; j < this.asteroids.length; j++) {
      
    }
  }
}

module.exports = Game;

