const boardSize = 8
const colors = ["red","yellow","green","blue","purple","orange"]

const board = document.getElementById("gameBoard")

let selectedCandy = null
let score = 0

function randomColor(){
return colors[Math.floor(Math.random()*colors.length)]
}

function createBoard(){

board.innerHTML=""

for(let i=0;i<boardSize*boardSize;i++){

let candy=document.createElement("div")

candy.className="candy"

candy.style.background=randomColor()

candy.dataset.index=i

board.appendChild(candy)

}

}

/* ---------- SWAP SYSTEM ---------- */

document.addEventListener("click",function(e){

if(!e.target.classList.contains("candy")) return

if(selectedCandy===null){

selectedCandy=e.target
selectedCandy.style.outline="3px solid white"

}else{

if(selectedCandy===e.target){

selectedCandy.style.outline="none"
selectedCandy=null
return

}

swapCandies(selectedCandy,e.target)

selectedCandy.style.outline="none"
selectedCandy=null

}

})


function swapCandies(c1,c2){

if(!isValidSwap(c1,c2)) return
  playSwap()

let temp=c1.style.background

c1.style.background=c2.style.background
c2.style.background=temp

setTimeout(()=>{

checkMatches()

},100)

}


/* ---------- VALID SWAP ---------- */

function isValidSwap(c1,c2){

const i1=parseInt(c1.dataset.index)
const i2=parseInt(c2.dataset.index)

const diff=Math.abs(i1-i2)

if(diff===boardSize) return true

if(diff===1){

const row1=Math.floor(i1/boardSize)
const row2=Math.floor(i2/boardSize)

if(row1===row2) return true

}

return false

}


/* ---------- MATCH CHECK ---------- */

function checkMatches(){

const candies=document.querySelectorAll(".candy")

// horizontal
for(let i=0;i<64;i++){

if(i%8>5) continue

let c1=candies[i]
let c2=candies[i+1]
let c3=candies[i+2]

if(
c1.style.background===c2.style.background &&
c2.style.background===c3.style.background
){

removeCandy(c1,c2,c3)

}

}

// vertical
for(let i=0;i<48;i++){

let c1=candies[i]
let c2=candies[i+8]
let c3=candies[i+16]

if(
c1.style.background===c2.style.background &&
c2.style.background===c3.style.background
){

removeCandy(c1,c2,c3)

}

}

}


/* ---------- REMOVE CANDY ---------- */

function removeCandy(c1,c2,c3){

c1.style.background="black"
c2.style.background="black"
c3.style.background="black"
  playMatch()

score+=10

setTimeout(()=>{

applyGravity()

},200)

}


/* ---------- GRAVITY ---------- */

function applyGravity(){

const candies=document.querySelectorAll(".candy")

for(let i=55;i>=0;i--){

if(candies[i+8].style.background==="black"){

candies[i+8].style.background=candies[i].style.background

candies[i].style.background=randomColor()

}

}

setTimeout(()=>{

checkMatches()

},200)

}


/* ---------- START GAME ---------- */

createBoard()

