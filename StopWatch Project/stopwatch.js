let [sec, min, hrs]= [0,0,0];
let time=document.getElementById("time");
let timer=null;

function stopwatch(){
    sec++;
    if(sec==60){
        sec=0;
        min++;
        if(min==60){
            min=0;
            hrs++;
        }
    }
    let h= hrs<10 ? "0"+hrs :hrs;
    let m= min<10 ? "0"+min :min;
    let s= sec<10 ? "0"+sec :sec;

    time.innerHTML= h+":"+m+":"+s;
}



function start(){
    if(timer!==null){
        clearInterval(timer);
    }
    timer=setInterval(stopwatch,1000);
}

function pause(){
    clearInterval(timer);

}
function reset(){
    clearInterval(timer);
    [sec, min, hrs]= [0,0,0];
    time.innerHTML="00:00:00";

}


