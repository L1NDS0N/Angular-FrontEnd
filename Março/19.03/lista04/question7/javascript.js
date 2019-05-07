// 7. Faça um Algoritmo que peça um número correspondente a um determinado ano e em
// seguida informe se este ano é ou não bissexto.
let ano = 0;
alert("Anos bissextos!")
do {
    ano = parseFloat(prompt("Insira um ano do calendário gregoriano"))
    bissex = ano % 4;
    if (bissex == 0){
        alert(ano+" É um ano bissexto.")
    } else if (bissex != 1){
        alert(ano+" Não é um ano bissexto.")
    }
} while (ano => 0 || ano <= 3000);
