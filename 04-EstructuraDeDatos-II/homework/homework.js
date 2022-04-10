'use strict'
// Implementa la clase LinkedList
// tiene metodos `add`, `remove`, y `search`
// add: Agrega un nuevo nodo en el final de la lista
// Ej:      Head --> null
// add(1):  Head --> 1 --> null
// add(2):  Head --> 1 --> 2 --> null
// remove:  Elimina el último nodo de la lista y devuelve su valor. (Tener en cuenta el caso particular de una lista de un solo nodo y de una lista vacía)
// Ej:         Head --> 1
// remove():   Head --> null y devuelve 1
// search: Busca un valor dentro de la lista. Puede recibir un valor o una función. Si no hubiera resultados, devuelve null.

function LinkedList() {
  this._length = 0;
  this.head=null;
}

function Node(value){
  this.value = value;
  this.next = null;
}

LinkedList.prototype.add= function(value){
  var node = new Node(value)
  var current = this.head
  if(!current){              // current === nul... o "si current/head no existe"
    this.head = node;        // el head toma el valor de node ( el primero creado )
    this._length++;          // incrementamos el length a 1 ( ahora tenemos 1 longitud)
    return node;             // devolvemos el node :)
  }
  while(current.next){                     //
    current = current.next;
  }
  current.next = node;
  this._length;
  return node;
}


LinkedList.prototype.remove = function(){
  let current = this.head                    //le damos a current la direccion de memoria de head
  if(!current){                              //si  head apunta a null ( o sea no hay nada en el ) referenciado por current
    return null;                             // devolver null
  }
  if(!current.next){                         // 
    let guardado = current.value;            // guardando valor del unico nodo en variable
    this.head = null;                        // el head le apunta a null !
    this._length--;
    return guardado;                         // devuelvo el valor eliminado previamente guardado
  }
  while(current.next.next){                  //
    current = current.next;
  }
    let guardado = current.next.value;
    current.next = null
    return guardado;
}

LinkedList.prototype.search= function(arg){
  if(this.head === null){                         //si el valor de la cabezera es null..
    return null;                                  // de una le retornamos null
  }
  let current = this.head;                        //creamos el current con valor de this.head
  while(current){                                 //mientras current no sea null..
    if(current.value === arg){                  //si el valor coincide
      return current.value;                       // devolver el valor
    }else if(typeof (arg) === "function"){       // o si el valor es una funcion
      if(arg(current.value)){                   // y ademas el valor pasado por parametro de la funcion call nos da algo true..
        return current.value;                     // devolvemos el valor
      }
    }
    current = current.next;                       //Si no encontro el valor ni era una funcion,, vamos al siguiente nodo
  }                                               //Si cortó el while sin devolver nada no encontró funciones con resultado truthy ni valores match
return null;                                      //Por lo cual se devuelve null ( ya que no hubo ni match ni funcionalidades truthy)
}




// Hash Table( ver información en: https://es.wikipedia.org/wiki/Tabla_hash)
// Una Hash table contiene un arreglo de "contenedores" o buckets donde puede guardar información.
// Para este ejercicio, generar 35 buckets para la Hash Table, y realizar los métodos, get, hasKey
// Para almacenar un valor asociado a una key (string):
//    - Se pasa ese valor a la función hash(Pista: usar la función charCodeAt), que determina la posición en que debe ir en el arreglo. 
//    - Luego el elemento se inserta(llamando al método set) en la posición(índice) devuelta. 
// Para buscar el valor por su key:
//    - Sólo habrá que pasarle a la función hash la clave del elemento a buscar y ésta determinará la posición 
//      en que se encuentra.
//    - Usar el número obtenido, para buscar(llamando al método get) el contenedor o bucket donde está el valor.
//    - Retornar dicho valor.

function HashTable() {
  this.buckets = [];
  this.numBuckets = 35;

}


HashTable.prototype.hash = function(key){
  let sum = 0;
  for(let i = 0; i < key.length ; i++){
    sum += key.charCodeAt(i);
  }
  return sum % this.numBuckets;   // Si agarro un numero y lo divido por 35 en este caso ,..el resto dará algo entre 0 y 35
};


HashTable.prototype.set = function(key,value){
  let index = this.hash(key)
  if(typeof key !== "string") throw new TypeError("Keys must be strings"); // si no es un string devuelve error predefinido
  if(this.buckets[index]=== undefined){         // si el valor todavia no esta definido
    this.buckets[index] = {};                    /// Creamos un objeto en el bucket :D ! 
  }       //                                   y despues...
  this.buckets[index][key] = value;       //array con  objeto con propiedad con valor almacenado !  (almaceno valor en obj)
                                          // buckets  [index]     [  key  ]   =  [    value    ]
};

HashTable.prototype.get = function(key){
  let index = this.hash(key)              //Expongo la prop a funcion hash, me da el local,.
  return this.buckets[index][key];               // buscamos esa posicion en especifico que valor tiene.. ( y listo)
                                          //this.buckets = []
                                          //this.buckets[4] = {};
                                          //this.bcukets[4]["casa"] = "Valor, tipo de casa"
};

HashTable.prototype.hasKey = function(key){
  let index = this.hash(key);
  return this.buckets[index].hasOwnProperty(key);
};

let myTabla = new HashTable();

// No modifiquen nada debajo de esta linea
// --------------------------------

module.exports = {
  Node,
  LinkedList,
  HashTable
};
