// ********* EMAIL *********

// Crea una lista di email di invitati ad una festa. 
const registeredEmails = [
    'io@tiscali.it',
    'tu@alice.it',
    'forse@email.com',
    'magari@gmail.com',
    'puodarsi98@gmail.com',
]

// Chiedi all’utente la sua email
const userEmail = prompt('Inserisci la tua email')
console.log(userEmail);


// creo una variabile booleana (true/false) x controllare che sia nella lista di chi può accedere
let emailPresent; // Il valore di default di una variabile booleana in JavaScript è false. 
// ciclo for per controllare uno a uno i valori dell'array fino a trovarne una uguale
// se uguale do accesso
for (let i = 0; i < registeredEmails.length && !emailPresent; i++) { // !emailPresent operatore logico NOT, inverte
                                                                    // il "valore di verità" di un'espressione booleana.
                                                                    // se è falso restituisce vero, se è vero restituisce falso
    if (registeredEmails[i] === userEmail) {
    emailPresent = true;
    }
}

//NB: non specifico else per la condizione false perchè se no continua a controllare e stampare finchè non finisce l'array

// stampo un messaggio appropriato sull’esito del controllo
if (emailPresent) {
    alert('Accesso consentito. Benvenuto!')
    console.log('Accesso consentito');
} else {
    alert('Accesso negato, la tua email non è registrata')
    console.log('Accesso Negato');
}



