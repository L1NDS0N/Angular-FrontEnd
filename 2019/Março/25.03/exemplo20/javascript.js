function testar() {
  let nome = document.getElementById("nome")
  let resultado = document.getElementById("resultado")
  resultado.innerHTML = nome.value;
  limpar();
}

function limpar() {
  let nome = document.getElementById("nome")
  nome.value = "";
  nome.focus();
}

function insert() {
  var nome = document.getElementById("nome");
  var sexo = document.getElementById("sexo");
  var idade = document.getElementById("idade");
  alert(nome.value);
  document.getElementById(estranho).value = "BUG";
  alert(idade.value);

}
