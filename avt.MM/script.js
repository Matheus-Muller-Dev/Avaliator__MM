// Configuração do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBigD49qfw4JrQlFID5MwooEUSUeXF3W40",
    authDomain: "avaliador-7d185.firebaseapp.com",
    projectId: "avaliador-7d185",
    storageBucket: "avaliador-7d185.appspot.com",
    messagingSenderId: "174581300292",
    appId: "1:174581300292:web:1befd5c6e8ad80e6031011",
    measurementId: "G-BFGYNYKNTH"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

let humorSelecionado = "";

// Evento para selecionar o humor
document.querySelectorAll(".emoji").forEach((emoji) => {
    emoji.addEventListener("click", (event) => {
        humorSelecionado = event.target.dataset.humor;
        document.getElementById("mensagem").textContent = `Você selecionou: ${humorSelecionado}`;
    });
});

// Evento para enviar avaliação
document.getElementById("enviarAvaliacao").addEventListener("click", async () => {
    const comentario = document.getElementById("comentario").value.trim();

    if (!humorSelecionado) {
        alert("Por favor, selecione um humor.");
        return;
    }

    if (!comentario) {
        alert("Por favor, insira um comentário.");
        return;
    }

    try {
        const docRef = await addDoc(collection(db, "avaliacoes"), {
            humor: humorSelecionado,
            comentario: comentario,
            data: new Date().toISOString(),
        });
        alert("Avaliação enviada com sucesso! ID: " + docRef.id);
        document.getElementById("comentario").value = "";
        humorSelecionado = "";
        document.getElementById("mensagem").textContent = "";
    } catch (error) {
        alert("Erro ao enviar avaliação: " + error.message);
    }
});
