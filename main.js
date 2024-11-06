var date=new Date();
var h=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();

var timer1;
var flag_start=false;




function nima(){
let b="majid";
s=s+1;


if (s>59){
    m=m+1;
    s=0;
}


if (m>59){
    h=h+1;
    m=0;
}


if (h>23){
    h=0;
}





document.getElementById("div1").innerHTML = h+":"+m+":"+ s;

}


function start(){
    if(flag_start==false){
     flag_start=true;
    timer1=setInterval(nima,1000);
    document.getElementById("btn_start").disabled =true;
    document.getElementById("btn_stop").disabled =false;
    document.getElementById("btn_reset").disabled =false;
}
   }

function stop(){
    clearInterval(timer1);
    flag_start=false; 
    document.getElementById("btn_start").disabled =false;
    document.getElementById("btn_stop").disabled =true;

}

function reset(){
    stop();
    s=0;
    m=0;
    h=0;
    document.getElementById("div1").innerHTML ='00:00:00';
    flag_start=false
    document.getElementById("btn_start").disabled =false;
    document.getElementById("btn_stop").disabled =true;
    document.getElementById("btn_reset").disabled =true;

}