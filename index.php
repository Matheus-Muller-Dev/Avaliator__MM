<?php
session_start()
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>  
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="css_javascript/style.css">
    <script src="css_javascript/login.js"></script>
    <title>LOGIN AVBB</title>
</head>
<body>
    <?php
    include "php\conexao.php"
    //continuar depois
    if (isset($ ))

    ?>
    <main>
        <form action="">
            <div id="image-container"> 
            </div>
            <div class="box">
                <h1 class="h1-inicio">FAÇA SEU LOGIN</h1>
                <label for="">
                    <input type="text" id="login" class="input-des" placeholder="digite o valor" autocomplete="off">
                </label>
                <br><br>
                <label for="">
                    <input type="password" id="senha" class="input-des" placeholder="digite sua senha">
                </label>
                <br><br>
                <button type="submit" onclick="logar(); return false">ENTRAR</button>
            </div>
        </form>
    </main>
   


    
</body>
</html>