"use strict";for(var canvasWidth=document.querySelector("#mainBoard").offsetWidth,canvasHeight=document.querySelector("#mainBoard").offsetHeight,canvas=document.querySelector("canvas"),topCanvas=canvas.offsetTop,leftCanvas=canvas.offsetLeft,ctx=canvas.getContext("2d"),pngs=document.querySelectorAll("img"),exsplosionsArray=[],i=1;i<pngs.length;i++)exsplosionsArray.push(pngs[i]);var speed=0,enemyArray=[],enemyImage=document.querySelector("#ship"),drawEnemies=function(){for(var e=0;e<enemyArray.length;e++)ctx.drawImage(enemyImage,enemyArray[e].x,enemyArray[e].y,canvasWidth/35,canvasWidth/40)},pointerX=canvasWidth/2,pointerY=canvasHeight/2,drawBackground=function(){ctx.fillStyle="#000000",ctx.fillRect(0,0,canvasWidth,canvasHeight),ctx.fill()},drawPointer=function(){ctx.strokeStyle="#c93c3c",ctx.lineWidth=2,ctx.moveTo(pointerX,pointerY),ctx.arc(pointerX,pointerY,canvasWidth/50,0,2*Math.PI),ctx.stroke(),ctx.moveTo(pointerX-canvasWidth/50*2,pointerY),ctx.lineTo(pointerX+canvasWidth/50*2,pointerY),ctx.stroke(),ctx.moveTo(pointerX,pointerY-canvasWidth/50*2),ctx.lineTo(pointerX,pointerY+canvasWidth/50*2),ctx.stroke()},ifCanvasEnd=function(){for(var e=0;e<enemyArray.length;e++)enemyArray[e].x<0?enemyArray[e].xDirection="+":enemyArray[e].y<0?enemyArray[e].yDirection="+":enemyArray[e].x+canvasWidth/35>canvasWidth?enemyArray[e].xDirection="-":enemyArray[e].y+canvasWidth/40>canvasHeight&&(enemyArray[e].yDirection="-")},changeEnemyPosition=function e(){for(var n=0;n<enemyArray.length;n++)"+"==enemyArray[n].xDirection?enemyArray[n].x=enemyArray[n].x+speed:enemyArray[n].x=enemyArray[n].x-speed,"+"==enemyArray[n].yDirection?enemyArray[n].y=enemyArray[n].y+speed:enemyArray[n].y=enemyArray[n].y-speed;ifCanvasEnd(),setTimeout(e,10)},changeEnemyDirection=function e(n){var t=1e3*(Math.floor(5*Math.random())+1);Math.floor(2*Math.random())+1==1?enemyArray[n].xDirection="+":enemyArray[n].xDirection="-",Math.floor(2*Math.random())+1==1?enemyArray[n].yDirection="+":enemyArray[n].yDirection="-",enemyArray[n].changeD=setTimeout(function(){e(n)},t)},clearCanvas=function(){ctx.clearRect(0,0,ctx.width,ctx.height),ctx.beginPath()},draw=function(){clearCanvas(),drawBackground(),drawEnemies(),drawPointer()},canvasEvent=function(e){pointerX=e.clientX-leftCanvas,pointerY=e.clientY-topCanvas},mouseMoveEvent=function(){document.addEventListener("mousemove",canvasEvent)},mainLoop=function(){setTimeout(changeEnemyPosition,10),setInterval(draw,5)},expolosionVar=exsplosionsArray[0],expolosion=function(e){ctx.drawImage(expolosionVar,e.clientX-leftCanvas-canvasWidth/35,e.clientY-topCanvas-canvasWidth/40,canvasWidth/15,canvasWidth/20)},setCurrentExplosion=function e(){if(expolosionVar==exsplosionsArray[8])expolosionVar=exsplosionsArray[0];else{var n=exsplosionsArray.indexOf(expolosionVar)+1;expolosionVar=exsplosionsArray[n],setTimeout(e,30)}},drawExplosion=function(e){setCurrentExplosion();var n=setInterval(function(){expolosion(e)},10);setTimeout(function(){clearInterval(n)},240)},addPoint=function(){},removeEnemy=function(){},addNewEnemy=function(){},checktHit=function(e){for(var n=0;n<enemyArray.length;n++)e.clientX-leftCanvas>enemyArray[n].x&&e.clientX-leftCanvas<enemyArray[n].x+canvasWidth/35&&e.clientY-topCanvas>enemyArray[n].y&&e.clientY-topCanvas<enemyArray[n].y+canvasWidth/40&&drawExplosion(e)},clickEvent=function(e){checktHit(e)},mouseClickEvent=function(){canvas.addEventListener("click",clickEvent)},removeClickEvent=function(){canvas.removeEventListener("click",clickEvent)},startEvent=function(e){speed=1,mouseMoveEvent(),mouseClickEvent(),e.classList.add("flash"),setTimeout(function(){e.innerHTML="Stop",setTimeout(function(){e.classList.remove("flash")},250)},250)},stopEvent=function(e){speed=0,removeClickEvent(),e.classList.add("flash"),setTimeout(function(){e.innerHTML="Start",setTimeout(function(){e.classList.remove("flash")},250)},250)},buttonEvent=function(){var e=document.querySelector("#startStopButton");e.addEventListener("click",function(){"Start"==e.innerHTML?startEvent(e,speed):stopEvent(e,speed)})},enemyArrayPush=function(){return enemyArray.push({id:enemyArray.length+1,x:Math.floor(Math.random()*canvasWidth)+1,y:Math.floor(Math.random()*canvasHeight)+1,xDirection:"+",yDirection:"-",changeD:"",angle:90}),enemyArray.length-1},createEnemy=function(){var e=enemyArrayPush();enemyArray[e].changeD=changeEnemyDirection(e)},deleteEnemy=function(){};canvas.height=canvasHeight,canvas.width=canvasWidth,buttonEvent(),mainLoop(),mouseMoveEvent(),createEnemy();