// Configuración de Firebase para persistencia global de votos y ranking
const firebaseConfig = {
  apiKey: "AIzaSyAbyjMp-os1LWQj3Qqj3P169pPhW9rRE68",
  authDomain: "votaciones-updt.firebaseapp.com",
  projectId: "votaciones-updt",
  storageBucket: "votaciones-updt.firebasestorage.app",
  messagingSenderId: "259432997962",
  appId: "1:259432997962:web:020c14b7aef19649c532b3",
  measurementId: "G-02Y607YL85"
};

// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// Funciones para leer y guardar votos globalmente
async function getVotosGlobal() {
  const doc = await db.collection('updt').doc('votos').get();
  return doc.exists ? doc.data() : {};
}

async function setVotosGlobal(votos) {
  await db.collection('updt').doc('votos').set(votos);
}

async function getResetInfo() {
  const doc = await db.collection('updt').doc('reset').get();
  return doc.exists ? doc.data() : null;
}

async function setResetInfo(info) {
  await db.collection('updt').doc('reset').set(info);
}
