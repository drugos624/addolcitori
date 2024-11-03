// Configura il tuo progetto Firebase
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Inizializza Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.getElementById('dataForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const modello = document.getElementById('modello').value;
    const dimensione = document.getElementById('dimensione').value;

    try {
        await db.collection('modelli').add({
            modello: modello,
            dimensione: dimensione
        });
        document.getElementById('message').innerText = 'Dati inseriti con successo!';
        document.getElementById('dataForm').reset();
    } catch (error) {
        console.error("Errore durante l'inserimento dei dati: ", error);
        document.getElementById('message').innerText = 'Errore durante l\'inserimento dei dati.';
    }
});
