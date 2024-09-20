function acesso() {
    var senha = prompt("Digite a senha ADM");

    if (senha === "admin") {
        mostrarDiv();
    } else {
        alert("Senha incorreta");
        acesso()
    }
}

function mostrarDiv() {
    var divOculta = document.getElementById('minhaDiv');
    divOculta.style.display = 'block';

    setTimeout(function() {
        divOculta.style.display = 'none';
    }, 60000);
}

function toggleMenu() {
    const menu = document.querySelector('.menuOpcoes');
    const divOculta = document.getElementById('minhaDiv');

    // Se a divOculta está visível, oculta ela
    if (divOculta.style.display === 'block') {
        divOculta.style.display = 'none';
    } else {
        // Se não estiver visível, mostra ela
        divOculta.style.display = 'block';

        // Chame a função acesso quando o menu é clicado, se necessário
        acesso();
    }

    // Lógica específica para o menu, se necessário
    menu.style.display = (menu.style.display === 'none' || menu.style.display === '') ? 'block' : 'none';
}

document.getElementById("mostrarDiv").addEventListener("click", function() {
    // Chame a função acesso quando o botão "Mudar Layout" for clicado
    acesso();
});
