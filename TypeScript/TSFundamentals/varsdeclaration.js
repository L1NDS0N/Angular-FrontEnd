"use strict";
function iniciarTime(iniciaJogo) {
    var nome = 'Messi e amigos';
    //Royals 'Hoisting' KKKKK
    if (iniciaJogo) {
        var cidade = 'em Uberlândia';
    }
    console.log(nome + " v\u00E3o jogar " + cidade);
}
iniciarTime(true);
