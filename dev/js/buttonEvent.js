const addPoint = () => {

    document.querySelector('#scoreBoard span').innerHTML = parseInt(document.querySelector('#scoreBoard span').innerHTML) + 1;

};

const removeEnemy = (id) => {

    enemyArray.splice(id, 1);

};

const enemyArrayPush = () => {

    enemyArray.push({
        id: enemyArray.length + 1,
        x: Math.floor(Math.random() * canvasWidth) + 1,
        y: Math.floor(Math.random() * canvasHeight) + 1,
        xDirection: '+',
        yDirection: '-',
        changeD: '',
        angle: 90
    });

    return enemyArray.length - 1;
};

const createEnemy = () => {

    let enemy = enemyArrayPush();
    enemyArray[enemy].changeD = changeEnemyDirection(enemy);

};

const checktHit = (e) => {

    for (let i = 0; i < enemyArray.length; i++) {
        if (e.clientX - leftCanvas > enemyArray[i].x && e.clientX - leftCanvas < enemyArray[i].x + canvasWidth / 35 && e.clientY - topCanvas > enemyArray[i].y && e.clientY - topCanvas < enemyArray[i].y + canvasWidth / 40) {
            drawExplosion(e);
            addPoint();
            removeEnemy(i);
            createEnemy();
            //addNewElementArray
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
    if(currentspeed == 0 && speed == 0){
        speed =1;
        currentspeed = 1;
    }else{
        speed = currentspeed;
    }
    document.querySelector('#predkosc span').innerHTML = currentspeed;
    
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

    currentspeed = speed;
    speed = 0;
    document.querySelector('#predkosc span').innerHTML = 0;
    removeClickEvent();

    button.classList.add('flash');

    setTimeout(() => {
        button.innerHTML = 'Start';
        setTimeout(() => {
            button.classList.remove('flash');
        }, 250);
    }, 250);

};

const restartEvent = ()=>{
    enemyArray = [];
    speed = 1;
    document.querySelector('#predkosc span').innerHTML = 1;
    document.querySelector('#ilosc span').innerHTML = 1;
    document.querySelector('#scoreBoard span').innerHTML = 0;
    createEnemy();
};

let buttonEvent = () => {

    let button = document.querySelector('#start');

    button.addEventListener('click', () => {

        if (button.innerHTML == "Start") {
            startEvent(button, speed);
        } else {
            stopEvent(button, speed);
        }

    });

   let rbutton = document.querySelector('#restart');
    
    rbutton.addEventListener('click',()=>{
       restartEvent();
    });
};

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

const refreshShipsHTMLRemowe = () => {

    document.querySelector('#ilosc span').innerHTML = parseInt(document.querySelector('#ilosc span').innerHTML) - 1;

};
const removeShip = () => {

    enemyArray.shift();

};

const refreshShipsHTMLAdd = () => {

    document.querySelector('#ilosc span').innerHTML = parseInt(document.querySelector('#ilosc span').innerHTML) + 1;

};

const shipsButtonsEvent = () => {

    let removeShipButton = document.querySelector('#iloscContent .left');
    removeShipButton.addEventListener('click', () => {
        if (parseInt(document.querySelector('#ilosc span').innerHTML) == 0) {

        } else {
            refreshShipsHTMLRemowe();
            removeShip();
        }
    });

    let addShipButton = document.querySelector('#iloscContent .right');
    addShipButton.addEventListener('click', () => {
        if (parseInt(document.querySelector('#ilosc span').innerHTML) == 10) {

        } else {
            refreshShipsHTMLAdd();
            createEnemy();
        }
    });
};

//-----------------------------------------------------------------------
//-----------------------------------------------------------------------
//-----------------------------------------------------------------------

const refreshSpeedHTMLDown = () => {

    document.querySelector('#predkosc span').innerHTML = parseInt(document.querySelector('#predkosc span').innerHTML) - 1;

};
const addSpeedF = () => {

    speed = speed +1;

};

const refreshSpeedHTMLUp = () => {

    document.querySelector('#predkosc span').innerHTML = parseInt(document.querySelector('#predkosc span').innerHTML) + 1;

};

const downSpeed = () => {

    speed = speed -1;

};

const speedButtonsEvents = () => {

    let removeSpeed = document.querySelector('#predkoscContent .left');
    removeSpeed.addEventListener('click', () => {
        if(parseInt(document.querySelector('#predkosc span').innerHTML) == 0){
            speed = 0;
        }else{
            refreshSpeedHTMLDown(); 
            downSpeed();
        }
    });

    let addSpeed = document.querySelector('#predkoscContent .right');
    addSpeed.addEventListener('click', () => {
        if(parseInt(document.querySelector('#predkosc span').innerHTML) == 20){

        }else{
            refreshSpeedHTMLUp();
            addSpeedF();
        }
    });
};
