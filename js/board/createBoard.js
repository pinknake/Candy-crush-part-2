const boardSize = 8

const colors = [
"red",
"yellow",
"blue",
"green",
"purple"
]

const board = document.getElementById("gameBoard")


function createBoard(){

board.innerHTML=""

for(let i=0;i<boardSize*boardSize;i++){

let candy=document.createElement("div")

candy.className="candy"
candy.draggable=true
  candy.dataset.index = i

let color=getRandomColor()

candy.style.background=color

board.appendChild(candy)

}

}


function getRandomColor(){

return colors[Math.floor(Math.random()*colors.length)]

}
