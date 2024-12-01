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

// Função para buscar dados e plotar gráfico
const fetchAndDisplayData = async () => {
  try {
      const querySnapshot = await getDocs(collection(db, "avaliacoes"));
      const humorCounts = { feliz: 0, neutro: 0, ruim: 0 };
      const comments = [];

      querySnapshot.forEach((doc) => {
          const data = doc.data();
          const humor = data.humor?.toLowerCase().trim();

          if (humor && humorCounts.hasOwnProperty(humor)) {
              humorCounts[humor]++;
          }

          if (data.comentario && humor) {
            comments.push({ humor, comentario: data.comentario});
          }
        });

        plotBarChart(humorCounts);

        renderComments(comments);

        setupFilter(comments);

    } catch (error) {
        console.error("Erro ao buscar documentos:", error);
    }
};
const renderComments = (comment, filter = "todos") => {
    const commentsSection = document.getElementById("comments-section");
    commentsSection.innerHTML = ""; // limpa a seção de comentários

    const filteredComments = filter === "todos"
    ? comments
    : comments.filter(comment => comment.humor === filter);

    if (filteredComments.length === 0) {
        commentsSection.innerHTML = "<p>Nenhum comentario</p>";
        return;
    }


         // exibe comentarios
filteredComments.forEach(({ humor, comentario }) => {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");
    commentDiv.innerHTML = `
      <strong>Humor:</strong> ${humor}<br>
      <strong>Comentário:</strong> ${comentario}
    `;
    commentsSection.appendChild(commentDiv);
  });
};

const setupFilter = (comments) => {
    const filterOptions = document.getElementsByName("humor-filter");
    filterOptions.forEach(option => {
        option.addEventListener("change", (e) => {
            const selectdFilter = e.target.value;
            renderComments(comments, selectdFilter);
        });
    });
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