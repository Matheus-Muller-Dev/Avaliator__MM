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

// // Funçao para buscar e exibir os dados
// const fetchAndDisplayData = async () => {
//     try {
//       const querySnapshot = await getDocs(collection(db, "avaliacoes"));
//       const dataList = document.getElementById("data-list");
//       querySnapshot.forEach((doc) => {
//         const data = doc.data();
//         // Verifica se os campos 'comentario' e 'humor' existem no documento
//         if (data.comentario && data.humor) {
//           // Cria um item de lista para cada documento
//           const listItem = document.createElement("li");
//           listItem.innerHTML = `
//             <strong>Humor:</strong> ${data.humor}<br>
//             <strong>Comentário:</strong> ${data.comentario}
//           `;
//           dataList.appendChild(listItem);
//         }
//       });
//     } catch (error) {
//       console.error("Erro ao buscar documentos:", error);
//     }
//   };

// Função para buscar dados e plotar gráfico
const fetchAndDisplayData = async () => {
  try {
      const querySnapshot = await getDocs(collection(db, "avaliacoes"));
      const humorCounts = { feliz: 0, neutro: 0, ruim: 0 };
      const commentsSection = document.getElementById("comments-section");

      querySnapshot.forEach((doc) => {
          const data = doc.data();
          const humor = data.humor?.toLowerCase().trim();
          if (humor && humorCounts.hasOwnProperty(humor)) {
              humorCounts[humor]++;
          }

         // exibe comentarios
         if (data.comentario) {
             const commentDiv = document.createElement("li");
             commentDiv.classList.add("comment");
             commentDiv.innerHTML = `
                <strong>Humor:</strong> ${data.humor || "Não especificado"}<br>
                <strong>Comentário:</strong> ${data.comentario}
             `;
             commentsSection.appendChild(commentDiv)
             }
      });
      console.log(humorCounts)
    //   console.log(comentarios)
      plotBarChart(humorCounts);
  } catch (error) {
      console.error("Erro ao buscar documentos:", error);
  }
};

// Função para plotar gráfico de barras com D3.js
const plotBarChart = (humorCounts) => {
  const data = Object.entries(humorCounts).map(([humor, count]) => ({ humor, count }));

  const width = 500;
  const height = 300;
  const margin = { top: 20, right: 30, bottom: 30, left: 40 };

  const svg = d3.select("#chart")
      .append("svg")
      .attr("width", width)
      .attr("height", height);

  const x = d3.scaleBand()
      .domain(data.map(d => d.humor))
      .range([margin.left, width - margin.right])
      .padding(0.1);

  const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.count)]).nice()
      .range([height - margin.bottom, margin.top]);

  svg.append("g")
      .attr("fill", "steelblue")
      .selectAll("rect")
      .data(data)
      .join("rect")
      .attr("x", d => x(d.humor))
      .attr("y", d => y(d.count))
      .attr("height", d => y(0) - y(d.count))
      .attr("width", x.bandwidth());

  svg.append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

  svg.append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
}; 
  // Chama a função ao carregar a página
  fetchAndDisplayData();