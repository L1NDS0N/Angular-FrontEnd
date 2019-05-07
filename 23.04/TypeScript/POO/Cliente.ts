class Cliente {

  nome: string;
  idade: number;
  sexo?: boolean;

  constructor(nome: string, idade:number, sexo: boolean){
    this.nome = nome;
    this.idade = idade;
    this.sexo = sexo;
  }
  // function preapresentacao() {
  //   if(sexo == 1){
  //     let sex: string = "Homem";
  //
  //   }
  //   sex = "Mulher";
  // }

  apresentar(){
    return `Olá, eu sou ${this.nome} e tenho ${this.idade}, sou um(a) ${this.sexo}`;
  }
}

let joao: Cliente new Cliente('João', 25, 1);
let apresentacao: string = joao.apresentar();
console.log(apresentacao);

let maria: Cliente new Cliente('Maria', 23, 0);
let apresentacao: string = maria.apresentar();
console.log(apresentacao);
