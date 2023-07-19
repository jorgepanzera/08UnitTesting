// Functions to test

function addNumbers(a, b) {
    return a + b;
  }
  
  function multiplyNumbers(a, b) {
    return a * b;
}
  

function isUpperCase(str) {
  return str === str.toUpperCase();
}

function isLowerCase(str) {
  return str === str.toLowerCase();
}

// User functions

function checkNull(value) {
  if (value || (value===undefined))
    return value
  else
    return null
}

function checkUndefined(value) {
  if (value || (value===null))
    return value
  else
    return undefined
}

function checkString(value) {
  return value;
}

// Auxiliary function

function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error('Division por zero no permitida.');
  }
  return a / b;
}

// Funcion que simula un fetch y devuelve una Promise

function fetchData() {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
      const data = [1, 2, 3, 4, 5];
      resolve(data);
    }, 1000);
  });
}

// Funcion que simula un fetch y da rejects

function fetchError() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(new Error('Error en el fetch'));
    }, 1000);
  });
}


  
module.exports = {
  addNumbers, multiplyNumbers, isUpperCase, isLowerCase,checkNull,checkUndefined,checkString,divideNumbers,fetchData,fetchError
  };
  