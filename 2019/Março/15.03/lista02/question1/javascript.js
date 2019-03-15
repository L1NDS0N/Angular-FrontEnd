// 1. Faça um Algoritmo que peça 2 números inteiros e um número real. Calcule e mostre:
// a. o produto do dobro do primeiro com metade do segundo.
// b. a soma do triplo do primeiro com o terceiro.
// c. o terceiro elevado ao cubo.
let ni1 = parseInt(prompt("Insira o primeiro número inteiro"));
let ni2 = parseInt(prompt("Insira o segundo número inteiro"));
let nr1 = parseFloat(prompt("Insira o número real"));

alert("O produto do dobro do primeiro com metade do segundo."+(ni1*2)+(ni2/2));
alert("A soma do triplo do primeiro com o terceiro."+(ni1*3)+nr1);
alert(" O terceiro elevado ao cubo: "+(nr1*nr1*nr1));
