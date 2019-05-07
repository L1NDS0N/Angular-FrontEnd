// 4. Faça um Algoritmo que lê as duas notas parciais obtidas por um aluno numa disciplina
// ao longo de um semestre, e calcule a sua média. A atribuição de conceitos obedece à
// tabela abaixo:
// Média de Aproveitamento Conceito
// Entre 9.0 e 10.0 ................................................................................................A
// Entre 7.5 e 9.0 .................................................................................................B
// Entre 6.0 e 7.5 .................................................................................................C
// Entre 4.0 e 6.0 .................................................................................................D
// Entre 4.0 e zero ................................................................................................E
// O algoritmo deve mostrar na tela as notas, a média, o conceito correspondente e a
// mensagem “APROVADO” se o conceito for A, B ou C ou “REPROVADO” se o conceito
// for D ou E.
var par1 = parseFloat(prompt("Insira sua primeira nota parcial do semestre"))
var par2 = parseFloat(prompt("Insira sua segunda nota parcial do semestre"))
var media = (par1 + par2)/2;
var conceito;
var situacao;

function exibirparcial(){
  alert("Primeira parcial semestral: "+par1+
  "\nSegunda parcial semestral: "+par2+
  "\nEstado conceitual: "+conceito+
  "\nSituação do aluno: "+situacao+
  "\n\n------ Média "+media+" ------"+
  "\nLegenda:"+
  "\nEntre 9.0 e 10.0 ............................................................................A"+
  "\nEntre 7.5 e 9.0 .............................................................................B"+
  "\nEntre 6.0 e 7.5 .............................................................................C"+
  "\nEntre 4.0 e 6.0 .............................................................................D"+
  "\nEntre 4.0 e zero ............................................................................E")
}

//Estrutura de decisão - Definição de conceito e situação
if (media <= 4) {
  conceito = "D";
  if(conceito == "D"){
    situacao = "reprovado";
  }
  exibirparcial();

} else if (media <= 6){
  conceito = "D";
  if(conceito == "D"){
    situacao = "reprovado";
  }
  exibirparcial();
} else if (media <= 7.5){
  conceito = "C";
  if(conceito == "C"){
    situacao = "aprovado";
  }
  exibirparcial();
} else if (media <= 9){
  conceito = "B";
  if(conceito == "B"){
    situacao = "aprovado";
  }
  exibirparcial();
}
else if (media <= 10){
  conceito = "A";
  if(conceito == "A"){
    situacao = "aprovado";
  }
  exibirparcial();
}
