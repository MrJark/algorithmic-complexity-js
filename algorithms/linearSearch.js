/**
* Complejidad Temporal -> O( n )
* Complejidad Espacial -> O(  )
* Espacio Auxiliar -> O(  )
*/
function linearSearch(arreglo, clave) {
 for (let indice = 0; indice < arreglo.length; indice++) { //O(n)
   if (arreglo[indice] === clave) {//0(1)
     return indice;//0(1)
   }
 }
 return -1;//0(1)
}