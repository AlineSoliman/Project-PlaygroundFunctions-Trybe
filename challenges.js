// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
compareTrue();

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}
calcArea();

// Desafio 3
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(string) {
  let array = string.split(" ");
  return array;
}

// Desafio 4
function concatName(array) {
  let arrayOfStrings;
  arrayOfStrings = array[array.length - 1] + ", " + array[0];
  return arrayOfStrings;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties * 1;
}
footballPoints();

// // Desafio 6
function highestCount(array) {
  let maiorNumero = array[0];
  for (let i = 1; i < array.length; i += 1) {
    if (array[i] > maiorNumero) {
      maiorNumero = array[i];
    }
  }
  let resultado = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] === maiorNumero) {
      resultado += 1;
    }
  }
  return resultado;
}
console.log(highestCount([0, 0, 0]));

// Desafio 7
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
// Math.abs  para retornar o valor absoluto e desconsiderar negativo e positivo
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return "cat1";
  }
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return "os gatos trombam e o rato foge";
  }
  if (Math.abs(cat1 - mouse) > Math.abs(cat2 - mouse)) {
    return "cat2";
  }
}
catAndMouse();

//Desafio 8
function fizzBuzz(array) {
  let resultado = [];
  for (let i = 0; i < array.length; i += 1) {
    let string = "";
    if (array[i] % 3 === 0 && array[i] % 5 !== 0) {
      string = "fizz";
    } else if (array[i] % 3 !== 0 && array[i] % 5 === 0) {
      string = "buzz";
    } else if (array[i] % 3 === 0 && array[i] % 5 === 0) {
      string = "fizzBuzz";
    } else {
      string = "bug!";
    }
    resultado.push(string);
  }
  return resultado;
}
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace#
  //parametros -> (o que quer substituir, pelo quê)
  // 'g' para tornar global e não pegar somente a primeira letra, mas todas as letras da string.
  for (let i = 0; i < string.length - 1; i += 1) {
    string = string.replace(/a/g, 1);
    string = string.replace(/e/g, 2);
    string = string.replace(/i/g, 3);
    string = string.replace(/o/g, 4);
    string = string.replace(/u/g, 5);

    return string;
  }
}

function decode(string) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace#
  // parametros -> (o que quer substituir, pelo quê)
  // 'g' para tornar global e não pegar somente a primeira letra, mas todas as letras da string.

  for (let i = 0; i < string.length - 1; i += 1) {
    string = string.replace(/1/g, "a");
    string = string.replace(/2/g, "e");
    string = string.replace(/3/g, "i");
    string = string.replace(/4/g, "o");
    string = string.replace(/5/g, "u");

    return string;
  }
}

// Desafio 10
function techList(array, name) {
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  array.sort(); //sort para ordenar
  let listaObjetos = [];
  let resultado;
  for (let i = 0; i < array.length; i += 1) {
    if (i < array.length) {
      listaObjetos.push({ tech: array[i], name: name });
    }
  }
  resultado = listaObjetos;
  if (array.length === 0) {
    resultado = "Vazio!";
  }
  return resultado;
}
techList(["React", "Jest", "HTML", "CSS", "JavaScript"], "Lucas");

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
