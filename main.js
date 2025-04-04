// Mail

// Crea una lista di email di invitati ad una festa. 
// const registeredEmails = [
//     'io@tiscali.it',
//     'tu@alice.it',
//     'forse@email.com',
//     'magari@gmail.com',
//     'puodarsi98@gmail.com',
// ]

// // Chiedi all’utente la sua email
// const userEmail = prompt('Inserisci la tua email')
// console.log(userEmail);


// // creo una variabile booleana (true/false) x controllare che sia nella lista di chi può accedere
// let emailPresent;

// for (let i = 0; i < registeredEmails.length; i++) {
//     if (registeredEmails[i] === userEmail) {
//     emailPresent = true;
//     }
// }

// // stampo un messaggio appropriato sull’esito del controllo
// if (emailPresent) {
//     alert('Accesso consentito. Benvenuto!')
//     console.log('Accesso consentito');
// } else {
//     alert('Accesso negato, la tua email non è registrata')
//     console.log('Accesso Negato');
// }

// Gioco dei dadi

// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda: 
// Che ci sia un array da qualche parte? 
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?

// creo variabili e assegno valore 0
let userRandomNumber = [];
let pcRandomNumber = [];

// Generare un numero random da 1 a 6 per il giocatore (dove i è il contatore del ciclo)
for (let i = 0; i < 2; i++) {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    if (i === 0) {
        userRandomNumber.push(randomNumber) //salvo il numero del giocatore
    } else {
        pcRandomNumber.push(randomNumber)//salvo il numero del pc
    }
}
console.log(`Numero del giocatore: ${userRandomNumber}`);
console.log(`Numero del PC: ${pcRandomNumber}`);

if (userRandomNumber > pcRandomNumber) {
    alert("Complimenti hai vinto!")
    console.log("User vince");    
} else {
    alert("Peccato, hai perso!")
    console.log("Pc vince");    
}