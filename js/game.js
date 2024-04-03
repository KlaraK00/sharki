let canvas;
let ctx;
let keyboard = new Keyboard();
let world;
let setTime = new Date().getTime();
let timePast;

function init() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');
    world = new World(keyboard);
    checkPastTime();
}

function checkPastTime() {
    setInterval(() => {
        let currentTime = new Date().getTime();
        timePast = currentTime - setTime;
    }, 1000);
}

window.addEventListener("keydown", (event) => {
    console.log(event.keyCode);
    if(event.keyCode == 37) {
        setTime = new Date().getTime();
        keyboard.LEFT = true;
    };
    if(event.keyCode == 38) {
        setTime = new Date().getTime();
        keyboard.UP = true;
    };
    if(event.keyCode == 39) {
        setTime = new Date().getTime();
        keyboard.RIGHT = true;
    };
    if(event.keyCode == 40) {
        setTime = new Date().getTime();
        keyboard.UP = true;
    };
    if(event.keyCode == 68) {
        setTime = new Date().getTime();
        keyboard.D = true;
    };
});

window.addEventListener("keyup", (event) => {
    if(event.keyCode == 37) {
        keyboard.LEFT = false;
    };
    if(event.keyCode == 38) {
        keyboard.UP = false;
    };
    if(event.keyCode == 39) {
        keyboard.RIGHT = false;
    };
    if(event.keyCode == 40) {
        keyboard.UP = false;
    };
    if(event.keyCode == 68) {
        keyboard.D = false;
    };
});

// function start() {
//     world.level = level1;
// }