let startEvent = (button)=>{
    
    button.classList.add('flash');
    
    setTimeout(()=>{
        button.innerHTML = 'Stop';
        setTimeout(()=>{
            button.classList.remove('flash');
        },250);
    },250);
    
};

let stopEvent = (button)=>{
    
   button.classList.add('flash');

    setTimeout(()=>{
        button.innerHTML = 'Start';
        setTimeout(()=>{
            button.classList.remove('flash');
        },250);
    },250);
    
};

let buttonEvent = ()=>{
    
    let button = document.querySelector('#startStopButton');
    
    button.addEventListener('click',()=>{
       
        if(button.innerHTML == "Start"){
            startEvent(button,speed);
        }else{
            stopEvent(button,speed);
        }
        
    });
    
};

