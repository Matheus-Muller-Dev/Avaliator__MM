import { auth, signOut } from './firebaseConfig.js';

    document.getElementById('logoutButton').addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link
        signOut(auth)
            .then(() => {
                // Remove o token do localStorage
                localStorage.removeItem('userToken');

                // Redireciona para a página de login
                window.location.href = "public/index.html";
            })
            .catch((error) => {
                console.error("Erro ao fazer logout:", error);
            });
    });

