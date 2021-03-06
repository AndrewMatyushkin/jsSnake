const canvas = document.getElementById('box');
const ctx = canvas.getContext('2d');
const playground = new Image();
playground.src = "./img/box.png";
const foodImg = new Image();
foodImg.src = "./img/beer.png";

// wrap and score //
let box = 32;
let score = 0;

// draw food and snake//
let snake = [];
snake[0] = {
    x: 9 * box,
    y: 10 * box
}
let snakeX = snake[0].x;
let snakeY = snake[0].y;
let food = {
    x: Math.floor((Math.random() * 17 + 1 )) * box ,
    y: Math.floor((Math.random() * 15 + 3 )) * box,
};

document.addEventListener('keydown', direction);

let dir;
function direction(event) {
    if(event.keyCode == 37 && dir != 'right'){dir = 'left'}
    else if(event.keyCode == 38 && dir != 'down'){dir = 'up'}
    else if(event.keyCode == 39 && dir != 'left' ){dir = 'right'}
    else if(event.keyCode == 40 && dir != 'up' ){dir = 'down'} 
    else if(event.keyCode == 37 && event.keyCode == 38 && dir != 'right') {dir = 'left'}
}
// draw func //
function drawCanvas() {
    ctx.drawImage(playground, 0,0);
    ctx.drawImage(foodImg, food.x, food.y);
    for (let i = 0; i < snake.length; i++) {
        if(i == 0 ){
            if(bA.checked){ctx.drawImage(sneakHead2, snake[i].x, snake[i].y, box, box)};
            if(bE.checked){ctx.drawImage(Egor, snake[i].x, snake[i].y, box, box)};
            if(bS.checked){ctx.drawImage(Simons, snake[i].x, snake[i].y, box, box)};
            if(bI.checked){ctx.drawImage(Igor, snake[i].x, snake[i].y, box, box)};
        }
        else{
            if(bA.checked){ctx.drawImage(sneakHead2, snake[i].x, snake[i].y, box, box)}
            if(bE.checked){ctx.drawImage(Egor, snake[i].x, snake[i].y, box, box)}
            if(bS.checked){ctx.drawImage(Simons, snake[i].x, snake[i].y, box, box)};
            if(bI.checked){ctx.drawImage(Igor, snake[i].x, snake[i].y, box, box)};
        }
    }

    // draw text//
    ctx.fillStyle = 'white';
    ctx.font = '45px Spicy Rice';
    ctx.fillText(score, box * 1.9, box * 2.2);

    // eat food + create massive for snake//
    if(snakeX == food.x && snakeY == food.y) {
        if(bI.checked){
            iBottle.play();
        }
        score++;

        // every 10 bottles
        if(score % 10 && bI.checked){
            iBottle.pause();
            iBessilie.play();
        }

        food = {
          x: (Math.floor(Math.random() * 17 + 1 ) * box) ,
          y: (Math.floor(Math.random() * 15 + 3 ) * box) ,
        };
    } else {
          snake.pop();
    }
    // out of bounds //
    if(snakeX < box || snakeX > box * 17 || snakeY < 3 * box || snakeY > box * 17) {
        clearInterval(game);
        window.location.reload(true);
    }

    // eat tale//
    function eatTail(head, arr) {
        for(i = 0; i < arr.length; i++) {
            if(head.x == arr[i].x && head.y == arr[i].y) {
                clearInterval(game);
                window.location.reload(true);
            }
        }
    }

    if(dir == 'left') snakeX -=box;
    if(dir == 'right') snakeX +=box;
    if(dir == 'up') snakeY -=box;
    if(dir == 'down') snakeY +=box;

    let head = {
        x: snakeX,
        y: snakeY
    }
    eatTail(head, snake);
    snake.unshift(head);

}

//interval for func//
let game = setInterval(drawCanvas, 80);


