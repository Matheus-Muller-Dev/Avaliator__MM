document.addEventListener("DOMContentLoaded", function() {
    let avaliacaoSelecionada = "";

    // Seleção do emoji
    document.querySelectorAll(".face").forEach((emoji) => {
        emoji.addEventListener("click", function () {
            avaliacaoSelecionada = this.alt;
            exibirMensagem(`Você selecionou: ${avaliacaoSelecionada}`);
        });
    });

    // Clique no botão de envio
    document.getElementById("bnt-new-task").addEventListener("click", async function() {
        const nomeUsuario = document.getElementById("nomeUsuario").value.trim();
        const comentario = document.getElementById("comentario").value.trim();

        if (!nomeUsuario || !avaliacaoSelecionada || !comentario) {
            exibirMensagem("Por favor, preencha todos os campos e selecione um emoji.", true);
            return;
        }

        try {
            await salvarAvaliacao(nomeUsuario, avaliacaoSelecionada, comentario);
            exibirMensagem("Avaliação enviada com sucesso!");
        } catch (error) {
            exibirMensagem("Erro ao enviar a avaliação.", true);
            console.error(error);
        }
    });

    // Função para exibir mensagens
    function exibirMensagem(mensagem, erro = false) {
        const mensagemDiv = document.getElementById("mensagem");
        mensagemDiv.textContent = mensagem;
        mensagemDiv.style.color = erro ? "red" : "green";
    }
});