let moves=30

function decreaseMove(){

moves--

document.getElementById("movesValue").innerText=moves

if(moves<=0){

alert("Game Over")

}

}
