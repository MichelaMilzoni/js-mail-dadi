
// // ********* GIOCO DEI DADI *********
// // Stabilire il vincitore, in base a chi fa il punteggio più alto.
// // Prima di partire a scrivere codice poniamoci qualche domanda: 
// // Che ci sia un array da qualche parte? 
// // Se dobbiamo confrontare qualcosa che "cosa" ci serve?



// genero numero random da 1 a 6
// Lancio giocatore
const userRandomNumber =  Math.floor(Math.random() * 6) + 1;
// Lancio del PC
const pcRandomNumber = Math.floor(Math.random() * 6) + 1;

alert(`Numero del giocatore: ${userRandomNumber}`)
console.log(`Numero del giocatore: ${userRandomNumber}`); // ${numero} lo uso per "unire" stringa e numero
alert(`Numero del PC: ${pcRandomNumber}`)
console.log(`Numero del PC: ${pcRandomNumber}`);

if (userRandomNumber > pcRandomNumber) {
    alert("Complimenti hai vinto!")
    console.log("User vince");    
} else if (pcRandomNumber > userRandomNumber) {
    alert("Peccato, hai perso!")
    console.log("Pc vince");    
} else {
    alert("È un pareggio!");
    console.log("Pareggio");
}