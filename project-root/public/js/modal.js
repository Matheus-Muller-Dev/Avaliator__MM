export function ButtonAlert() {
    Swal.fire({
        title: "Good job!",
        text: "You clicked the button!",
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

export function Errorlogin(){
    Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Email ou senha incorretos...",
      });
}