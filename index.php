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
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    <script src="./vendor/jquery-3.6.1.min.js"></script>
    <link rel="stylesheet" href="./css/main.css">
</head>
<body>
    <header class="header" id="header">
        <nav class="navbar" id="navbar">
            <form action="./web_services/login.php" method="post">
                <fieldset>
                    <legend>Login</legend>
                    <!-- Pista a efectos de la práctica: usuario = user, contraseña = 1234 -->
                    <label for="user">Usuario:</label><input type="text" name="user" class="std_input" id="user" placeholder="user" title="Introduzca un usuario" required>
                    <label for="password">Contraseña:</label><input type="password" name="password" class="std_input" id="password" placeholder="******" title="Introduzca una contraseña" required>
                    <input type="submit" name="submit" class="btn btn-primary" id="submit" value="Acceder">
                    <input type="reset" name="reset" class="btn btn-danger" id="reset" value="Limpiar" onclick="location.href='./index.php?msg'">
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