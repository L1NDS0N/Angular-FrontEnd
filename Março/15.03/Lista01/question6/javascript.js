alert("Qual é a área do círculo?");

let raio = parseFloat(prompt("Insira a tamanho do raio: "));
let pi = 3.14159265359;

alert("A área do cículo, com o raio: "+raio+", é: "+((pi*raio)*raio).toFixed(1));
