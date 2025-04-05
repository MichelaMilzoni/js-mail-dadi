let userWins = 0;
let pcWins = 0;
let attempts = 0;
const maxRetries = 3;

// Il do...while definisce un blocco di codice da eseguire una volta,
// e ripetuto finché una condizione è true.
// Il do...while viene utilizzato quando si desidera 
// eseguire un blocco di codice almeno una volta.

// eseguo dentro al do..
// metto la condizione nel while
do {
    const userRandomNumber = Math.floor(Math.random() * 6) + 1;
    const pcRandomNumber = Math.floor(Math.random() * 6) + 1;

    alert(`Numero del giocatore: ${userRandomNumber}`);
    alert(`Numero del PC: ${pcRandomNumber}`);

    if (userRandomNumber > pcRandomNumber) {
        alert("Complimenti hai vinto!");
        userWins++;
        attempts = maxRetries; // Imposto i tentativi al massimo per uscire
        console.log("Numero giocatore: " + userRandomNumber);
        console.log("Numero PC: " + pcRandomNumber);
        console.log("Vince il giocatore");
    } else if (userRandomNumber < pcRandomNumber) {
        alert("Peccato, hai perso!");
        pcWins++;
        attempts = maxRetries; // Imposto i tentativi al massimo per uscire
        console.log("Numero giocatore: " + userRandomNumber);
        console.log("Numero PC: " + pcRandomNumber);
        console.log("Vince il PC");
    } else {
        alert(`È un pareggio! Si rilancia automaticamente. Tentativi rimanenti: ${maxRetries - attempts - 1}`);
        console.log("Pareggio");
    }

    attempts++; // Incrementa il numero di tentativi
} while (attempts < maxRetries);

if (attempts === maxRetries) {
    alert("Nessun vincitore dopo 3 tentativi!");
    console.log("Tentativi esauriti. Nessun vincitore.");
}



