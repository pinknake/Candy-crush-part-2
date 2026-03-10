let selectedCandy=null

document.addEventListener("click",function(e){

if(!e.target.classList.contains("candy")) return

if(selectedCandy==null){

selectedCandy=e.target
selectedCandy.style.outline="3px solid white"

}else{

swapCandies(selectedCandy,e.target)

selectedCandy.style.outline="none"
selectedCandy=null

}

})


function swapCandies(c1,c2){

let temp=c1.style.background
c1.style.background=c2.style.background
c2.style.background=temp

setTimeout(()=>{

checkMatches()

},100)

}
