let hours = 0;
let mins = 0;
let sec = 0;
let interval;
function update(){
    sec++;
    if(sec===60){
        sec=0;
        mins++;
    }
    if(mins===60){
        mins=0;
        hours++;
    }
    document.getElementById("display").innerText=(hours<10?'0':'')+hours+":"+(mins<10?'0':'')+mins+":"+(sec<10?'0':'')+sec;
}
function start(){
    if(!interval){   //1000ms = 1 sec
        interval = setInterval(update ,1000 );   
    }
}
function stop(){
    clearInterval(interval);
    interval= null;
}
function reset(){
    stop();
    sec=0;
    mins=0;
    hours=0;
    document.getElementById("display").innerText="00:00:00";
}
// The End