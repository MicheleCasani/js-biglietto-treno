//definisco le variabili
let userAge = prompt('inserisci la tua età')
let userKm = prompt('inserisci il km desiderato')
let price = userKm * 0.21


//definisco la variabile del prezzo finale
let finalPrice = price;
finalPrice= finalPrice.toFixed(2);

//controllo il valore inserito dall'utente con quello di sistema
if (userAge > 65){
    finalPrice * 0.6
}
if (usarAge < 18){
    finalPrice * 0.8
}

    console.log("il prezzo finale è di " + finalPrice + "€")

