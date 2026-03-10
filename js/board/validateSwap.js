function isValidSwap(c1,c2){

const i1=parseInt(c1.dataset.index)
const i2=parseInt(c2.dataset.index)

const diff=Math.abs(i1-i2)

// vertical check
if(diff===boardSize) return true

// horizontal check
if(diff===1){

const row1=Math.floor(i1/boardSize)
const row2=Math.floor(i2/boardSize)

if(row1===row2) return true

}

return false

}
