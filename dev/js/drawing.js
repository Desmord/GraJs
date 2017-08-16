const canvasWidth = document.querySelector('#mainBoard').offsetWidth;
const canvasHeight = document.querySelector('#mainBoard').offsetHeight;
const canvas = document.querySelector('canvas');
const topCanvas = canvas.offsetTop;
const leftCanvas = canvas.offsetLeft;
const ctx = canvas.getContext('2d');

let pngs = document.querySelectorAll('img');
let exsplosionsArray = [];

for (let i = 1; i < pngs.length; i++) {
    exsplosionsArray.push(pngs[i]);
}

let speed = 0;
let enemyArray = [];

let enemyImage = document.querySelector('#ship');

let drawEnemies = () => {
    for (let i = 0; i < enemyArray.length; i++) {
        ctx.drawImage(enemyImage, enemyArray[i].x, enemyArray[i].y, canvasWidth / 35, canvasWidth / 40);
    }
};

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

const ifCanvasEnd = () => {

    for (let i = 0; i < enemyArray.length; i++) {
        if (enemyArray[i].x < 0) {
            enemyArray[i].xDirection = '+';
        } else if (enemyArray[i].y < 0) {
            enemyArray[i].yDirection = '+';
        } else if (enemyArray[i].x + canvasWidth / 35 > canvasWidth) {
            enemyArray[i].xDirection = '-';
        } else if (enemyArray[i].y + canvasWidth / 40 > canvasHeight) {
            enemyArray[i].yDirection = '-';
        }
    }

};

const changeEnemyPosition = () => {
    for (let i = 0; i < enemyArray.length; i++) {
        if (enemyArray[i].xDirection == '+') {
            enemyArray[i].x = (enemyArray[i].x + speed);
        } else {
            enemyArray[i].x = (enemyArray[i].x - speed);
        }
        if (enemyArray[i].yDirection == '+') {
            enemyArray[i].y = (enemyArray[i].y + speed);
        } else {
            enemyArray[i].y = (enemyArray[i].y - speed);
        }
    }
    ifCanvasEnd();
    setTimeout(changeEnemyPosition, 10);
};

const changeEnemyDirection = (id) => {

    let time = (Math.floor(Math.random() * 5) + 1) * 1000;

    if (Math.floor(Math.random() * 2) + 1 == 1) {
        enemyArray[id].xDirection = '+';
    } else {
        enemyArray[id].xDirection = '-';
    }

    if (Math.floor(Math.random() * 2) + 1 == 1) {
        enemyArray[id].yDirection = '+';
    } else {
        enemyArray[id].yDirection = '-';
    }
    enemyArray[id].changeD = setTimeout(() => {
        changeEnemyDirection(id);
    }, time);

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

    setTimeout(changeEnemyPosition, 10);
    setInterval(draw, 5);

};

//---------------------------------

let expolosionVar = exsplosionsArray[0];

const expolosion = (e) => {
    ctx.drawImage(expolosionVar, e.clientX - leftCanvas - canvasWidth / 35, e.clientY - topCanvas - canvasWidth / 40, canvasWidth / 15, canvasWidth / 20);
};

const setCurrentExplosion = () => {

    if (expolosionVar == exsplosionsArray[8]) {
        expolosionVar = exsplosionsArray[0];
    } else {
        let index = exsplosionsArray.indexOf(expolosionVar) + 1;
        expolosionVar = exsplosionsArray[index];
        setTimeout(setCurrentExplosion, 30);
    }

};

const drawExplosion = (e) => {

    setCurrentExplosion();

    let inter = setInterval(() => {
        expolosion(e);
    }, 10);

    setTimeout(() => {
        clearInterval(inter);
    }, 240);

};
