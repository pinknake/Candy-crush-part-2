function isValidSwap(c1,c2){

const i1=parseInt(c1.dataset.index)
const i2=parseInt(c2.dataset.index)

const diff=Math.abs(i1-i2)

if(diff==1 || diff==8){

return true

}

return false

}
