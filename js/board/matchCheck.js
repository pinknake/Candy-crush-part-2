function checkMatches(){

const candies=document.querySelectorAll(".candy")

let matched=[]

// horizontal

for(let i=0;i<boardSize*boardSize;i++){

if(i%boardSize>boardSize-3) continue

let c1=candies[i]
let c2=candies[i+1]
let c3=candies[i+2]

if(
c1.style.background &&
c1.style.background==c2.style.background &&
c2.style.background==c3.style.background
){

matched.push(c1,c2,c3)

}

}

// vertical

for(let i=0;i<boardSize*(boardSize-2);i++){

let c1=candies[i]
let c2=candies[i+boardSize]
let c3=candies[i+boardSize*2]

if(
c1.style.background &&
c1.style.background==c2.style.background &&
c2.style.background==c3.style.background
){

matched.push(c1,c2,c3)

}

}

removeMatches(matched)

}

function removeMatches(list){

let unique=[...new Set(list)]

unique.forEach(candy=>{

playPopAnimation(candy)

candy.style.background=""

})

updateScore(unique.length*10)

increaseCombo()

setTimeout(()=>{

applyGravity()

},200)

}
