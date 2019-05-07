// 4. João Papo-de-Pescador, homem de bem, comprou um microcomputador para controlar o
// rendimento diário de seu trabalho. Toda vez que ele traz um peso de peixes maior que o
// estabelecido pelo regulamento de pesca do estado de São Paulo (50 quilos) deve pagar
// uma multa de R$ 4,00 por quilo excedente. João precisa que você faça um Algoritmo que
// leia a variável peso (peso de peixes) e calcule o excesso. Gravar na variável excesso a
// quantidade de quilos além do limite e na variável multa o valor da multa que João deverá
// pagar. Imprima os dados do Algoritmo com as mensagens adequadas.

let peso = parseFloat(prompt("Qual o peso dos pescados?"));
let excesso = peso - 50;

if (excesso >= 1){
  alert("O valor da multa a ser pago é: R$"+excesso * 4.00+",00");
} else {
  alert("Você não precisa pagar por excessos");
}
