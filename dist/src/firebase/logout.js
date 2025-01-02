import { auth, signOut } from './firebaseConfig.js';
import { Errologout } from '../js/modal.js'


    document.getElementById('logoutButton').addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão do link
        signOut(auth)
            .then(() => {
                // Remove o token do localStorage
                localStorage.removeItem('userToken');

                // Redireciona para a página de login
                window.location.href = "index.html";
            })
            .catch((error) => {
                Errologout();
            });
    });

