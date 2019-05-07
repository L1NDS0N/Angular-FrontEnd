// 3. Faça um Algoritmo que leia um número e exiba o dia correspondente da semana. (1-
// Domingo, 2- Segunda, etc.), se digitar outro valor deve aparecer valor inválido.
let semana = ['','Domingo','Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado']
let continuar = false;


do {
  let dia = parseInt(prompt("Qual o dia da semana?"))
  if(dia > 0 && dia <= 7){
    alert("O dia da semana é "+semana[dia])
  } else {
    alert("Os dias da semana são entre 1 e 7, bocó!")
    continuar = confirm("Deseja continuar?")
    alert(continuar)
  }
} while (continuar == true);
