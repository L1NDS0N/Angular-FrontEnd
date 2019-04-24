"use strict";
var Cliente = /** @class */ (function () {
    function Cliente(nome, idade, sexo) {
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
    Cliente.prototype.apresentar = function () {
        return "Ol\u00E1, eu sou " + this.nome + " e tenho " + this.idade + ", sou um(a) " + this.sexo;
    };
    return Cliente;
}());
var joao;
new Cliente('João', 25, 1);
var apresentacao = joao.apresentar();
console.log(apresentacao);
var maria;
new Cliente('Maria', 23, 0);
var apresentacao = maria.apresentar();
console.log(apresentacao);
