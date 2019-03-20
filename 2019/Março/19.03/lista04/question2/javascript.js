// 2. Faça um Algoritmo para o cálculo de uma folha de pagamento, sabendo que os descontos
// são do Imposto de Renda, que depende do salário bruto (conforme tabela abaixo) e 3%
// para o Sindicato e que o FGTS corresponde a 11% do Salário Bruto, mas não é descontado
// (é a empresa que deposita). O Salário Líquido corresponde ao Salário Bruto menos os
// descontos. O Algoritmo deverá pedir ao usuário o valor da sua hora e a quantidade de
// horas trabalhadas no mês. Desconto do IR:
// • Salário Bruto até 900 - isento
// • Salário Bruto até 1500 - desconto de 5%
// • Salário Bruto até 2500 - desconto de 10%
// • Salário Bruto acima de 2500 - desconto de 20%
// Imprima na tela as informações, dispostas conforme o exemplo abaixo. No exemplo o
// valor da hora é 5 e a quantidade de hora é 220.
// Salário Bruto: (5 * 220): .................................. R$ 1.100,00
// (-) IR (5%): ............................................... R$ 55,00
// (-) INSS (10%):............................................. R$ 110,00
// FGTS (11%):................................................. R$ 121,00
// Total de descontos: ........................................ R$ 165,00
// Salário Liquido: ........................................... R$ 935,00




alert("Folha de pagamento")
let remuneracao = parseFloat(prompt("Insira sua remuneração por hora trabalhada:"))
let expediente = parseFloat(prompt("Insira quantas horas trabalhas por mês:"))
var salario = remuneracao * expediente;
let sindicato = salario * .03;
let fgts = salario * .11;
if (salario <= 900) {
  alert("Salário Bruto: ("+remuneracao+" * "+expediente+") .................... R$ "+salario+
  "\n(+) FGTS (11%): ................................... R$ "+fgts+
  "\n(-) Sindicato (3%): ............................... R$ "+sindicato+
  "\nTotal de descontos: ............................. R$ "+sindicato+
  "\nSalário liquido: ..................................... R$ "+(salario-sindicato))
} else if (salario <= 1500) {
  let irpf = salario * .05;//IRPF
  alert("Salário Bruto: ("+remuneracao+" * "+expediente+") .................... R$ "+salario+
  "\n(+) FGTS (11%): ................................... R$ "+fgts+
  "\n(-) Sindicato (3%): ............................... R$ "+sindicato+
  "\n(-) IRPF (5%): ..................................... R$ "+irpf+//IRPF
  "\nTotal de descontos: ............................. R$ "+(sindicato+irpf)+
  "\nSalário liquido: ..................................... R$ "+(salario-sindicato-irpf))
} else if (salario <= 2500) {
  let irpf = salario * .1;//IRPF
  alert("Salário Bruto: ("+remuneracao+" * "+expediente+") .................... R$ "+salario+
  "\n(+) FGTS (11%): ................................... R$ "+fgts+
  "\n(-) Sindicato (3%): ............................... R$ "+sindicato+
  "\n(-) IRPF (10%): ..................................... R$ "+irpf+//IRPF
  "\nTotal de descontos: ............................. R$ "+(sindicato+irpf)+
  "\nSalário liquido: ..................................... R$ "+(salario-sindicato-irpf))
} else if (salario > 2500) {
  let irpf = salario * .2;//IRPF
  alert("Salário Bruto: ("+remuneracao+" * "+expediente+") .................... R$ "+salario+
  "\n(+) FGTS (11%): ................................... R$ "+fgts+
  "\n(-) Sindicato (3%): ............................... R$ "+sindicato+
  "\n(-) IRPF (20%): ..................................... R$ "+irpf+//IRPF
  "\nTotal de descontos: ............................. R$ "+(sindicato+irpf)+
  "\nSalário liquido: ..................................... R$ "+(salario-sindicato-irpf))
} else if (isNaN(remuneracao) || isNaN(expediente)) {
  alert("ERRO!\nInsira um número.")

}
