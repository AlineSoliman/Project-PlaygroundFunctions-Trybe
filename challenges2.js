// Desafio 11
function repete(array) {
  var numeroRepetido = [];
  for (let i = 0; i < array.length; i += 1) {
    let numero = 0;
    for (let i2 = 0; i2 < array.length; i2 += 1) {
      if (array[i] === array[i2]) {
        numero = numero += 1;
      }
    }
    numeroRepetido.push(numero);
  }
  return numeroRepetido;
}
console.log(repete([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4]));

function qtdeNumRepetido(numeroRepetido) {
  for (let i = 0; i < numeroRepetido.length; i += 1) {
    if (numeroRepetido[i] >= 3) {
      return true;
    }
  }
  return false;
}
console.log(qtdeNumRepetido(repete([0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4])));

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
function generatePhoneNumber(array) {
  // seu código aqui
  let result;
  if (array.length !== 11) {
    return "Array com tamanho incorreto.";
  }
  for (let i = 0; i < array.length; i += 1) {
    if (
      array[i] < 0 ||
      array[i] > 9 ||
      qtdeNumRepetido(repete(array)) === true
    ) {
      return "não é possível gerar um número de telefone com esses valores";
    }
  }
  let result1 =
    "(" +
    array.slice(0, 2) +
    ") " +
    array.slice(2, 7) +
    "-" +
    array.slice(7, 11);
  result = result1.replace(/,/gi, "");
  return result;
}
console.log(generatePhoneNumber([]));

// Desafio 12
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  let result;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    result = true;
  } else {
    result = false;
  }
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    result = true;
  } else {
    result = false;
  }
  if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
triangleCheck();

// Desafio 13
// https://www.youtube.com/watch?v=pfkkdzeyx6U
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/parseInt
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match

function hydrate(string) {
  let viraNumero = /\d+/g; // -> /oque quer achar/  \d (digitos) + (um ou mais digitos)  g (global, em toda string)
  let frase = string.match(viraNumero);
  let num1 = parseInt(frase[0]);
  let num2 = parseInt(frase[1]);
  let num3 = parseInt(frase[2]);

  if (num1 === 1 && frase.length == 1) {
    mensagem = "1 copo de água";
  } else if (frase.length == 1 && num1 !== 1) {
    mensagem = num1 + " copos de água";
  } else if (frase.length == 2) {
    mensagem = num1 + num2 + " copos de água";
  } else {
    mensagem = num1 + num2 + num3 + " copos de água";
  }
  return mensagem;
}
console.log(hydrate("1 cerveja"));

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
