const addPoint = ()=>{
    
};

const removeEnemy = ()=>{
    
};

const addNewEnemy = ()=>{
    
};

const checktHit = (e) => {

    for (let i = 0; i < enemyArray.length; i++) {
        if (e.clientX - leftCanvas > enemyArray[i].x && e.clientX - leftCanvas < enemyArray[i].x + canvasWidth / 35 && e.clientY - topCanvas > enemyArray[i].y && e.clientY - topCanvas < enemyArray[i].y + canvasWidth / 40) {
            drawExplosion(e);
            // addPoint, removeElementArray, addNewElementArray
        } else {
            //pudło
        }
    };

};
const clickEvent = (e) => {
    checktHit(e);
};

let mouseClickEvent = () => {
    canvas.addEventListener('click', clickEvent);
};

let removeClickEvent = () => {
    canvas.removeEventListener('click', clickEvent);
};



let startEvent = (button) => {

    speed = 1;
    
    mouseMoveEvent();
    mouseClickEvent();
    
    button.classList.add('flash');

    setTimeout(() => {
        button.innerHTML = 'Stop';
        setTimeout(() => {
            button.classList.remove('flash');
        }, 250);
    }, 250);

};

let stopEvent = (button) => {

    speed = 0;
    
    removeClickEvent();
    
    button.classList.add('flash');

    setTimeout(() => {
        button.innerHTML = 'Start';
        setTimeout(() => {
            button.classList.remove('flash');
        }, 250);
    }, 250);

};


let buttonEvent = () => {

    let button = document.querySelector('#startStopButton');

    button.addEventListener('click', () => {

        if (button.innerHTML == "Start") {
            startEvent(button, speed);
        } else {
            stopEvent(button, speed);
        }

    });

};
