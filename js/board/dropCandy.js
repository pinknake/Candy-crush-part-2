let replacedCandy = null

function handleDrop(e){

if(!e.target.classList.contains("candy")) return

replacedCandy = e.target

swapCandies(draggedCandy,replacedCandy)

}

document.addEventListener("drop",handleDrop)
