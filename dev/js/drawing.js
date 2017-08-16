const canvasWidth = document.querySelector('#mainBoard').offsetWidth;
const canvasHeight = document.querySelector('#mainBoard').offsetHeight;
const canvas = document.querySelector('canvas');
const topCanvas = canvas.offsetTop;
const leftCanvas = canvas.offsetLeft;
const ctx = canvas.getContext('2d');


let enemyImage = new Image();
enemyImage.src = "../png/ships/s2.png";

let speed = 10;
let enemyArray = [
    {
        id: 1,
        x: 200,
        y: 300,
        xDirection: '-',
        yDirection: '+',
        angle: 0
    },
    {
        id: 2,
        x: 800,
        y: 400,
        xDirection: '-',
        yDirection: '+',
        angle: 90
    }
];

let pointerX = canvasWidth / 2;
let pointerY = canvasHeight / 2;

const drawBackground = () => {

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.fill();

};

const drawPointer = () => {

    ctx.strokeStyle = "#c93c3c";
    ctx.lineWidth = 2;

    ctx.moveTo(pointerX, pointerY);
    ctx.arc(pointerX, pointerY, canvasWidth / 50, 0, 2 * Math.PI);
    ctx.stroke();

    ctx.moveTo(pointerX - (canvasWidth / 50) * 2, pointerY);
    ctx.lineTo(pointerX + (canvasWidth / 50) * 2, pointerY);
    ctx.stroke();

    ctx.moveTo(pointerX, pointerY - (canvasWidth / 50) * 2);
    ctx.lineTo(pointerX, pointerY + (canvasWidth / 50) * 2);
    ctx.stroke();

};

const changeEnemyPosition = () => {
    for (let i = 0; i < enemyArray.length; i++) {
        if (enemyArray[i].xDirection == '+') {
            enemyArray[i].x = (enemyArray[i].x + 1);
        } else {
            enemyArray[i].x = (enemyArray[i].x - 1);
        }
        if (enemyArray[i].yDirection == '+') {
            enemyArray[i].y = (enemyArray[i].y + 1);
        } else {
            enemyArray[i].y = (enemyArray[i].y - 1);
        }
    }
    setTimeout(changeEnemyPosition, speed);
};

const changeEnemyDirection = () => {

    let time = (Math.floor(Math.random() * 5) + 1) * 1000;

    for (let i = 0; i < enemyArray.length; i++) {
        if (Math.floor(Math.random() * 2) + 1 == 1) {
            enemyArray[i].xDirection = '+';
        } else {
            enemyArray[i].xDirection = '-';
        }

        if (Math.floor(Math.random() * 2) + 1 == 1) {
            enemyArray[i].yDirection = '+';
        } else {
            enemyArray[i].yDirection = '-';
        }
    }

    setTimeout(changeEnemyDirection, time);

};

const drawEnemies = () => {

    for (let i = 0; i < enemyArray.length; i++) {
        ctx.drawImage(enemyImage, enemyArray[i].x, enemyArray[i].y, canvasWidth / 35, canvasHeight / 25);
    }

};

const clearCanvas = () => {

    ctx.clearRect(0, 0, ctx.width, ctx.height);
    ctx.beginPath();

};

const draw = () => {

    clearCanvas();
    drawBackground();
    drawEnemies();
    drawPointer();

};

let canvasEvent = (e) => {

    pointerX = e.clientX - leftCanvas;
    pointerY = e.clientY - topCanvas;

};

let mouseMoveEvent = () => {
    document.addEventListener('mousemove', canvasEvent);
};

let mainLoop = () => {
    setTimeout(changeEnemyDirection, 1000);
    setTimeout(changeEnemyPosition, speed);
    setInterval(draw, 5);
};

//drawEnemies , clickEvent,
