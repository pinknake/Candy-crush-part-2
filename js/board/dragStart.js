let draggedCandy = null

function handleDragStart(e){

if(!e.target.classList.contains("candy")) return

draggedCandy = e.target

}

document.addEventListener("dragstart",handleDragStart)
