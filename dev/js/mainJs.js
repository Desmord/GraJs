const enemyArrayPush = ()=>{
    
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

const deleteEnemy = () => {

};

(() => {

    canvas.height = canvasHeight;
    canvas.width = canvasWidth;

    buttonEvent();

    mainLoop();
    mouseMoveEvent();
    
    createEnemy(); 
    
  //  setTimeout(()=>{
   //     clearTimeout(enemyArray[0].changeD);
  //  },10000);
  //  for(let i =0;i<8;i++){
   //     createEnemy(); 
   // }
  //  speed = 4;
    
})()
