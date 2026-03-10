function checkMatches(){

const candies=document.querySelectorAll(".candy")

// horizontal

for(let i=0;i<64;i++){

if(i%8>5) continue

let c1=candies[i]
let c2=candies[i+1]
let c3=candies[i+2]

if(
c1.style.background==c2.style.background &&
c2.style.background==c3.style.background
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
c1.style.background==c2.style.background &&
c2.style.background==c3.style.background
){

removeCandy(c1,c2,c3)

}

}

}

function removeCandy(c1,c2,c3){

playPopAnimation(c1)
playPopAnimation(c2)
playPopAnimation(c3)

c1.style.background="black"
c2.style.background="black"
c3.style.background="black"

updateScore(30)

increaseCombo()

setTimeout(()=>{

applyGravity()

},200)

}
