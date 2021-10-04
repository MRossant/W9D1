const MovingObject = require("./moving_object.js");
const Util = require("./util.js");

// const COLOR = 'red';
// const RADIUS = 10;

function Asteroid(posObj, game) { // {pos: [10, 10]}
    const COLOR = 'red';
    const RADIUS = 10;

    //let that = this;
    const object = {
        'pos': posObj.pos,
        'vel': Util.randomVec(2.5),
        'radius': RADIUS,
        'color': COLOR,
        'game': game
    }

    MovingObject.call(this, object);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;