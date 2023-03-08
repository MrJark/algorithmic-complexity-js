/**
* Complejidad Temporal -> O( n )
* Complejidad Espacial -> O( n + 1 ) = O(n)
* Espacio Auxiliar = Complejidad espacial - Espacio de Entrada -> O( n ) - O(1) = O(1)
*/
function linearSearch(arreglo, clave) { //O(n) | //O(n)
 for (let indice = 0; indice < arreglo.length; indice++) { //O(n) | O(1)
   if (arreglo[indice] === clave) {//0(1) | En estos 3 siguienes no creamos más espacio, solo es en los anteriores
     return indice;//0(1)
   }
 }
 return -1;//0(1)
}