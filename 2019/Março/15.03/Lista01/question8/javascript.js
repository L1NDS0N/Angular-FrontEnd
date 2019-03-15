// 8. Faça um Algoritmo que pergunte quanto você ganha por hora e o número de horas
// trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês.

alert("Quanto você recebe?");

let hora = parseFloat(prompt("Remuneração por hora:"));
let horas = parseFloat(prompt("Carga horária mensal:"));
alert("Trabalhando "+(horas/30).toFixed(0)+" hora por dia, recebendo "+hora+" por hora, você receberá o equivalente a "+(hora*horas).toFixed(2)+" por mês.");
