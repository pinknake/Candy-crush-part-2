function applyGravity(){

const candies=document.querySelectorAll(".candy")

for(let i=(boardSize*boardSize)-boardSize-1;i>=0;i--){

if(candies[i+boardSize].style.background==""){

candies[i+boardSize].style.background=candies[i].style.background
candies[i].style.background=""

}

}

refillBoard()

}

function refillBoard(){

const candies=document.querySelectorAll(".candy")

for(let i=0;i<boardSize;i++){

if(candies[i].style.background==""){

candies[i].style.background=getRandomColor()

}

}

setTimeout(()=>{

checkMatches()

},200)

}
