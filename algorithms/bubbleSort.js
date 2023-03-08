/**
 * Complejidad Temporal -> O( 1 + n + n + 1 + 1 + 1 + 1 + 1) = (n*n*6) = (n * n) = ( n^2 )
 * Complejidad Espacial -> O( n + 4 ) = O(n)
 * Espacio Auxiliar -> O( 4 ) = O(1)
 */
function bubbleSort(arreglo) {
    let longitud = arreglo.length; //O(1) es una variable, es cte | O(n)
    for (let i = 0; i < longitud; i++) {// O(n) es n porque el ciclo se repite tanto como sea su length, es decir, n | O(1)
      for (let j = 0; j < longitud; j++) { //O(n) es n por el mismo motivo que el anterior| O(1)
        if (arreglo[j] > arreglo[j + 1]) {//O(1) 
          let temporal = arreglo[j];//0(1) variable, es cte | O(1)
          arreglo[j] = arreglo[j + 1];//O(1) 
          arreglo[j + 1] = temporal;//O(1)
        }
      }
    }
    return arreglo;//0(1)
}