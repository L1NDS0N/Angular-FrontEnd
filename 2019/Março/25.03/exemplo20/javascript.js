function qtd-linhas(){
  let funcionarios = document.getElementById("tabela-funcionarios")
  let qtd = funcionarios.getElementsByTagName("tr").length;
}
function limpar_formulario(){
  // TODO:
}

function insert() {
  let nome = document.getElementById("nome").value;
  // let sexo = document.getElementById("sexo").value;
  let idade = document.getElementById("idade").value;
  let sexo = "a definir";
  if(document.getElementById("masculino").checked){
    sexo = "Masculino";
  }else{
    sexo = "Feminino"
  }
  insert_table(nome, sexo, idade);
}
function insert_table(nome, sexo, idade){

}
