export function ButtonAlert() {
    Swal.fire({
        title: "Obrigado por sua avaliação.",
        text: "foi enviada com sucesso.",
        icon: "success"
});
};

export function ErroButtonEmoji () {
    Swal.fire("Por favor, selecione um humor.");
}

export function ErroButtonComentario () {
    Swal.fire("Por favor, insira um comentário.");
}

export function ErrorEmail(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Por favor, digite um e-mail...",
      });
}

export function EmailAlert() {
    Swal.fire({
        title: "E-mail para redefinição de senha enviado com sucesso! ",
        text: "Verifique sua caixa de entrada.",
        icon: "success"
});
};

export function Errorlogin(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email ou senha incorretos...",
      });
}