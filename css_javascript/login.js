function logar(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;

    if(login == "admin" && senha == "admin"){
        location.href = "painel/index1.html";
    }else{
        alert("usuario e senha incorretos")
    }

}