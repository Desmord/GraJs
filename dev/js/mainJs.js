const canvasWidth = document.querySelector('#mainBoard').offsetWidth;
const canvasHeight = document.querySelector('#mainBoard').offsetHeight;
const canvas = document.querySelector('canvas'); 
const ctx = canvas.getContext('2d');

//canvas init
(() => {
    
    canvas.height = canvasHeight;
    canvas.width = canvasWidth;
    
})()


