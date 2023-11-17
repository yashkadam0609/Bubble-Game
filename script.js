var timer = 60 ;
var score = 0 ;
var rnHit = 0 ;
 
function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score ;
}

function getNewHit(){
    rnHit = Math.floor(Math.random()*10) ;
    document.querySelector("#hitval").textContent = rnHit;
}

function makeBubble(){
    var clutter ="";
    for(var i=0 ;i<=170 ;i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`
    }
document.querySelector("#pbtm").innerHTML=clutter;
}

document.querySelector("#btn")
.addEventListener("click",
function runTimer(){
    var timerInt = setInterval(function(){
        if(timer>0){
            timer--;
        }
        else{
            clearInterval(timerInt)
            var endTxt = document.querySelector("#pbtm");
            endTxt.textContent = "Game Over";
            endTxt.style.fontSize ='70px';
        }
        document.querySelector("#timerval").textContent=timer;
    }, 1000);
})

document.querySelector("#pbtm")
.addEventListener("click",function(details){
  var clickednum = Number(details.target.textContent);
  if(clickednum === rnHit){
    increaseScore()
    makeBubble()
    getNewHit()
  }
}) 

makeBubble()
getNewHit()
runTimer()
