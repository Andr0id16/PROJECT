var player = Player(4);
var i = 0;
var enemies = [];

var j = 0;


function game_animate() {
    ctx.fillStyle = '#ebdbb2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (leftPressed && player.x > 0)
        player.x -= player.speed;
    else if (rightPressed && player.x < (canvas.width - 25))
        player.x += player.speed;

    if (upPressed && player.y > 0)
        player.y -= player.speed;
    else if (downPressed && player.y < (canvas.height - 50))
        player.y += player.speed;

    ctx.fillStyle = "black";
    player.draw(ctx);
    ctx.fillStyle = 'black';
}

setInterval(game_animate, 12);