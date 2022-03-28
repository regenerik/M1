'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let arrayCont = 0;
let numEnString = num.toString().split('').reverse();
for(let i = 0; i < numEnString.length ; i++){
  arrayCont += (numEnString[i])*(2**i);
}
//Preguntar al profe por que catso el for invertido o no invertido funciona de la misma manera :

return arrayCont;
}

function DecimalABinario(num) {
  // tu codigo aca
  //
  let acumulaDigito = [];// acumulaDigito = [1,0,0,1] // "1001"
  let modificable = num;
  while(modificable !== 0){
    acumulaDigito.push(modificable % 2)
    modificable = Math.floor(modificable / 2)
  }
  return acumulaDigito.reverse().join('');
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}

/*             "1101"  = 13
- split        ["1","1","0","1"]  
- reverse      ["1","0","1","1"] valores

- for/key        0   1   2   3
- ^              ^   ^   ^   ^
- 2              2   2   2   2
- result 1       1   2   4   8  
--------------------------------
- *valor         1   0   4   8   =  13



- reverse      ["1","0","1","1"] valores
- forInv/key     0   1   2   3
- ^              ^   ^   ^   ^
- 2              2   2   2   2
- result 1       8   4   2   1
--------------------------------
- *valor         8   0   2   1   =  11
*/