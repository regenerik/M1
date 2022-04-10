'use strict'
// No cambies los nombres de las funciones.

function factorear(num) {
  // Factorear el número recibido como parámetro y devolver en un array
  // los factores por los cuales se va dividiendo a dicho número (De menor a mayor)
  // Ej: factorear(180) --> [1, 2, 2, 3, 3, 5] Ya que 1x2x2x3x3x5 = 180 y son todos números primos
  // Tu código:
  let arr = [1];
  let div = 2
  while(num !== 1){
    if(num%div === 0){
      arr.push(div);
      num = num/div;
    }else div++
  }
  return arr;
}

function bubbleSort(array) {
  // Implementar el método conocido como bubbleSort para ordenar de menor a mayor
  // el array recibido como parámetro
  // Devolver el array ordenado resultante
  // Tu código:
  let corte = true;
  while(corte){
    corte = false;
    for(var i = 0 ; i < array.length -1 ; i++){
      if(array[i]>array[i+1]){
        var guardado = array[i];
        array[i] = array[i+1];
        array[i+1]= guardado;
        corte = true;
      }
    }
  }
  return array;
  /*version 2 de for anidado interesante...
  for(let i=0, i< array.length ; i++){
    for(let j=0; j<array.length -1 ; j++){
      if(array[j]>array[j+1]){
        let bubble = array[j]
        array[j]=array[j+1]
        array[j+1]= bubble
      }
    }
  }
  return array */
}


function insertionSort(array) {
  // Implementar el método conocido como insertionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando arreglos
  // Devolver el array ordenado resultante
  // Tu código:
  for(let i = 1; i< array.length ; i++){                    // recorremos apartir del segundo valor
    let aux = array[i]                                      //rescatamos el valor para comparar adentro del for del j
    for(let j = 0 ; j < i; j++){                            // el j termina uno antes de i para ser siempre menor que i, eso lo obliga a reiniciarse el for de j y dejar que i avanze uno mas...
      if(aux < array[j]){
        aux = array[j];
        array[j]= array[i]
        array[i]= aux;
      }
    }
  }
return array;
}


function selectionSort(array) {
  // Implementar el método conocido como selectionSort para ordenar de menor a mayor
  // el array recibido como parámetro utilizando dos arreglos
  // Devolver el array ordenado resultante
  // Tu código:

  for(let i = 0 ; i < array.length - 1 ; i++){
    let min = i;
    for(let j = i+1; j < array.length ;j++){
     if(array[j] < array[min]){
      min = j;
     }
    }
    
    if(i !== min){
      let aux = array[i];
      array[i] = array[min];
      array[min] = aux
    }
  }
  return array;
  /* SEGUNDA OPCION PARECIDA
  for(let i = 0 ; i < array.length ; i++){
    let min = array[i]
    let current = i
    for(let j=i+1 ; j < array.length; j++)^
    if(min > array[j]){
      min = array[j]
      current = j
    }
    if(current!== i){
      array[current] = array[i]
      array[i]= min
    }
  }
  return array;
  */
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  factorear,
  bubbleSort,
  insertionSort,
  selectionSort,
};
