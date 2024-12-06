import { FirebaseError } from "firebase/app";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-auth.js";
import { ErrorEmail } from "./modal";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_API_KEY,
    authDomain: import.meta.env.VITE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
    measurementId: import.meta.env.VITE_MEASUREMENT_ID
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

async function resetPassword() {
    const email = document.getElementById("email").value;

    if (!email) {
       ErrorEmail()
       return;
    }

    try {
        await sendPasswordResetEmail(auth, email);
        alert("E-mail para redefinição de senha enviado com sucesso! Verifique sua caixa de entrada.");
    } catch (error) {
        console.error("Erro ao enviar o e-mail de redefinição:", error);
        alert("Erro ao redefinir a senha: " + error.message);
    }
}

window.resetPassword = resetPassword;