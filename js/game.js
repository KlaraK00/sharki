let canvas;
let ctx;
let world;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    world = new World(ctx);
}

// function start() {
//     world.level = level1;
// }