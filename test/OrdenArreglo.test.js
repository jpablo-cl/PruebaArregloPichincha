const {OrdenarArreglo} = require ('../src/PruebaArreglo2')


describe('OrdenarArreglo', () => {

  test('Verificar que no retorne lista vacía o null', () => {
    // Caso de prueba cuando se ordena una lista no vacía
    let array = [3, 1, 4, 1, 5, 9];
    let arr = OrdenarArreglo(array);
    expect(arr).not.toBe(null);
    expect(arr).not.toEqual([]);
  });

  test('Verificar en caso que venga la lista nula o vacía mensaje de error.', () => {
    // Caso de prueba cuando la lista es nula
    expect((arr) => OrdenarArreglo(null)).toThrowError('El arreglo no puede ser nulo o vacío.');
  
    // Caso de prueba cuando la lista es vacía
    expect((arr) => OrdenarArreglo([])).toThrowError('El arreglo no puede ser nulo o vacío.');
  });

  test('Verificar que la lista devuelta esté ordenada de acuerdo al parámetro enviado', () => {
    const array = [1,4,7,3,9,2];
    const resultado = OrdenarArreglo(array);
    expect(resultado).toEqual([1,2,3,4,7,9]);
  });

  test('Verificar que la lista devuelta sea de la misma longitud que la lista enviada.', () => {
    const array = [3, 1, 4, 1, 5, 9];
    const arr = OrdenarArreglo(array);
    expect(arr).toHaveLength(arr.length);
  });

});
