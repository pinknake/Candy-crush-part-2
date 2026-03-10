const levelContainer = document.getElementById("levelContainer")

for(let i=1;i<=20;i++){

let level=document.createElement("div")

level.className="levelBtn"
level.innerText=i

level.onclick=()=>{

startGame(i)

}

levelContainer.appendChild(level)

}
