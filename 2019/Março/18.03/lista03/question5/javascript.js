// 5. Faça um Algoritmo para a leitura de duas notas parciais de um aluno. O Algoritmo deve
// calcular a média alcançada por aluno e apresentar:
// a. A mensagem "Aprovado", se a média alcançada for maior ou igual a sete;
// b. A mensagem "Reprovado", se a média for menor do que sete;
// c. A mensagem "Aprovado com Distinção", se a média for igual a dez.
let nt1 = parseFloat(prompt("Insira a primeira nota:"))
let nt2 = parseFloat(prompt("Insira a segunda nota:"))
let media = (nt1 + nt2) /2;
if(isNaN(media)){
  alert("ERRO!\nInsira números válidos.")
} else if (media == 10) {
  alert("Parabéns! você foi aprovado com distinção. Sua média foi: "+media)
} else if (media < 7){
  alert("Esforce-se mais! você foi reprovado com a média: "+media)
} else {
  alert("Parabéns! você foi aprovado com a média: "+media)
}
