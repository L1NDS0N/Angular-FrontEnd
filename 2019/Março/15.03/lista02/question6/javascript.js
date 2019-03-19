// 6. Faça um Algoritmo para uma loja de tintas. O Algoritmo deverá pedir o tamanho em
// metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro
// para cada 3 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$
// 80,00. Informe ao usuário a quantidades de latas de tinta a serem compradas e o preço
// total.
let area = parseFloat(prompt("Tamanho da área a ser pintada em m²"));
let litros = area /3;
let lata = litros / 18;
let preco = lata * 80.00;
alert ("Conforme dado o(s) metro(s), você precisará de: \n"+litros.toFixed(2)+" L;\n"+lata.toFixed(2)+" lata(s);\nR$"+preco.toFixed(2)+" lhe custará.");
