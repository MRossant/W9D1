function MovingObject(object) {
  this.pos = object["pos"];
  this.vel = object["vel"];
  this.radius = object["radius"];
  this.color = object["color"];
  this.game = object["game"];
}

MovingObject.prototype.draw = function(ctx) {
  ctx.beginPath();
  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, true);
  ctx.strokeStyle = this.color;
  ctx.stroke();
  ctx.fillStyle = this.color;
  ctx.fill();
}

MovingObject.prototype.move = function() {
  this.pos[0] = this.pos[0] + this.vel[0];
  this.pos[1] = this.pos[1] + this.vel[1];
  this.pos = this.game.wrap(this.pos);
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
  let horizontalDiff = this.pos[0] - otherObject.pos[0];
  let verticalDiff = this.pos[1] - otherObject.pos[1];
  let diagonalDiff = Math.sqrt(Math.pow(horizontalDiff, 2) + Math.pow(verticalDiff, 2));
  let sumOfRadii = this.radius + otherObject.radius;

  if (diagonalDiff < sumOfRadii) {
    return true;
  } else {
    return false;
  }
}

module.exports = MovingObject;

