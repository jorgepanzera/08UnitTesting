const { addNumbers, multiplyNumbers, isLowerCase, isUpperCase,checkNull,checkUndefined,checkString,divideNumbers,fetchData,fetchError } = require('../src/funciones');

// Test cases para sumar y multiplicar
// Algunos casos prueban casos mal

describe('addNumbers', () => {
    test('adds two numbers correctly', () => {
      expect(addNumbers(2, 3)).toEqual(5); // OK
      expect(addNumbers(4, 6)).toEqual(10); // OK
    });

    test('adds two numbers incorrectly', () => {
        expect(addNumbers(2, 3)).not.toEqual(6); // Falla
      });    
  
    test('add returns a number', () => {
      expect(typeof addNumbers(2, 3)).toBe('number'); // OK
    });

    test('add not returns a number', () => {
        expect(typeof addNumbers('2', 3)).not.toBe('number'); // Falla
      });    

  });
  
  describe('multiplyNumbers', () => {
    test('multiplies two numbers correctly', () => {
      expect(multiplyNumbers(2, 3)).toEqual(6); // OK
      expect(multiplyNumbers(4, 5)).toEqual(20); // OK
    });

    test('multiplies two numbers incorrectly', () => {
        expect(multiplyNumbers(2, 3)).not.toEqual(8); // Falla
      });    
  
    test('multiply returns a number', () => {
      expect(typeof multiplyNumbers(2, 3)).toBe('number'); // OK
    });

  });
  

  // Testear Uppercase y Lowercase

describe('TestUpperCase', () => {
  test('returns true para uppercase strings', () => {
    expect(isUpperCase('HELLO')).toBe(true); // Passes
    expect(isUpperCase('WORLD')).toBe(true); // Passes
  });

  test('returns false para lowercase strings', () => {
    expect(isUpperCase('hello')).toBe(false); // Passes
    expect(isUpperCase('world')).toBe(false); // Passes
  });

  test('returns false para strings con upper y lower', () => {
    expect(isUpperCase('Hello')).toBe(false); // Passes
    expect(isUpperCase('wORLD')).toBe(false); // Passes
  });
});

describe('TestLowerCase', () => {
  test('returns true para lowercase strings', () => {
    expect(isLowerCase('hello')).toBe(true); // Passes
    expect(isLowerCase('world')).toBe(true); // Passes
  });

  test('returns false para uppercase strings', () => {
    expect(isLowerCase('HELLO')).toBe(false); // Passes
    expect(isLowerCase('WORLD')).toBe(false); // Passes
  });

  test('returns false para strings con upper y lower', () => {
    expect(isLowerCase('Hello')).toBe(false); // Passes
    expect(isLowerCase('wORLD')).toBe(false); // Passes
  });
});



// Test con GreaterThan/LessThan

describe('Test GreaterThan/LessThan', () => {

  test('return valor mayor a 0', () => {
    expect(addNumbers(2, 3)).toBeGreaterThan(0); // Passes
    expect(addNumbers(-3, 2)).not.toBeGreaterThan(0); // Passes
  });

  test('return valor menor que 0', () => {
    expect(addNumbers(2, 3)).not.toBeLessThan(0); // Passes
    expect(addNumbers(-3, 2)).toBeLessThan(0); // Passes
  });

  test('returns valor mayor que 100', () => {
    expect(multiplyNumbers(2, 3)).not.toBeGreaterThan(100); // Passes
    expect(multiplyNumbers(8, 14)).toBeGreaterThan(100); // Passes
  });
 
    
});



// Test null, undefined y toMatch

describe('Check Null value', () => {
  test('returns true para null value', () => {
    expect(checkNull(null)).toBeNull(); // Passes
  });

  test('returns false para non-null values', () => {
    expect(checkNull(5)).not.toBeNull(); // Passes
    expect(checkNull('hello')).not.toBeNull(); // Passes
    expect(checkNull(undefined)).not.toBeNull(); // Passes
  });
});



describe('check Undefined value', () => {
  test('returns true para undefined value', () => {
    let x;
    expect(checkUndefined(x)).toBeUndefined(); // Passes
  });

  test('returns false para defined values', () => {
    expect(checkUndefined(null)).not.toBeUndefined(); // Passes
    expect(checkUndefined(5)).not.toBeUndefined(); // Passes
    expect(checkUndefined('hello')).not.toBeUndefined(); // Passes
  });
});


describe('Check Match en Strings', () => {

  test('returns true para valores que matchean con un substring', () => {
    expect(checkString('hello')).toMatch('he'); // Passes
    expect(checkString('world')).toMatch('wor'); // Passes
  });

  test('returns false para valores que no contienen un substring', () => {
    expect(checkString('hello')).not.toMatch('world'); // Passes
    expect(checkString('world')).not.toMatch('hello'); // Passes
  });
});



// Test de condiciones toContain y toHaveLength

describe('check toContain usando Arrays', () => {
  test('returns true para array que contiene item', () => {
    expect([1, 2, 3]).toContain(2); // Passes
  });

  test('returns false para array que no contiene item', () => {
    expect([1, 2, 3]).not.toContain(4); // Passes
  });

});


describe('check toHaveLenght (string y array)', () => {
  test('returns true para string con un largo correcto', () => {
    expect(checkString('hello')).toHaveLength(5); // Passes
  });

  test('returns false para string con un largo incorrecto', () => {
    expect(checkString('hello')).not.toHaveLength(6); // Passes
  });

  test('returns true para array con un largo correcto', () => {
    expect([1, 2, 3]).toHaveLength(3); // Passes
  });

  test('returns false para array con un largo incorrecto', () => {
    expect([1, 2, 3]).not.toHaveLength(2); // Passes
  });
});



// Test de capturar excepciones

describe('Test captura de excepciones', () => {
  test('tirar exception al dividir entre 0', () => {
    expect(() => divideNumbers(10, 0)).toThrow('Division por zero no permitida.');
  });

  test('no hay excepcion al no dividir entre 0', () => {
    expect(() => divideNumbers(10, 2)).not.toThrow();
  });
});



// Test con Promises (simulando un fetch de una API)

describe('fetchData', () => {
  test('resolves con los datos esperados', () => {
    return expect(fetchData()).resolves.toEqual([1, 2, 3, 4, 5]);
  });

  test('rejects con error', () => {
    return expect(fetchError()).rejects.toThrow('Error en el fetch');
  });
});




