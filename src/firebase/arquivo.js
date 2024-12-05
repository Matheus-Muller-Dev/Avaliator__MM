import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

async function login(event) {
    event.preventDefault();
    const email = document.getElementById('login').value;
    const password = document.getElementById('senha').value;

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        //Obtém o token do usuário
        const idToken = await user.getIdToken();
        console.log("Token do usuário:", idToken)

        // Armazena o token no localStorage
        localStorage.setItem('userToken', idToken);

        // Redireciona para o painel
        window.location.href = "../../project-root/public/painel/index1.html";
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("Erro ao fazer login:", errorCode, errorMessage);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginButton').addEventListener('click', login);
});