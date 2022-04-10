'use strict'
// resolve estos ejercicios usando recursión
// Binary Seach Tree
// 'tiene metodos llamados `insert`, `contains`, `depthFirstForEach`, 'breadthFirstForEach' y 'size'
// corre depth-first (en recorrido "in-order") cuando depthFirstForEach() es ejecutado sin ninguna opcion o con la opcion "in-order
// corre depth-first (en recorrido "pre-order") cuando depthFirstForEach() es ejecutado con la opcion "pre-order"
// corre depth-first (en recorrido "post-order" cuando depthFirstForEach() es ejecutado con la opcion "post-order"
// corre breadth-first cuando breadthFirstForEach() es ejecutado
// Observar imagen de la carpeta "homework" llamada "bst.png". Allí encontraran dibujado el arbol utilizado para los tests
function BinarySearchTree(value) {
  this.value = value
  this.right = null;
  this.left = null;
}

BinarySearchTree.prototype.size = function(){            //CHEQUEADO!!

  if(!this.left && !this.right) return 1                 //No tiene ni izq ni der. y solo suma 1.
  if(this.left === null) return 1 + this.right.size()    //no hay izq. pero si derecha.  devuelve 1 y el arbol de la derecha   lo somete a size nuevamente.
  if(this.right === null ) return 1 + this.left.size()   //no hay der. pero si izquierda.devuelve 1 y el arbol de la izquierda lo somete a size nuevamente.
  return 1 + this.left.size() + this.right.size()        //Tiene los 2 asique suma los 2 returns de las condiciones anteriores para que se ramifique hasta llegar a los límites donde no tenga más.

  }

BinarySearchTree.prototype.insert = function(value){        //CHEQUEADO ! ! 
  
  if (value === this.value) return undefined               //valor igual

  if (value > this.value){                                  //valor mayor
      if(!this.right){                                      //si no hay nada a la derecha...
        this.right = new BinarySearchTree(value)            //ahora derecha es nuevo arbol con valor pasado por parámetro
      } else this.right.insert(value);

  } else if (value < this.value){                            //valor menor
        if (!this.left) {                                    //si no existe left
          this.left = new BinarySearchTree(value)            //se hubica ahi mi nuevo arbol
        }
        else this.left.insert(value)                         //si existia left
                                                             //recursividad apartir del arbol naciente en left
  }

}




BinarySearchTree.prototype.contains = function(value){      //CHEQUEADO!!!!
  if (value === this.value) return true                     //el valor es igual al valor del arbol actual? ok

  if (value > this.value) {                                 //Si el valor de parámetro es mayor que el actual
    if (!this.right) return false                           //Si no hay nada al a derecha el valor no está //informamos que no está
    else return this.right.contains(value)                 //el right existe //devuelvo la recursividad de nodo a la derecha.

  } else {                                                 //Si el valor es mas chico
    if (!this.left) return false                            //Y no hay nada a la izquierda//devuelve false
    return this.left.contains(value);                      //pero si hay algo a la izquierda//devuelvo la recursividad de nodo a la izquierda.
                        
    }
  }




BinarySearchTree.prototype.breadthFirstForEach = function(cb, queue){     //nivel por nivel
 if ( !queue ){
   var queue = []
 }
 if (this.left){
   queue.push(this.left)
 }
 if (this.right){
   queue.push(this.right)
 }
 cb(this.value)
 if (queue.length > 0){
   queue.shift().breadthFirstForEach(cb, queue)
 }

}


BinarySearchTree.prototype.depthFirstForEach = function(cb, order) {
  
  if (order === "pre-order"){
    cb(this.value)
    if(this.left) this.left.depthFirstForEach(cb, order)
    if(this.right) this.right.depthFirstForEach(cb, order)
  }
  else if ( order === "post-order" ){
    if(this.left) this.left.depthFirstForEach(cb, order)
    if(this.right) this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }
  else {
    if(this.left) this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if(this.right) this.right.depthFirstForEach(cb, order)
  }

}


// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  BinarySearchTree
};
