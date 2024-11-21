// Configuração do Firebase
// Certifique-se de ter configurado o firebaseconfig.js corretamente e importado no projeto
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

// Substitua pelos dados do seu projeto Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBigD49qfw4JrQlFID5MwooEUSUeXF3W40",
    authDomain: "avaliador-7d185.firebaseapp.com",
    databaseURL: "https://avaliador-7d185-default-rtdb.firebaseio.com",
    projectId: "avaliador-7d185",
    storageBucket: "avaliador-7d185.firebasestorage.app",
    messagingSenderId: "174581300292",
    appId: "1:174581300292:web:1befd5c6e8ad80e6031011",
    measurementId: "G-BFGYNYKNTH"
  };

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Função para salvar a avaliação no Firestore
async function salvarAvaliacao(usuario, avaliacao, comentario) {
    try {
        // Adiciona um novo documento à coleção "avaliacoes"
        const docRef = await addDoc(collection(db, "avaliacoes"), {
            usuario: usuario,
            avaliacao: avaliacao,
            comentario: comentario,
            data: new Date().toISOString() // Salva a data/hora atual no padrão ISO
        });
        console.log("Avaliação salva com sucesso! ID do documento: ", docRef.id);
    } catch (error) {
        console.error("Erro ao salvar avaliação: ", error);
    }
}

// Variáveis globais
let usuarioSelecionado = '';
let bloquearClique = false;

// Função para selecionar o usuário
function clickUser() {
    const nomeUsuario = document.getElementById("nomeUsuario").value.trim();

    if (nomeUsuario === "") {
        exibirMensagem("Coloque o nome do colaborador.", true);
    } else {
        usuarioSelecionado = nomeUsuario;
        exibirMensagem("Qual é a sua satisfação com o colaborador " + nomeUsuario + "?", false);
    }
}

window.clickUser = clickUser;

// Função para exibir mensagens com estilo
function exibirMensagem(mensagem, erro = false) {
    const textoExibidoElement = document.getElementById("textoExibido");
    textoExibidoElement.innerHTML = mensagem;
    textoExibidoElement.className = erro ? "texto-exibido-estilizadoerro" : "texto-exibido-estilizado";
}

// Configuração dos eventos de clique nos emojis
document.querySelectorAll('.face-feliz, .face-neutro, .face-ruim').forEach(function(imagem) {
    imagem.addEventListener('click', function() {
        if (bloquearClique) return;

        const avaliacao = imagem.alt;
        const comentario = document.getElementById("comentario").value.trim();

        if (usuarioSelecionado === '') {
            exibirMensagem("Selecione um usuário primeiro.", true);
        } else if (!avaliacao) {
            exibirMensagem("Selecione uma avaliação.", true);
        } else if (comentario === '') {
            exibirMensagem("Por favor, insira um comentário.", true);
        } else {
            bloquearClique = true;
            salvarAvaliacao(usuarioSelecionado, avaliacao, comentario);
            exibirMensagem(`Avaliação de ${usuarioSelecionado}: ${avaliacao}`, false);

            // Libera o próximo clique após 5 segundos
            setTimeout(function() {
                bloquearClique = false;
            }, 5000);
        }
    });
});

// Botão para redirecionar
document.getElementById('redirecionarBtn').addEventListener('click', function() {
    window.location.href = `index2.html?usuario=${usuarioSelecionado}`;
});
