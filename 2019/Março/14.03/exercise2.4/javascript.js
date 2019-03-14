//4. Pergunte ao usuário a quantidade de grãos que um animal come por dia
// e a quantidade de grãos existentes no estoque. Informe quantos
// dias o animal ainda tem de suprimentos.

let graos = parseInt(prompt("Digite a quantidade diária de grãos:"));
let estoque = parseInt(prompt("Digite a quantidade ainda em estoque:"));

let result = (estoque/graos);

alert("Você ainda tem "+result+" dias de grãos no estoque");

// Pergunte ao usuário quantos cigarros ele fuma por dia, quanto custa um
// cigarro e a quantos anos fuma. Informe o prejuízo monetário
let cigarros = parseInt(prompt("Digite a quantidade diária de cigarros fumados:"));
let custo = parseInt(prompt("Digite quanto custa uma unidade do cigarro:"));

let result = (custo * cigarros);

alert("Você está gastando R$"+result+ " por dia com cigarros");
alert("Em um mês você gastará R$"+result*30+" com cigarros");
alert("Em um ano você gastará R$"+result*365+" com cigarros");

let resp = confirm("Então brother, pare de fumar, certo?");
if (resp == true) {
alert("Parabéns você, será mais saudável e terá mais dinheiro no bolso");
} else {
alert("Isso foi só um 'alerta', mas você deveria parar!");
}
