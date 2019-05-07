// 4. Faça um Algoritmo que verifique se uma letra digitada é vogal ou consoante.
alert("Vogal ou consoante?");
let letra = prompt("Insira uma letra:").toLowerCase();

if (letra == ""){
  alert("ERRO!\nInsira uma letra!")
} else if(letra.length > 1 ){
  alert("ERRO!\nInsira apenas um caractere por vez");
} else if (letra == "a" || letra == "e" || letra == "i" ||
letra == "o" || letra == "u" ){
  alert(letra+" é uma vogal.");
} else {
  if(isNaN(letra)){
    alert(letra+" é uma consoante.");
  } else {
    alert("ERRO!\nInsira uma letra.\n"+letra+" é um numero.")
  }
}
