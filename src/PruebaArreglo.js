//Funcion que ordena un arreglo

// declaramos el arreglo 
let arreglo = [7,5,4,2,3,6];
function ordenarArreglo(Arreglo, orden) 
 {
    if (!arreglo || arreglo.length === 0) 
    {
      console.error("El arreglo no puede ser nulo o vacío.");
      return;
    }
    if (orden === "ascendente") 
    {
      return arreglo.sort(function(a, b) {
        return a - b;
      });
    } 
    // else if (orden === "descendente") 
    // {
    //   return arreglo.sort(function(a, b) {
    //     return b - a;
    //   });    
    //  }     
  }
  console.log("Arreglo desordenado");
  console.log((arreglo)); 
  console.log("Ordenamiento ascendente");
  console.log(ordenarArreglo(arreglo, "ascendente")); 
  // console.log("Ordenamiento descendente");
  // console.log(ordenarArreglo(arreglo, "descendente")); 
  
 