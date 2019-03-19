// 7. Faça um Algoritmo que leia três números e mostre o maior e o menor deles.
alert("Número maior e menor")
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

if(n1 < n2){
  alert("O menor é o primeiro: "+n1)
} else if (n2 < n3) {
  alert("O menor é o segundo: "+n2)
} else if (n3 < n1) {
  alert("O menor é o terceiro: "+n3)
}
