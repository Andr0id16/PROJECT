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
        $(canvas).animate({
            width: "800px",
            height: "800px"
        }, 1000);
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
    switch (e.key) {
        case "Right":
        case "ArrowRight":
            rightPressed = true;
            break;

        case "Left":
        case "ArrowLeft":
            leftPressed = true;
            break;

        case "Up":
        case "ArrowUp":
            upPressed = true;
            break;

        case "Down":
        case "ArrowDown":
            downPressed = true;
            break;

        case 32:
            spacePressed = true;
            break;
        case 68:
            keyd = true;
            break;
    }

    e.preventDefault();
}

function keyUpHandler(e) {
    switch (e.key) {
        case "Right":
        case "ArrowRight":
            rightPressed = false;
            break;

        case "Left":
        case "ArrowLeft":
            leftPressed = false;
            break;

        case "Up":
        case "ArrowUp":
            upPressed = false;
            break;

        case "Down":
        case "ArrowDown":
            downPressed = false;
            break;

        case 32:
            spacePressed = false;
            break;
        case 68:
            keyd = false;
            break;
    }

    e.preventDefault();
}


function clickHoldHandler(e) {
    if (!inGame) return;
    mouseDown = "true";
    e.preventDefault

}