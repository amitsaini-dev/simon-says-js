let h4 = document.querySelector("h4");
let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

let btns = ["yellow", "red", "green", "purple"];

document.addEventListener("keydown", function () {
    if (started == false) {
        console.log("Game started");
        started = true;
        levelUp();
    }
    
})

function levelUp() {
    userSeq=[];
    level++;
    h4.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4);
    let randomColor = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomColor}`)
    btnFlash(randombtn);
    gameSeq.push(randomColor);
    console.log(gameSeq);
}

function btnFlash(btn) {
    btn.classList.add("flash")
    setTimeout(function () {
        btn.classList.remove("flash")
    }, 200)
}

function btnPress() {
    if(!started) return;
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkSeq(userSeq.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function checkSeq(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if(gameSeq.length==userSeq.length){
            setTimeout(levelUp,1000);
        }
    }
    else {
        h4.innerHTML = `Game Over!<br> <b> Your score was ${level} <br> Press any key to start Game Again`;
        reset();
    }
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[]
    level=0;
}