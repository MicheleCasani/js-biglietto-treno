//definisco le variabili
let userAge = prompt('inserisci la tua età');
let userKm = prompt('inserisci il km desiderato');
let price = userKm * 0.21;


//definisco la variabile del prezzo finale
let finalPrice = price;


//controllo il valore inserito dall'utente con quello di sistema
if (userAge > 65) {
    finalPrice = finalPrice * 0.6;
}
if (userAge < 18) {
    finalPrice = finalPrice * 0.8;
}

finalPrice = finalPrice.toFixed(2);

console.log("il prezzo finale è di " + finalPrice + "€");

