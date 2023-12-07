document.addEventListener('DOMContentLoaded', function () {
    // Obtém os parâmetros da URL
    var urlParams = new URLSearchParams(window.location.search);
    var usuario = urlParams.get('usuario');
    
    // Obtém as últimas avaliações do Local Storage
    var avaliacoesStorage = JSON.parse(localStorage.getItem('avaliacoes')) || {};
    var ultimasAvaliacoes = avaliacoesStorage[usuario] || [];

    // Contadores para cada categoria
    var felizCount = 0;
    var medioCount = 0;
    var ruimCount = 0;

    // Atualiza o total de avaliações
    var totalAvaliacoes = ultimasAvaliacoes.length;  

    // Exibe informações na página
    document.getElementById('resultados').innerHTML = `
        <p>Usuário:   <mark>${usuario}</mark></p>
        <p>Total de Avaliações:   <mark>${totalAvaliacoes}</mark></p>
    `;   


    
    // Obtém as últimas avaliações do Local Storage
    var ultimasAvaliacoesList = document.getElementById('ultimasAvaliacoes');
    ultimasAvaliacoes.forEach(function (avaliacao) {
        // Atualiza os contadores com base na avaliação
        if (avaliacao.includes('Feliz')) {
            felizCount++;
        } else if (avaliacao.includes('Médio')) {
            medioCount++;
        } else if (avaliacao.includes('Ruim')) {
            ruimCount++;
        }
    });

    felizCount = parseInt(felizCount);
    medioCount = parseInt(medioCount);
    ruimCount = parseInt(ruimCount);


    // Atualiza os totais no HTML
    document.getElementById('resultados').innerHTML += `
        <h2>Últimas Avaliações:</h2>
        <p>Feliz: <mark>${felizCount}</mark></p>
        <p>Médio: <mark>${medioCount}</mark></p>
        <p>Ruim: <mark>${ruimCount}</mark></p>
    `;
    const ctx = document.getElementById('Grafico1');
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Feliz', 'Médio', 'Ruim'],
                datasets: [{
                    label: '# of Votes',
                    data: [felizCount, medioCount, ruimCount],
                    borderWidth: 9
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,

                    }
                }
            }
        });


});




 // Obtém as últimas avaliações do Local Storage
    // var ultimasAvaliacoes = JSON.parse(localStorage.getItem('avaliacoes'))[usuario] || [];
    
    // // Exibe as últimas avaliações na lista
    // var ultimasAvaliacoesList = document.getElementById('ultimasAvaliacoes');
    // ultimasAvaliacoes.forEach(function (avaliacao) {
    //     var listItem = document.createElement('li');
    //     listItem.textContent = avaliacao;
    //     ultimasAvaliacoesList.appendChild(listItem);

    //     // Atualiza os contadores com base na avaliação
    //     if (avaliacao.includes('Feliz')) {
    //         felizCount++;
    //     } else if (avaliacao.includes('Médio')) {
    //         medioCount++;
    //     } else if (avaliacao.includes('Ruim')) {
    //         ruimCount++;
    //     }
    // });



// document.addEventListener('DOMContentLoaded', function () {
//     // Obtém os parâmetros da URL
//     var urlParams = new URLSearchParams(window.location.search);
//     var usuario = urlParams.get('usuario');
//     
//     //Obtém as últimas avaliações do local Storage
//     var avaliacoesStorage = JSON.parse(localStorage.getItem('avaliacoes')) || {};
//     var ultimasAvaliacoes = avaliacoesStorage[usuario] || [];
// 
//     // Atualiza o total de avaliações
//     var totalAvaliacoes = ultimasAvaliacoes.length;
// 
// 
//     // Exibe informações na página
//     document.getElementById('resultados').innerHTML = `
//         <p>Usuário: ${usuario}</p>
//         <p>Total de Avaliações: ${totalAvaliacoes}</p>
//         <h2>Últimas Avaliações:</h2>
//         <ul id="ultimasAvaliacoes"></ul>
//     `;
// 
//     // Obtém as últimas avaliações do Local Storage
//     var ultimasAvaliacoes = JSON.parse(localStorage.getItem('avaliacoes'))[usuario] || [];
//     
//     // Exibe as últimas avaliações na lista
//     var ultimasAvaliacoesList = document.getElementById('ultimasAvaliacoes');
//     ultimasAvaliacoes.forEach(function (avaliacao) {
//         var listItem = document.createElement('li');
//         listItem.textContent = avaliacao;
//         ultimasAvaliacoesList.appendChild(listItem);
    // });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     // Obtém os parâmetros da URL
//     var urlParams = new URLSearchParams(window.location.search);
//     var usuario = urlParams.get('usuario');
//     var totalAvaliacoes = urlParams.get('totalAvaliacoes');

//     // Exibe informações na página
//     document.getElementById('resultados').innerHTML = `
//         <p>Usuário: ${usuario}</p>
//         <p>Total de Avaliações: ${totalAvaliacoes}</p>
//     `;

//     // Obtém as últimas avaliações do Local Storage
//     var ultimasAvaliacoes = JSON.parse(localStorage.getItem('avaliacoes'))[usuario] || [];
    
//     // Exibe as últimas avaliações na lista
//     var ultimasAvaliacoesList = document.getElementById('ultimasAvaliacoes');
//     ultimasAvaliacoes.forEach(function (avaliacao) {
//         var listItem = document.createElement('li');
//         listItem.textContent = avaliacao;
//         ultimasAvaliacoesList.appendChild(listItem);
//     });

//     // Criação do card do usuário
//     var cardsContainer = document.getElementById('cardsContainer');
//     var cardUsuario = document.createElement('div');
//     cardUsuario.className = 'card-usuario';
//     cardUsuario.innerHTML = `
//         <h2>${usuario}</h2>
//         <p>Total de Avaliações: ${totalAvaliacoes}</p>
//         <h3>Últimas Avaliações:</h3>
//         <ul id="ultimasAvaliacoesUsuario"></ul>
//     `;

//     // Exibe as últimas avaliações do usuário no card
//     var ultimasAvaliacoesUsuarioList = cardUsuario.querySelector('#ultimasAvaliacoesUsuario');
//     ultimasAvaliacoes.forEach(function (avaliacao) {
//         var listItem = document.createElement('li');
//         listItem.textContent = avaliacao;
//         ultimasAvaliacoesUsuarioList.appendChild(listItem);
//     });

//     // Adiciona o card do usuário ao contêiner
//     cardsContainer.appendChild(cardUsuario);
// });