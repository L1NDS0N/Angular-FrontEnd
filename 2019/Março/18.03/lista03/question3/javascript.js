// 3. Faça um Algoritmo que verifique se uma letra digitada é "F" ou "M". Conforme a letra
// escrever: F - Feminino, M - Masculino, Sexo Inválido.
alert("Gêneros binários")
let sexo = prompt("Insira o sexo:")


if (sexo == "F" || sexo == "f") {
  alert(sexo+" é o sexo Feminino")
} else if (sexo == "M" || sexo == "m"){
  alert(sexo+" é o sexo Masculino")
}else {
  alert(sexo+" é um sexo inválido")
}
