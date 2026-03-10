function removeCandy(c1,c2,c3){

c1.style.background="black"
c2.style.background="black"
c3.style.background="black"

setTimeout(()=>{

applyGravity()

},200)

}



function applyGravity(){

const candies=document.querySelectorAll(".candy")

for(let i=55;i>=0;i--){

if(candies[i+8].style.background=="black"){

candies[i+8].style.background=candies[i].style.background
candies[i].style.background=randomColor()

}

}

}
