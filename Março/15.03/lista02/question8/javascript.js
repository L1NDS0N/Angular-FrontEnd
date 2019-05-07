// 8. Faça um Algoritmo que peça o tamanho de um arquivo para download (em MB) e a
// velocidade de um link de Internet (em Mbps), calcule e informe o tempo aproximado de
// download do arquivo usando este link (em minutos).
let arquivo = parseFloat(prompt("Qual o tamanho do arquivo em MB?"));
let internet = parseFloat(prompt("Qual é a velocidade do link de internet em Mbps?"));

let download = internet/8;
let minuto = 60;
// quantidade baixada por minuto:
// Mbps(tempo) é a quantidade de Mbps que o download consome por segundo
let Mbps = download * minuto;

// quero obter em quanto tempo

let tempo = (arquivo / Mbps) * 60;
let minutos = tempo / 60;
let segundos = tempo - (minutos * 60);

alert("Tempo para completar este download: "+minutos.toFixed(0)+"Minuto(s) "+segundos.toFixed(0)+" segundo(s)\nTempo total em segundos:"+tempo);

// alert("Baixado por minuto: " +Mbps+"mb");
// alert("Link em megabytes: "+ download);
