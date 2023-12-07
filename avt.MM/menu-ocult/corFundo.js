document.addEventListener("DOMContentLoaded", function() {
    // Verifica se os elementos necessários existem antes de adicionar os ouvintes de evento
    var btnLaranja = document.getElementById("btn-laranja");
    var btnAzul = document.getElementById("btn-azul");
    var btnVerde = document.getElementById("btn-verde");
    var btnBranco = document.getElementById("btn-branco");

    if (btnLaranja && btnAzul && btnVerde && btnBranco) {
        btnLaranja.addEventListener("click", function () {
            mudarCor("laranja");
        });

        btnAzul.addEventListener("click", function () {
            mudarCor("azul");
        });

        btnVerde.addEventListener("click", function () {
            mudarCor("verde");
        });

        btnBranco.addEventListener("click", function () {
            mudarCor("branco");
        });
    } else {
        console.error("Elementos não encontrados. Verifique os IDs dos botões no seu HTML.");
    }

    function mudarCor(cor) {
        // Atualiza a cor na página atual
        document.querySelector("body").setAttribute("class", cor);

        // Salva a cor no localStorage
        if (typeof localStorage !== "undefined") {
            localStorage.setItem('cor', cor);

            window.postMessage({ cor: cor }, "*");
        }

    }

    function carregarCorSalva() {
        if (typeof localStorage !== "undefined") {
            var corSalva = localStorage.getItem('cor');

            if (corSalva) {
                document.querySelector("body").setAttribute("class", corSalva);
            }
        }
    }



    carregarCorSalva();
   
});






// document.addEventListener("DOMContentLoaded", function () {
//     // Verifica se os elementos necessários existem antes de adicionar os ouvintes de evento
//     var btnLaranja = document.getElementById("btn-laranja");
//     var btnAzul = document.getElementById("btn-azul");
//     var btnVerde = document.getElementById("btn-verde");
//     var btnBranco = document.getElementById("btn-branco");

//     if (btnLaranja && btnAzul && btnVerde && btnBranco) {
//         btnLaranja.addEventListener("click", function () {
//             document.querySelector("body").setAttribute("class", "laranja");
//             salvarConfiguracoes("laranja");
//         });

//         btnAzul.addEventListener("click", function () {
//             document.querySelector("body").setAttribute("class", "azul");
//             salvarConfiguracoes("azul");
//         });

//         btnVerde.addEventListener("click", function () {
//             document.querySelector("body").setAttribute("class", "verde");
//             salvarConfiguracoes("verde");
//         });

//         btnBranco.addEventListener("click", function () {
//             document.querySelector("body").setAttribute("class", "branco");
//             salvarConfiguracoes("branco");
//         });
//     } else {
//         console.error("Elementos não encontrados. Verifique os IDs dos botões no seu HTML.");
//     }

//     function salvarConfiguracoes(cor) {
//         if (typeof localStorage !== "undefined") {
//             localStorage.setItem('cor', cor);
//         }
//     }

//     // Função para carregar a cor salva do localStorage
//     function carregarCorSalva() {
//         if (window.opener && typeof window.opener.localStorage !== "undefined") {
//             var corSalva = window.opener.localStorage.getItem('cor');

//             if (corSalva) {
//                 document.querySelector("body").setAttribute("class", corSalva);
//             }
//         }
//     }

//     // Carrega a cor salva ao carregar a página
//     carregarCorSalva();
// });
