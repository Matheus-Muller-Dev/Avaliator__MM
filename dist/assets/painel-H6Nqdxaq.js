import{i as o,g as r,c as n,d as i}from"./firebaseConfig-CjeAtYOY.js";/* empty css              *//* empty css              */import"./authGuard-BwA3v9tl.js";import{a as m,b as s,B as c}from"./modal-DVq0YFzl.js";const d={apiKey:"AIzaSyBigD49qfw4JrQlFID5MwooEUSUeXF3W40",authDomain:"avaliador-7d185.firebaseapp.com",projectId:"avaliador-7d185",storageBucket:"avaliador-7d185.firebasestorage.app",messagingSenderId:"174581300292",measurementId:"G-BFGYNYKNTH"},l=o(d),g=r(l);let e="";mensagem.classList.toggle("hide");document.querySelectorAll(".emoji").forEach(t=>{t.addEventListener("click",a=>{e=a.target.dataset.humor,mensagem.classList.remove("hide"),document.getElementById("mensagem").textContent=`Você selecionou: ${e}`})});document.getElementById("enviarAvaliacao").addEventListener("click",async()=>{const t=document.getElementById("comentario").value.trim();if(!e){m();return}if(!t){s();return}try{const a=await n(i(g,"avaliacoes"),{humor:e,comentario:t,data:new Date().toISOString()});c(),document.getElementById("comentario").value="",e="",document.getElementById("mensagem").textContent="",mensagem.classList.toggle("hide")}catch(a){alert("Erro ao enviar avaliação: "+a.message)}});
