let h4 = document.querySelector("h4");
let hScore = document.querySelector(".high-score");
let resetBtn = document.querySelector(".reset");
let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;
let highScore = localStorage.getItem("highScore") || 0;
hScore.innerHTML = `High Score: ${highScore}`;
let btns = ["yellow", "red", "green", "purple"];

document.addEventListener("keydown", function () {
    if (started == false) {
        console.log("Game started");
        started = true;
        levelUp();
    }

})

function levelUp() {
    userSeq = [];
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
    if (!started) return;
    let btn = this;
    btnFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkSeq(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
function checkSeq(idx) {
    if (gameSeq[idx] === userSeq[idx]) {
        if (gameSeq.length == userSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        if (level > highScore) {
            highScore = level;
            localStorage.setItem("highScore", highScore);
            hScore.innerHTML = `High Score: ${highScore}`;
        }
        h4.innerHTML = `Game Over!<br>Your score: <b>${level}</b><br>Press any key to restart.`;
        reset();
    }
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = []
    level = 0;
}

resetBtn.addEventListener("click", function () {
    localStorage.removeItem("highScore");
    highScore = 0;
    hScore.innerHTML = `High Score: ${highScore}`;
    resetBtnHeading();
    reset();
})

function resetBtnHeading() {
    h4.innerHTML = `High score has been reset!<br>Press any key to start a new game.`;
    setTimeout(() => {
        h4.innerHTML = "Press any key to start Simon Says";
    }, 2000);
}
