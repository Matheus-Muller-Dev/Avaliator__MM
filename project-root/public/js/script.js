// Configuração do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
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
