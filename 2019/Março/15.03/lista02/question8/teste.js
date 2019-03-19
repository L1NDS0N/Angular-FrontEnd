let segundos = parseFloat(prompt("Segundos:"))
let horas = segundos / 3600;
let minutos = (segundos - (horas * 3600)) / 60;
let segundo = segundos - (horas * 3600) - (minutos * 60);
alert(horas+":"+minutos+":"+segundo);
