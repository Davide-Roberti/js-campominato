// creo un array vuoto
// con un ciclo for e sfruttando una funzione genero 16 numeri casuali da pushare nell'array vuoto (controllo che non si ripetano)
// con un prompt all'interno di un for chiedo all'utente per 84 volte di inserire un numero
// se il numero è presente nell'array di numeri generati il gioco finisce, altrimenti chiedo all'utente un'altro numero

var arrayNumeriBomba = [];
var difficoltaFacile = 100;
var difficoltaMedia = 80;
var difficoltaDifficile = 50;

for (arrayNumeriBomba.length = 0; arrayNumeriBomba.length < 16;) {
    var numeroBomba = generaRandom(1, 100);
    if (!arrayNumeriBomba.includes(numeroBomba)){
    arrayNumeriBomba.push(numeroBomba)
    }
}

console.log(arrayNumeriBomba);

function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
