interface Pessoa {
  idade: number;
  sexo?: string;
}

function imprimiIdade(pessoa: Pessoa) {
  console.log(pessoa.idade);
}

let joaoMarcos = { nome: 'João Marcos', idade: 22 };
imprimiIdade(joaoMarcos);
