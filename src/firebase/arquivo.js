import { auth } from './firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Errorlogin } from '../../public/js/modal';
import { setPersistence, browserLocalPersistence } from "firebase/auth";

async function login(event) {
    event.preventDefault();
    const email = document.getElementById('login').value;
    const password = document.getElementById('senha').value;

    try {
        await setPersistence(auth, browserLocalPersistence);

        // login
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;

        // ReceBe o token do usuário
        const idToken = await user.getIdToken();

        // Armazena o token no localStorage
        localStorage.setItem('userToken', idToken);

        // Redireciona para o painel
        window.location.href = "/painel/painel.html";
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        Errorlogin()
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginButton').addEventListener('click', login);
});