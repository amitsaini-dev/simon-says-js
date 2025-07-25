let h2=document.querySelector("h2");
let gameSeq=[];
let userSeq=[];
let started=false;
let level=0;

let btns=["yellow","red","green","purple"];

document.addEventListener("keydown",function(){
    if(started==false){
        console.log("Game started");
        started=true;
    }
    levelUp();
})

function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;

    let randomIdx=Math.floor(Math.random()*4);
    let randomColor=btns[randomIdx];
    let randombtn=document.querySelector(`.${randomColor}`)
    btnFlash(randombtn);
}

function btnFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash")
    },200)
}