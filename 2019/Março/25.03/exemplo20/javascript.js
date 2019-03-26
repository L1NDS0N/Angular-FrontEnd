function qtd_linhas(){
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
  limpar_formulario();
}
function insert_table(nome, sexo, idade){
  let table = document.getElementById("tabela-funcionarios");
  let row = table.insertRow();
  let td_nome = row.insertCell(0);
  let td_sexo = row.insertCell(1);
  let td_idade = row.insertCell(2);

  td_nome.innerHTML = nome;
  td_sexo.innerHTML = sexo;
  td_idade.innerHTML = idade;
}
