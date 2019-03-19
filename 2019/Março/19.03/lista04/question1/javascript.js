// 1. As Organizações Tabajara resolveram dar um aumento de salário aos seus colaboradores
// e lhe contrataram para desenvolver o Algoritmo que calculará os reajustes. Faça um
// Algoritmo que recebe o salário de um colaborador e o reajuste segundo o seguinte critério,
// baseado no salário atual:
// • salários até R$ 280,00:...........................................aumento de 20%
// • salários entre R$ 280,00 e R$ 700,00:.............................aumento de 15%
// • salários entre R$ 700,00 e R$ 1500,00:............................aumento de 10%
// • salários de R$ 1500,00 em diante:.................................aumento de 5%
// Após o aumento ser realizado, informe na tela:
// • o salário antes do reajuste;
// • o percentual de aumento aplicado;
// • o valor do aumento;
// • o novo salário, após o aumento.
alert("Organizações Tabajara!")
let salario = parseFloat(prompt("Insira o salário atual:"))

if (salario <= 280) {
  novo = (salario * .2)+ salario;
  valor = novo - salario;
  alert("Salário anterior: R$"+salario+"\nPercentual aplicado: 20%\nValor do aumento: R$"+valor+"\nnovo salário: R$"+novo)
} else if (salario <= 700) {
  novo = (salario * .15)+ salario;
  valor = novo - salario;
  alert("Salário anterior: R$"+salario+"\nPercentual aplicado: 15%\nValor do aumento: R$"+valor+"\nnovo salário: R$"+novo)
} else if (salario <= 1500) {
  novo = (salario * .1)+ salario;
  valor = novo - salario;
  alert("Salário anterior: R$"+salario+"\nPercentual aplicado: 10%\nValor do aumento: R$"+valor+"\nnovo salário: R$"+novo)
} else if (salario >= 1500) {
  novo = (salario * .05)+ salario;
  valor = novo - salario;
  alert("Salário anterior: R$"+salario+"\nPercentual aplicado: 5%\nValor do aumento: R$"+valor+"\nnovo salário: R$"+novo)
} else {

}
