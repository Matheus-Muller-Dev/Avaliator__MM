import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";

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

// Funçao para buscar e exibir os dados
const fetchAndDisplayData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, "avaliacoes"));
      const dataList = document.getElementById("data-list");
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        // Verifica se os campos 'comentario' e 'humor' existem no documento
        if (data.comentario && data.humor) {
          // Cria um item de lista para cada documento
          const listItem = document.createElement("li");
          listItem.innerHTML = `
            <strong>Humor:</strong> ${data.humor}<br>
            <strong>Comentário:</strong> ${data.comentario}
          `;
          dataList.appendChild(listItem);
        }
      });
    } catch (error) {
      console.error("Erro ao buscar documentos:", error);
    }
  };
  
  // Chama a função ao carregar a página
  fetchAndDisplayData();