const canvas = document.getElementById('box')
const ctx = canvas.getContext('2d')

const playground = new Image()
playground.src = "/img/box.png"
const foodImg = new Image()
foodImg.src = "/img/food.png"

// wrap and score //
let box = 32;
let score = 0;

// draw food and snake//
let food = {
    x: Math.floor((Math.random() * 17 + 1)) * box,
    y: Math.floor((Math.random() * 15 + 3)) * box,
};
let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}

document.addEventListener('keydown', direction);

let dir;
function direction(event) {
    if(event.keyCode == 37 && dir != 'right')
        dir = 'left';
    else if(event.keyCode == 38 && dir != 'down')
        dir = 'up';
    else if(event.keyCode == 39 && dir != 'left')
        dir = 'right';
    else if(event.keyCode == 40 && dir != 'up')
        dir = 'down';    
}
// draw func //
function drawCanvas() {
    ctx.drawImage(playground, 0,0);
    ctx.drawImage(foodImg, food.x, food.y)

    for(let i=0; i < snake.length; i++) {
        ctx.fillStyle = 'green';
        ctx.fillRect(snake[i].x,snake[i].y, box, box);
    }

    // draw text//
    ctx.fillStyle = 'white';
    ctx.font = '40px Arial';
    ctx.fillText(score, box * 2.5, box * 1.6)

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(snakeX == food.x && snakeY == food.y) {
        score++;
        food = {
            x: Math.floor((Math.random() * 17 + 1)) * box,
            y: Math.floor((Math.random() * 15 + 3)) * box,
        };
    }
    else{
        snake.pop();
    }

    snake.pop();

    if(dir == 'left') snakeX -=box;
    if(dir == 'right') snakeX +=box;
    if(dir == 'up') snakeY -=box;
    if(dir == 'down') snakeY +=box;

    let head = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(head);
}

//interval for func//
let game = setInterval(drawCanvas, 100);