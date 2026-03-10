const boardSize=8

const colors=[
"red",
"yellow",
"blue",
"green",
"purple"
]

function createBoard(){

const board=document.getElementById("gameBoard")

board.innerHTML=""

for(let i=0;i<boardSize*boardSize;i++){

let candy=document.createElement("div")

candy.className="candy"

let randomColor=colors[Math.floor(Math.random()*colors.length)]

candy.style.background=randomColor

board.appendChild(candy)

}

}
function randomColor(){

return colors[Math.floor(Math.random()*colors.length)]

}
