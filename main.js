// Mail

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
let emailPresent;

for (let i = 0; i < registeredEmails.length; i++) {
    if (registeredEmails[i] === userEmail) {
    emailPresent = true;
    }
}

// stampa un messaggio appropriato sull’esito del controllo
if (emailPresent) {
    alert('Accesso consentito. Benvenuto!')
    console.log('Accesso consentito');
} else {
    alert('Accesso negato, la tua email non è registrata')
    console.log('Accesso Negato');
}