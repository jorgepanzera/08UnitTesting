const { addNumbers, multiplyNumbers } = require('../src/funciones');

// Test cases para sumar y multiplicar
// Algunos casos prueban casos mal

describe('addNumbers', () => {
    test('adds two numbers correctly', () => {
      expect(addNumbers(2, 3)).toEqual(5); // OK
      expect(addNumbers(4, 6)).toEqual(10); // OK
cle    });

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
  