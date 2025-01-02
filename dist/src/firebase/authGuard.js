import { auth } from './firebaseConfig.js';
import { onAuthStateChanged } from 'firebase/auth';
import { Logout } from '../js/modal.js'

function checkAuth() {
    const userToken = localStorage.getItem('userToken');

    if (!userToken) {
        window.location.href = "index.html";
        Logout();
    }

    // Opcional: Validar token no backend ou decodificá-lo (usando biblioteca como jwt-decode)
}

document.addEventListener('DOMContentLoaded', checkAuth);

