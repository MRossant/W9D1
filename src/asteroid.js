const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

// const COLOR = 'red';
// const RADIUS = 10;

function Asteroid(posObj) { // {pos: [10, 10]}
    this.COLOR = 'red';
    this.RADIUS = 10;

    let that = this;
    const object = {
        'pos': posObj.pos,
        'vel': Util.randomVec(20),
        'radius': that.RADIUS,
        'color': that.COLOR
    }

    MovingObject.call(this, object);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;