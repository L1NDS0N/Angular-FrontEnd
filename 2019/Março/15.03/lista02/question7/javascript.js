// 7. Faça um Algoritmo para uma loja de tintas. O Algoritmo deverá pedir o tamanho em
// metros quadrados da área a ser pintada. Considere que a cobertura da tinta é de 1 litro
// para cada 6 metros quadrados e que a tinta é vendida em latas de 18 litros, que custam R$
// 80,00 ou em galões de 3,6 litros, que custam R$ 25,00. Informe ao usuário as quantidades
// de tinta a serem compradas e os respectivos preços em 3 situações:
// a. comprar apenas latas de 18 litros;
// b. comprar apenas galões de 3,6 litros;
// c. misturar latas e galões, de forma que o preço seja o menor. Acrescente 10% de folga e
// sempre arredonde os valores para cima, isto é, considere latas cheias.
let area = parseFloat(prompt("Tamanho da área a ser pintada em m²"));
let litros = area /3;
let lata = litros / 18;
let galao = litros / 3.6;
let preco = lata * 80.00;
alert("preciso de galoes: "+galao);
alert ("Conforme dado o(s) metro(s), você precisará de: \n"+litros.toFixed(2)+" L;\n"+lata.toFixed(2)+" lata(s);\nR$"+preco.toFixed(2)+" lhe custará.");
