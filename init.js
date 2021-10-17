function Player(sp) {
    return {
        x: 0,
        y: 0,
        speed: sp,
        width: 100,
        height: 100,
        draw: function(ctx) {
            var x = this.x;
            var y = this.y;
            //to draw a triangle
            ctx.beginPath();
            ctx.moveTo(x, y);
            ctx.lineTo(x - 25, y + 50);
            ctx.lineTo(x + 25, y + 50);
            ctx.lineTo(x, y);
            ctx.fill();

        }
    }
}

var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var keyd = false;
var spacePressed = false;
var keysPressed = {};

var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');
var inGame = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

canvas.onclick = function(e) {
    if (!inGame) {
        inGame = true;
        document.addEventListener("keydown", keyDownHandler, false);
        document.addEventListener("keyup", keyUpHandler, false);
    }

    e.stopPropagation();
}

document.body.onclick = function(e) {
    if (inGame) {
        document.removeEventListener("keydown", keyDownHandler, false);
        document.removeEventListener("keyup", keyUpHandler, false);
        inGame = false;
    }
}

function keyDownHandler(e) {
    keysPressed[e.key] = true;
    e.preventDefault();
}

function keyUpHandler(e) {
    keysPressed[e.key] = false;
    e.preventDefault();
}


function clickHoldHandler(e) {
    if (!inGame) return;
    mouseDown = "true";
    e.preventDefault()
}