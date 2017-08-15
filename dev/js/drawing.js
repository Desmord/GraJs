const canvasWidth = document.querySelector('#mainBoard').offsetWidth;
const canvasHeight = document.querySelector('#mainBoard').offsetHeight;
const canvas = document.querySelector('canvas');
const topCanvas = canvas.offsetTop;
const leftCanvas = canvas.offsetLeft;
const ctx = canvas.getContext('2d');

let speed = 0;
let enemyArray = [
    {
        id: 1,
        x: 0,
        y: 0,
        angle: 0
    },
    {
        id: 2,
        x: 100,
        y: 100,
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

const clearCanvas = () => {

    ctx.clearRect(0, 0, ctx.width,ctx.height);
    ctx.beginPath();

};

const draw = () => {

    clearCanvas();
    drawBackground();
    drawPointer();

};

let canvasEvent = (e) => {

    pointerX = e.clientX - leftCanvas;
    pointerY = e.clientY - topCanvas;

    draw();

};

let mouseMoveEvent = () => {
    document.addEventListener('mousemove', canvasEvent);
};
