// Usamos as URLs completas para funcionar no GitHub Pages sem instalação (Node.js)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, onValue, update, push, get, remove } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// --- SUA CONFIGURAÇÃO DO FIREBASE (JÁ INSERIDA) ---
const firebaseConfig = {
    apiKey: "AIzaSyAzQejLaQrWacKs51-pTXlbwEIKVl0edK4",
    authDomain: "kahoot-41bb3.firebaseapp.com",
    databaseURL: "https://kahoot-41bb3-default-rtdb.firebaseio.com",
    projectId: "kahoot-41bb3",
    storageBucket: "kahoot-41bb3.firebasestorage.app",
    messagingSenderId: "868715401162",
    appId: "1:868715401162:web:f5dfac198822adc44cc933",
    measurementId: "G-7MN2HFNC49"
};
// --------------------------------------------------

// Inicializa o App
const app = initializeApp(firebaseConfig);

// Inicializa o Banco de Dados Realtime (Essencial para o jogo)
const db = getDatabase(app);

// Função auxiliar para manter a tela do celular acordada (Admin/Host)
async function keepScreenAwake() {
    try {
        if ('wakeLock' in navigator) {
            await navigator.wakeLock.request('screen');
            console.log("💡 Tela mantida ligada.");
        }
    } catch (err) {
        console.log("Wake Lock não suportado ou erro:", err);
    }
}

// Função para carregar o arquivo JSON de perguntas
async function loadQuestions(path) {
    // Se não passar caminho, usa o padrão
    const file = path || './quizzes/geral.json';
    try {
        const response = await fetch(file);
        if (!response.ok) throw new Error("Erro HTTP: " + response.status);
        return await response.json();
    } catch (error) {
        console.error(error);
        alert("Erro ao carregar o quiz: " + file + "\nVerifique se o arquivo existe na pasta 'quizzes'.");
        return [];
    }
}

// Exporta tudo para ser usado nos arquivos HTML
export { db, ref, set, onValue, update, push, get, remove, keepScreenAwake, loadQuestions };