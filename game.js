// ARQUIVO: game.js

// Importa do CDN (necessário para rodar no navegador sem instalação)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";

// IMPORTANTE: Adicionei o 'off' nesta lista abaixo para corrigir o erro do Admin
import { getDatabase, ref, set, onValue, update, push, get, remove, off } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// --- SUAS CREDENCIAIS REAIS ---
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

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const analytics = getAnalytics(app); // Iniciado conforme solicitado

// Função para manter a tela ligada (Wake Lock)
async function keepScreenAwake() {
    try {
        if ('wakeLock' in navigator) {
            await navigator.wakeLock.request('screen');
        }
    } catch (err) {
        console.log("Wake Lock erro:", err);
    }
}

// Função para carregar JSON das perguntas
async function loadQuestions(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error("Erro 404");
        return await response.json();
    } catch (error) {
        console.error("Erro ao carregar quiz:", error);
        return [];
    }
}

// Exporta tudo (INCLUINDO O 'off')
export { db, ref, set, onValue, update, push, get, remove, off, keepScreenAwake, loadQuestions };