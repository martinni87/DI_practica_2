<?php

$user = $_POST["user"];
$password = $_POST["password"];

if ($user == "user" && $password == "1234"){
    header("Location: ../Views/home.html");
}
else{
    header("Location: ../index.php?msg=Usuario o contraseña incorrectos.");
}

?>