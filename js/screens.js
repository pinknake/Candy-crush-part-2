const startBtn=document.getElementById("startBtn")
const backBtn=document.getElementById("backBtn")
const exitGame=document.getElementById("exitGame")

const startScreen=document.getElementById("startScreen")
const levelScreen=document.getElementById("levelScreen")
const gameScreen=document.getElementById("gameScreen")

startBtn.onclick=()=>{

startScreen.classList.add("hidden")
levelScreen.classList.remove("hidden")

}

backBtn.onclick=()=>{

levelScreen.classList.add("hidden")
startScreen.classList.remove("hidden")

}

exitGame.onclick=()=>{

gameScreen.classList.add("hidden")
levelScreen.classList.remove("hidden")

}

function startGame(level){

levelScreen.classList.add("hidden")
gameScreen.classList.remove("hidden")

document.getElementById("levelTitle").innerText="Level "+level

createBoard()

}
