// 10. Faça um Algoritmo que pergunte em que turno você estuda. Peça para digitar M-matutino
// ou V-Vespertino ou N- Noturno. Imprima a mensagem "Bom Dia!", "Boa Tarde!" ou
// "Boa Noite!" ou "Valor Inválido!", conforme o caso
alert("Qual o turno?")
let turno = prompt("Insira em que turno você estuda:").toLowerCase()
switch (turno) {
  case "m":
  alert("Bom dia!")
  break;
  case "v":
  alert("Boa tarde!")
  break;
  case "n": case "noturno":
  alert("Boa noite!")
  break;
  default:
  alert("Insira um turno válido!")
}
