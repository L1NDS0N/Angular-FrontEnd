//5. Pergunte ao usuário quantos cigarros ele fuma por dia, quanto custa um
// cigarro e a quantos anos fuma. Informe o prejuízo monetário
let cigarros = parseInt(prompt("Digite a quantidade diária de cigarros fumados:"));
let custo = parseInt(prompt("Digite quanto custa uma unidade do cigarro:"));

let result = (custo * cigarros);

alert("Você está gastando R$"+result+ " por dia com cigarros");
alert("Em um mês você gastará R$"+result*30+" com cigarros");
alert("Em um ano você gastará R$"+result*365+" com cigarros");

let resp = confirm("Então brother, pare de fumar, certo?");
if (resp == 1) {
alert("Parabéns você, será mais saudável e terá mais dinheiro no bolso.");
} else {
alert("Isso foi só um 'alerta', mas você deveria parar!");
}
