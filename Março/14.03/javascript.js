function batata() {
  let nome = "Lindson França";
  let idade = 22;

  alert('Olá '+nome+' você tem '+idade+' anos');
}

alert("Bem vindo ao Senai");
let nome = prompt("Digite seu nome");
alert("Bem vindo "+nome);
confirm("Deseja continuar no senai?");

let n1 = parseFloat(prompt("Digite a primeira nota"));
let n2 = parseFloat(prompt("Digite a segunda nota"));
let n3 = parseFloat(prompt("Digite a terceira nota"));

let media = (n1 + n2 + n3)/3;


if(isNaN(n1) || isNaN(n2) || isNaN(n3)){
  alert("você não digitou certo abestado!");
  let n1 = parseFloat(prompt("Digite a primeira nota"));
  let n2 = parseFloat(prompt("Digite a segunda nota"));
  let n3 = parseFloat(prompt("Digite a terceira nota"));
}
else{
  alert("A média é: "+media);
}
