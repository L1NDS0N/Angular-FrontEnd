// 6. Faça um Algoritmo que leia três números e mostre o maior deles
alert("Número maior")
// num = [0]prompt("Insira o primeiro número:")
// num = [1]prompt("Insira o segundo número:")
// num = [2]prompt("Insira o terceiro número:")
// let maior = 0;
// let contador = 0;
// for (var i = 0; i < num.length; i++) {
//   if (num[i] > maior) {
//     // contador = contador;
//     // contador++;
//     maior = num[i];
//     alert("O maior número é o: "+maior+" no índice: "+contador);
//   }
// }
let n1 = parseInt(prompt("Insira o primeiro número"))
let n2 = parseInt(prompt("Insira o segundo número"))
let n3 = parseInt(prompt("Insira o terceiro número"))

if(n1 > n2){
  alert("O maior é o primeiro: "+n1)
} else if (n2 > n3) {
  alert("O maior é o segundo: "+n2)
} else if (n3 > n1) {
  alert("O maior é o terceiro: "+n3)
}
