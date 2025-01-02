import"./modal-Bav0lMtZ.js";import"./authGuard-BQXBfg4x.js";import{initializeApp as p}from"https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";import{getFirestore as h,getDocs as g,collection as u}from"https://www.gstatic.com/firebasejs/9.17.2/firebase-firestore.js";const f={apiKey:"AIzaSyBigD49qfw4JrQlFID5MwooEUSUeXF3W40",authDomain:"avaliador-7d185.firebaseapp.com",projectId:"avaliador-7d185",storageBucket:"avaliador-7d185.firebasestorage.app",messagingSenderId:"174581300292",measurementId:"G-BFGYNYKNTH"},b=p(f),x=h(b),y=async()=>{try{const a=await g(u(x,"avaliacoes")),e={feliz:0,neutro:0,ruim:0},o=[];a.forEach(s=>{var i;const t=s.data(),n=(i=t.humor)==null?void 0:i.toLowerCase().trim();n&&e.hasOwnProperty(n)&&e[n]++,t.comentario&&n&&o.push({humor:n,comentario:t.comentario})}),v(e),d(o),C(o)}catch(a){console.error("Erro ao buscar documentos:",a)}},d=(a,e="todos")=>{const o=document.getElementById("comments-section");o.innerHTML="";const s=e==="todos"?a:a.filter(t=>t.humor===e);if(s.length===0){o.innerHTML="<p>Nenhum comentário</p>";return}s.forEach(({humor:t,comentario:n})=>{const i=document.createElement("div");i.classList.add("comment"),i.innerHTML=`
          <strong>Humor:</strong> ${t}<br>
          <strong>Comentário:</strong> ${n}
        `,o.appendChild(i)})},m=document.createElement("style");m.textContent=`
        .comment {
             font-size: 18px;
             font-weight: bold;
             background-color: #f0f9f0; /* Fundo suave */
             padding: 10px 15px;
             border-left: 4px solid #4CAF50;
             border-right: 4px solid #4CAF50;;
             border-radius: 5px;
             margin-bottom: 20px;
            }
        `;document.head.appendChild(m);const C=a=>{document.getElementsByName("humor-filter").forEach(o=>{o.addEventListener("change",s=>{const t=s.target.value;d(a,t)})})},v=a=>{const e=Object.entries(a).map(([r,l])=>({humor:r,count:l})),o=500,s=300,t={top:20,right:30,bottom:30,left:40},n=d3.select("#chart").append("svg").attr("width",o).attr("height",s),i=d3.scaleBand().domain(e.map(r=>r.humor)).range([t.left,o-t.right]).padding(.1),c=d3.scaleLinear().domain([0,d3.max(e,r=>r.count)]).nice().range([s-t.bottom,t.top]);n.append("g").attr("fill","steelblue").selectAll("rect").data(e).join("rect").attr("x",r=>i(r.humor)).attr("y",r=>c(r.count)).attr("height",r=>c(0)-c(r.count)).attr("width",i.bandwidth()),n.append("g").attr("transform",`translate(0,${s-t.bottom})`).call(d3.axisBottom(i)),n.append("g").attr("transform",`translate(${t.left},0)`).call(d3.axisLeft(c))};y();
