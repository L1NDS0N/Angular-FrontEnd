// 5. Faça um Algoritmo que pergunte quanto você ganha por hora e o número de horas
// trabalhadas no mês. Calcule e mostre o total do seu salário no referido mês, sabendo-se
// que são descontados 11% para o Imposto de Renda, 8% para o INSS e 5% para o
// sindicato. Calcule os descontos e o salário líquido, conforme a tabela abaixo:
// + Salário Bruto : R$
// - IR (11%) : R$
// - INSS (8%) : R$
// - Sindicato (5%) : R$
// = Salário Líquido : R$
let horal = parseFloat(prompt("Remuneração por hora:"));
let expediente = parseFloat(prompt("Tempo de trabalho:"));
mensal = horal * expediente;
let irpf = mensal*0.11;
let inss = mensal*0.08;
let sindicato = mensal * 0.05;
let descontos = irpf + inss + sindicato;
let liquido = mensal - irpf - inss - sindicato;
alert("Remuneração mensal bruta:"+mensal+"\nIRPF: R$"+irpf+"\nINSS: R$"+inss+"\nSindicato R$"+sindicato+"\nTotal em descontos: R$"+descontos.toFixed(2)+"\nSalário liquido: R$"+liquido.toFixed(2));
