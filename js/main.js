// creo un array vuoto per i numeri generati
// con un ciclo for e sfruttando una funzione genero 16 numeri casuali da pushare nell'array vuoto (controllo che non si ripetano)
// creo un array vuoto per i numeri inseriti dall'utente
// chiedo all'utente di inserire dei numeri tramite un prompt in un ciclo while
// se il numero è presente nell'array di numeri generati il gioco finisce, altrimenti chiedo all'utente un'altro numero

var arrayNumeriBomba = [];
var arrayNumeriInseriti = [];
var difficoltaScelta = parseInt(prompt('scegli un livello di difficoltà: 0 = facile, 1 = medio, 2 = difficile'))


switch (difficoltaScelta) {
    case difficoltaScelta == 0:
        var difficolta = 100;
        break;
    case difficoltaScelta == 1:
        var difficolta = 80;
        break;
    default:
    var difficolta = 50;
}


for (arrayNumeriBomba.length = 0; arrayNumeriBomba.length < 16;) {
    var numeroBomba = generaRandom(1, difficolta);
    if (!arrayNumeriBomba.includes(numeroBomba)){
    arrayNumeriBomba.push(numeroBomba)
    }
}

while (arrayNumeriInseriti.length <= difficolta - arrayNumeriBomba.length) {
    var numeroInserito = parseInt(prompt('inserisci un numero tra 1 e ' + difficolta));
    if (arrayNumeriBomba.includes(numeroInserito)) {
        alert ('BOOOOOOOOOM!')
        break;
    } else if (arrayNumeriInseriti.includes(numeroInserito)) {
        var numeroInserito = parseInt(prompt('hai già inserito questo numero, inseriscine uno diverso tra 1 e ' + difficolta));
    } else {
        arrayNumeriInseriti.push(numeroInserito);
    }
}

console.log('sei sopravvissuto per un totale di ' + arrayNumeriInseriti.length + ' mosse, sei ESPLOSO alla mossa numero ' + (arrayNumeriInseriti.length + 1));
console.log('i numeri BOMBA erano: ' + arrayNumeriBomba);

function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
