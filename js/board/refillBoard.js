function refillBoard(){

const candies=document.querySelectorAll(".candy")

for(let i=0;i<8;i++){

if(candies[i].style.background==""){

candies[i].style.background=randomColor()

}

}

}
