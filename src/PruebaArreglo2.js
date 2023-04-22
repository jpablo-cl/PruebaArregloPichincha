// //Ordenando arreglo con metodo burbuja
let array = [1,4,7,3,9,2];

function OrdenarArreglo (arr) {

    if (!arr || arr.length === 0) 
    {
      throw new Error("El arreglo no puede ser nulo o vacío.");
      return;
    }

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) { 

            if (arr[j] > arr[j+1]) {
              [arr[j], arr[j+1]] = [arr[j+1], arr[j]]
            }

            
        }
    }
    return arr;
}
console.log("Arreglo desordenado");
console.log((array)); 
console.log("Ordenamiento ascendente");
console.log(OrdenarArreglo(array));
module.exports = {OrdenarArreglo:OrdenarArreglo}

