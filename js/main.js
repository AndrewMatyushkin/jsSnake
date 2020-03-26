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

// draw func //
function drawCanvas() {
    ctx.drawImage(playground, 0,0);
    ctx.drawImage(foodImg, food.x, food.y)

    for(let i=0; i < snake.length; i++) {
        ctx.fillStyle = 'green';
        ctx.fillRect(snake[i].x,snake[i].y, box, box);
    }
}

//interval for func//
let game = setInterval(drawCanvas, 100);