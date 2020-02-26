// creo un array vuoto per i numeri generati
// con un ciclo for e sfruttando una funzione genero 16 numeri casuali da pushare nell'array vuoto (controllo che non si ripetano)
// creo un array vuoto per i numeri inseriti dall'utente
// chiedo all'utente di inserire dei numeri tramite un prompt in un ciclo while
// se il numero è presente nell'array di numeri generati il gioco finisce, altrimenti chiedo all'utente un'altro numero

var difficolta = cambiaDifficolta();
var campoMinato = posizioneMine(difficolta);
var arrayNumeriInseriti = [];

var sentinella = false;
while ((arrayNumeriInseriti.length < difficolta - campoMinato.length) && (sentinella == false)) {
    var numeroInserito = parseInt(prompt('inserisci un numero tra 1 e ' + difficolta));
    if (!isNaN(numeroInserito)) {
        if (numeroInserito > 0 && numeroInserito <= difficolta) {
            if (!arrayNumeriInseriti.includes(numeroInserito)) {
                if (!campoMinato.includes(numeroInserito)) {
                    arrayNumeriInseriti.push(numeroInserito);
                    if (arrayNumeriInseriti.length == difficolta - campoMinato.length) {
                        alert('HAI VINTO!')
                    }
                } else {
                    alert('BOOOOOOOOOOOOOOM!!!!!')
                    sentinella = true;
                }
            } else {
                alert('hai già inserito questo numero')
            }
        } else {
            alert('il numero da inserire DEVE essere compreso tra 1 e ' + difficolta);
        }
    } else {
        alert('ti pare di aver inserito un numero?')
    }
}

console.log('sei sopravvissuto per un totale di ' + arrayNumeriInseriti.length + ' mosse, sei ESPLOSO alla mossa numero ' + (arrayNumeriInseriti.length + 1));
console.log('i numeri BOMBA erano: ' + campoMinato);

function cambiaDifficolta () {
    var difficoltaScelta = parseInt(prompt('scegli un livello di difficoltà: 0 = facile, 1 = medio, 2 = difficile'))
        switch (difficoltaScelta) {
            case 0:
                var possibilita = 100;
                break;
            case 1:
                var possibilita = 80;
                break;
            case 2:
                var possibilita = 50;
                break;
            default:
                var possibilita = 100;
        }
    return possibilita;
}

function posizioneMine (valDifficolta) {
    var arrayNumeriBomba = [];
    while (arrayNumeriBomba.length < 16) {
        var numeroBomba = generaRandom(1, valDifficolta);
        if (!arrayNumeriBomba.includes(numeroBomba)){
        arrayNumeriBomba.push(numeroBomba)
        }
    }
    return arrayNumeriBomba;
}


function generaRandom(min, max) {
    numeroRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    return numeroRandom;
}
