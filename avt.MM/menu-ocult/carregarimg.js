document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btnEscolherImagem").addEventListener("click", function () {
        document.getElementById("inputImagem").click();
    });

    function salvarImagemNoLocalStorage(inputImagem) {
        if (typeof (Storage) !== "undefined") {
            localStorage.setItem('inputImagem', inputImagem);
        }
    }
    
   

    function carregarImagemSalva() {
        if (typeof (Storage) !== "undefined") {
            var imagemSalva = localStorage.getItem('inputImagem');

            if (imagemSalva) {
                document.getElementById("backgroundImage").src = imagemSalva;
                document.getElementById("backgroundImage").style.display = "block";
                document.body.style.backgroundImage = `url('${imagemSalva}')`;
            }
        }
    }

    document.getElementById("inputImagem").addEventListener("change", function (event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = function (e) {
                const imageUrl = e.target.result;

                // Salva a imagem no localStorage
                salvarImagemNoLocalStorage(imageUrl);

                // Atualiza a exibição da imagem na página
                document.getElementById("backgroundImage").src = imageUrl;
                document.getElementById("backgroundImage").style.display = "block";
                document.body.style.backgroundImage = `url('${imageUrl}')`;
            };

            reader.readAsDataURL(file);
        }
    });

    document.getElementById("limpar").addEventListener("click", function () {
        // Chama a função para limpar o fundo da tela
 
        limparFundo();
        

       

    });

    // Função para limpar o fundo da tela
    function limparFundo() {
        // Remove a imagem do localStorage
        localStorage.removeItem('inputImagem');

        // Remove a imagem da exibição na página
        document.getElementById("backgroundImage").src = "";
        document.getElementById("backgroundImage").style.display = "none";
        document.body.style.backgroundImage = "none";

               
    }

    // Carrega a imagem salva ao carregar a página
    carregarImagemSalva();

    
    


});





// document.addEventListener("DOMContentLoaded", function() {
//     document.getElementById("btnEscolherImagem").addEventListener("click", function() {
//        document.getElementById("inputImagem").click();
//    });

//    function salvarImagem(inputImagem) {

//     if (typeof(Storage) !== "undefined") {
//         localStorage.setItem('inputImagem', inputImagem);
//         }
//     }

//     function carregarImagemSalva(){
//         if (typeof(Storage) !== "undefined"){
//             var imagemSalva = localStorage.getItem('inputImagem');

//             if (imagemSalva) {
//                 document.getElementById("backgroundImage").src = imagemSalva;
//                 document.getElementById("BackgroundImage").style.display = "block";
//                 document.body.style.backgroundImage = `url('${imagemSalva}')`;
//             }
//         }
//     }
        
    

 
//    document.getElementById("inputImagem").addEventListener("change", function(event) {
//        const file = event.target.files[0];
   
//        if (file) {
//            const reader = new FileReader();
   
//            reader.onload = function(e) {
//                const imageUrl = e.target.result;

//                salvarImagemNoLocalStorage(imageUrl);

//                document.getElementById("backgroundImage").src = imageUrl;
//                document.getElementById("backgroundImage").style.display = "block";
//                document.body.style.backgroundImage = `url('${imageUrl}')`;
//            };
   
//            reader.readAsDataURL(file);
//        }
//    });
//    carregarImagemSalva();
// });

 