// 3. Tendo como dado de entrada a altura (h) de uma pessoa, construa um algoritmo que
// calcule seu peso ideal, utilizando as seguintes fórmulas:
// a. Para homens: (72.7*h) - 58
// b. Para mulheres: (62.1*h) - 44.7
let sexo = prompt("Insira seu sexo");

if(sexo == "homem" || sexo == "h" || sexo == "masculino"){
  let h = parseFloat(prompt("Sexo: Masculino \nInsira a sua altura (Ex.: '1.60')"));
  let ideal = (72.7 * h) -58;
  ideal.toFixed(0);
  alert("Homem, baseado na sua altura, o seu peso ideal é: "+ideal);
} else {
  let h = parseFloat(prompt("Sexo: Feminino \nInsira a sua altura (Ex.: '1.60')"));
  let ideal = (62.1 * h) -44.7;
  ideal.toFixed(0);
  alert("Mulher, baseado na sua altura, o seu peso ideal é:: "+ideal);
}
