// 8. Faça um Algoritmo que pergunte o preço de três produtos e informe qual produto você
// deve comprar, sabendo que a decisão é sempre pelo mais barato.
alert("Produto mais barato")
let n1 = parseFloat(prompt("Insira o preço do sabão ala"))
let n2 = parseFloat(prompt("Insira o preço do sabão omo"))
let n3 = parseFloat(prompt("Insira o preço do sabão ypê"))

if(n1 < n2){
  alert("O preço mais em conta é o do sabão ala: R$"+n1+",00")
} else if (n2 < n3) {
  alert("O preço mais em conta é o do sabão omo: R$"+n2+",00")
} else if (n3 < n1) {
  alert("O preço mais em conta é o do sabão ypê: R$"+n3+",00")
}
