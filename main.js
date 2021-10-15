var player = Player(4);
var i = 0;
var enemies=[];

for(var i=0;i<5;i++)
{
let speed=4+Math.random()*4;
let e = enemy(speed);
enemies.push(e);
}
var j = 0;


function game_animate() {
    ctx.fillStyle = '#ebdbb2';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if (leftPressed && player.x>0) player.x -= player.speed;
    else if (rightPressed && player.x<(canvas.width-25)) player.x += player.speed;
    if (upPressed && player.y>0) player.y -= player.speed;
    else if (downPressed && player.y<(canvas.height-50)) player.y += player.speed;
    ctx.fillStyle="black";
    player.draw(ctx);
    ctx.fillStyle = 'black';
    for(let i=0;i<5;i++)
    {
    // let e=enemies[i];
    // e.y+=Math.random()*e.speed*0.5;
    // e.x+=Math.random()*e.speed*0.5;
    // console.log(e);
    // e.draw(ctx);
    }
    
    
    
    
}

setInterval(game_animate, 12);
