<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset='UTF-8'>
    <meta name='author' content='Martín Antonio Córdoba Getar'>
    <meta name='description' content='Práctica de Desarrollo de Interfaces 2ºDAM EFA El Campico'>
    <meta name='keywords' content='MVC, DAM, Ejercicios Desarrollo de Interfaces'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>Práctica 2.1 Desarrollo de Interfaces</title>
    <script src="./vendor/jquery-3.6.1.min.js"></script>
    <script src="./Controllers/index.js"></script>
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    <header class="header" id="header">
        <nav class="navbar" id="navbar">
            <form action="./web_services/login.php" method="post">
                <fieldset>
                    <legend>Login</legend>
                    <!-- A efectos de la práctica, el usuario es user y la contraseña también es 1234 -->
                    <input type="text" name="user" class="inputFieldText" id="user" value="" placeholder="Usuario" title="Escriba nombre de usuario"required>
                    <input type="password" name="password" class="inputFieldText" id="password" value="" placeholder="Contraseña" title="Escriba una contraseña" required>
                    <input type="submit" name="submit" class="std_button send_button" id="submit" value="Acceder">
                    <input type="reset" name="reset" class="std_button reset_button" id="reset" value="Limpiar" onclick="location.href='./index.php?msg'">
                </fieldset>
                <div name="msg" id="msg"><?php $msg = $_GET["msg"]; echo $msg; ?></div>
            </form>
        </nav>
    </header>

    <main class="main" id="main">
        <article class="article" id="article1" name="article1">

        </article>
    </main>

    <footer class="footer" id="footer">

    </footer>
</body>
</html>