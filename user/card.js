document.addEventListener('DOMContentLoaded', function () {
// user.js
    let userIdCounter = 1; // Para gerar IDs únicos para cada usuário

    function newTask() {
        // Obter o valor do input
        const userName = document.getElementById('autoCompleteInput').value;
    
        // Verificar se o input não está vazio
        if (userName.trim() !== '') {
            // Criar um novo card
            createCard(userName);
            
            // Limpar o input
            document.getElementById('autoCompleteInput').value = '';
        }
    }
    
    function createCard(userName) {
        // Obter a div de cards
        const cardsContainer = document.querySelector('.cards .container');
    
        // Criar um novo elemento div para o card
        const newCard = document.createElement('div');
        newCard.classList.add('card');
    
        // Criar a estrutura interna do card
        newCard.innerHTML = `
            <div class="mover">
                <img class="icone" src="../banco.dados/img/avatar copy.png" alt="iconeHTML">
                <p class="p1">${userName}</p>
            </div>
            <div class="button">
                <a href="links/link.html">ENTRAR</a>
            </div>
        `;
    
        // Adicionar o card à div de cards
        cardsContainer.appendChild(newCard);
    }
    
    document.querySelector('.criar_perfil button').addEventListener('click', function() {
        // Obter o valor do input
        const userName = prompt('Digite o nome do novo colaborador:');
    
        // Verificar se o usuário não cancelou a operação
        if (userName !== null) {
            // Criar um novo card
            createCard(userName);
        }
    });
});