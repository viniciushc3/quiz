// ARQUIVO: game.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
// 1. ADICIONEI 'off' NA LINHA ABAIXO:
import { getDatabase, ref, set, onValue, update, push, get, remove, off } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// --- SUA CONFIGURAÇÃO (NÃO APAGUE SUAS CHAVES!) ---
const firebaseConfig = {
    apiKey: "SUA_API_KEY", 
    authDomain: "SEU_PROJETO.firebaseapp.com",
    databaseURL: "SEU_URL_DATABASE",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "...",
    messagingSenderId: "...",
    appId: "..."
};
// --------------------------------------------------

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

async function keepScreenAwake() {
    try {
        if ('wakeLock' in navigator) await navigator.wakeLock.request('screen');
    } catch (err) { console.log(err); }
}

async function loadQuestions(path) {
    try {
        const response = await fetch(path);
        if (!response.ok) throw new Error("404");
        return await response.json();
    } catch (error) {
        console.error("Erro ao carregar quiz:", error);
        return [];
    }
}

// 2. ADICIONEI 'off' NA LINHA ABAIXO TAMBÉM:
export { db, ref, set, onValue, update, push, get, remove, off, keepScreenAwake, loadQuestions };