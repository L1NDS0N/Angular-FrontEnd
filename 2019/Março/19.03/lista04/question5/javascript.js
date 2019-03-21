// 5. Faça um Algoritmo que peça os 3 lados de um triângulo. O Algoritmo deverá informar
// se os valores podem ser um triângulo. Indique, caso os lados formem um triângulo, se o
// mesmo é: equilátero, isósceles ou escaleno.
// Dicas:
// • Três lados formam um triângulo quando a soma de quaisquer dois lados for maior que
// • terceiro;
// • Triângulo Equilátero: três lados iguais;
// • Triângulo Isósceles: quaisquer dois lados iguais;
// • Triângulo Escaleno: três lados diferentes;

let erro = false;
do {
  let lado1 = parseFloat(prompt("Insira o primeiro lado do triângulo:"))
  let lado2 = parseFloat(prompt("Insira o segundo lado do triângulo:"))
  let lado3 = parseFloat(prompt("Insira o terceiro lado do triângulo:"))
  if(lado1 <= 0 || lado2 <= 0 || lado3 <= 0){
    alert("ERRO!\nInsira números válidos")
    erro = true;
  }else {
  if (lado3 != lado2 && lado1 != lado2 && lado1 != lado3) {
    alert("Este é um triângulo escaleno.")
  } else if (lado1 == lado2 && lado3 == lado2 && lado3 == lado1) {
    alert("Este é um triângulo equilátero")
  } else if (lado1 == lado2 || lado2 == lado3 || lado3 == lado1) {
    alert("Este é um triângulo isósceles")}
  }} while (erro == false)
