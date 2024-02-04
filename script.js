var timer = 60;
var score = 0;
function increasescore(){
    score += 10;
    document.querySelector("#scoreval").textContent  =  score;

}
function getnewhit(){
    var hit= Math.floor(Math.random()*10)
    document.querySelector("#hitval").textContent = hit;
}
function makebubble(){
    var clutter = "";
for (let index = 0; index < 168; index++) {
    var rn = Math.floor(Math.random()*10);
    clutter +=`<div id="bubble">${rn}</div>`
    
}
document.querySelector("#conbtm").innerHTML = clutter
}
function runtimer(){

var timerint = setInterval(function(){
        if(timer>0){

            timer --;
            document.querySelector("#timerval").textContent = timer;
        }
        else{
            clearInterval(timerint);
        }
        
    },1000)
}
runtimer();
makebubble();
getnewhit();
// increasescore();
// increasescore();
// increasescore();
// increasescore();
// increasescore();