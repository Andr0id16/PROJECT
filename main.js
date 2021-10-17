var player = Player(5);
var i = 0;
var enemies = [];

var j = 0;
var g_width = canvas.width, g_height = canvas.height;

ctx.font = '30px serif';

gameStateMachine = {
    init: function () {
        ctx.fillStyle = '#ebdbb2';
        ctx.fillRect(0, 0, g_width, g_height);
        ctx.fillStyle = 'black';
        ctx.fillText(20, 20, 'Press space to continue');
        if (keysPressed[' ']) return 'gameplay'; else return false;
    },

    gameplay: function() {
        ctx.fillStyle = '#ebdbb2';
        ctx.fillRect(0, 0, g_width, g_height);

        if (keysPressed['ArrowLeft'] && player.x > 0)
            player.x -= player.speed;
        else if (keysPressed['ArrowRight'] && player.x < (canvas.width - 25))
            player.x += player.speed;

        if (keysPressed['ArrowUp'] && player.y > 0)
            player.y -= player.speed;
        else if (keysPressed['ArrowDown'] && player.y < (canvas.height - 50))
            player.y += player.speed;

        ctx.fillStyle = "black";
        player.draw(ctx);
        return false;
    },
}

gameStateMachine.cstate = gameStateMachine.init;

function game_animate() {
    let a = gameStateMachine.cstate();
    if (a !== false) gameStateMachine.cstate = gameStateMachine[a];
}

setInterval(game_animate, 17);