// Função para salvar a avaliação no Local Storage
function salvarAvaliacao(usuario, avaliacao) {
    // Verifica se o navegador suporta o Local Storage
    if (typeof(Storage) !== "undefined") {
        // Obtém o valor atual do Local Storage (se existir)
        var avaliacoesSalvas = localStorage.getItem('avaliacoes');

        // Converte o valor de volta para um objeto JavaScript (se existir)
        avaliacoesSalvas = avaliacoesSalvas ? JSON.parse(avaliacoesSalvas) : {};

        // Cria um array para o usuário se não existir
        avaliacoesSalvas[usuario] = avaliacoesSalvas[usuario] || [];

        // Adiciona a nova avaliação ao array do usuário
        avaliacoesSalvas[usuario].push(avaliacao);

        // Converte o objeto para uma string JSON e salva no Local Storage
        localStorage.setItem('avaliacoes', JSON.stringify(avaliacoesSalvas));

        console.log('Avaliação salva com sucesso!');
    } else {
        console.log('Desculpe, seu navegador não suporta o Local Storage.');
    }
}

function adicionarEstilosAoTexto() {
    var textoExibidoElement = document.getElementById("textoExibido");
    textoExibidoElement.classList.add("texto-exibido-estilizado");
}
function adicionarEstilosAoTextoerro() {
    var textoExibidoElement = document.getElementById("textoExibido");
    textoExibidoElement.classList.add("texto-exibido-estilizadoerro");
}

// Código original
var usuarios = {
    "Matheus": null,
    "Gabriel": null,
    "Bob": null
};

var usuarioSelecionado = '';
var contador = 0;
var bloquearClique = false;

function clickUser() {
    var nomeUsuario = document.getElementById("nomeUsuario").value;
   
    if (nomeUsuario.trim() === "") {
        document.getElementById("textoExibido").innerHTML = "Coloque o nome do colaborador.";
        adicionarEstilosAoTextoerro();

    } else if (usuarios.hasOwnProperty(nomeUsuario)) {
        usuarioSelecionado = nomeUsuario;
        document.getElementById("textoExibido").innerHTML = "Qual é a sua satisfação com o colaborador " + nomeUsuario + "?";
        adicionarEstilosAoTexto();
    }
     else {
        document.getElementById("textoExibido").innerHTML = "Nome do colaborador inválido. Tente novamente.";
        adicionarEstilosAoTextoerro();
    }
}

var imagens = document.querySelectorAll('.face-feliz, .face-neutro, .face-ruim');

imagens.forEach(function(imagem) {
    imagem.addEventListener('click', function() {
        if (bloquearClique) {
            return;
        }

        var avaliacao = imagem.alt;
        
        if (usuarioSelecionado !== '') {
            usuarios[usuarioSelecionado] = avaliacao;
            contador++;
            document.getElementById("textoExibido").innerHTML = "Avaliação de " + usuarioSelecionado + ": " + avaliacao;
            adicionarEstilosAoTexto();

            // Salva a avaliação no Local Storage associada ao usuário
            salvarAvaliacao(usuarioSelecionado, avaliacao);

            bloquearClique = true;

            setTimeout(function() {
                bloquearClique = false;
            }, 10000);

        } else {
            document.getElementById("textoExibido").innerHTML = "Selecione um usuário primeiro.";
            adicionarEstilosAoTextoerro();
        }
    });
});

// Adiciona um botão para acionar o redirecionamento
document.getElementById('redirecionarBtn').addEventListener('click', function() {
    var totalAvaliacoes = JSON.parse(localStorage.getItem('avaliacoes'))[usuarioSelecionado]?.length || 0;
    window.location.href = `index2.html?usuario=${usuarioSelecionado}&totalAvaliacoes=${totalAvaliacoes}`;
});

