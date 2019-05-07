alert("Qual sua média?");

let nt1 = parseFloat(prompt("Insira a primeira nota"));
let nt2 = parseFloat(prompt("Insira a segunda nota"));
let nt3 = parseFloat(prompt("Insira a terceira nota"));
let nt4 = parseFloat(prompt("Insira a quarta nota"));

alert("A média de suas notas é: "+((nt1+nt2+nt3+nt4)/4).toFixed(1));
