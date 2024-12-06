// Configuração do Firebase
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { ButtonAlert, ErroButtonEmoji, ErroButtonComentario} from "./modal.js"

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

mensagem.classList.toggle("hide")

document.querySelectorAll(".emoji").forEach((emoji) => {
    emoji.addEventListener("click", (event) => {
        humorSelecionado = event.target.dataset.humor;
        mensagem.classList.remove("hide")
        document.getElementById("mensagem").textContent = `Você selecionou: ${humorSelecionado}`;
    });
});

//Evento para enviar avaliação
document.getElementById("enviarAvaliacao").addEventListener("click", async () => {
    const comentario = document.getElementById("comentario").value.trim();

    if (!humorSelecionado) {
        ErroButtonEmoji()
        return;
    }

    if (!comentario) {
        ErroButtonComentario()
        return;
    }

    try {
        const docRef = await addDoc(collection(db, "avaliacoes"), {
            humor: humorSelecionado,
            comentario: comentario,
            data: new Date().toISOString(),
        });
        ButtonAlert();
        document.getElementById("comentario").value = "";
        humorSelecionado = "";
        document.getElementById("mensagem").textContent = "";
    } catch (error) {
        alert("Erro ao enviar avaliação: " + error.message);
    }
});
