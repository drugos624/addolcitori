// Configura il tuo progetto Firebase
const firebaseConfig = {
 apiKey: "AIzaSyAlu5Q1Ww3u2Dt_INeKOm5GSeEU-qFDtJs",
    authDomain: "addolcitori-2f8fe.firebaseapp.com",
    databaseURL: "https://addolcitori-2f8fe-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "addolcitori-2f8fe",
    storageBucket: "addolcitori-2f8fe.firebasestorage.app",
    messagingSenderId: "399702428879",
    appId: "1:399702428879:web:4bee57dcdc3b80eea8bbba"
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
