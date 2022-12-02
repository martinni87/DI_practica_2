<?php
//Atributos para PDO
$hostdbname = 'mysql:host=localhost;dbname=hospital';
$username = 'root';
$password = '';

//Hacemos un try-catch para capturar errores en caso de que la conexión falle de alguna manera.
try{
    //Creando conexión a Base de datos
    $con = new PDO($hostdbname,$username,$password,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8')); 
    $con -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


    $sql = 'SELECT * FROM medicos WHERE true';

    $stmt = $con -> prepare($sql);
    $stmt->execute();

    $arrayAssoc = array();
    $subarray = array();

    while($data = $stmt -> fetch(PDO::FETCH_ASSOC)){
        $id = $data["id"];

        $subarray["numero_colegiado"] = $data["numero_colegiado"];
        $subarray["dni"]              = $data["dni"];
        $subarray["nombre"]           = $data["nombre"];
        $subarray["apellido1"]        = $data["apellido1"];
        $subarray["apellido2"]        = $data["apellido2"];
        $subarray["telefono"]         = $data["telefono"];
        $subarray["especialidad"]     = $data["especialidad_id"];
        $subarray["horario"]          = $data["horario_id"];

        $arrayAssoc[$id] = $subarray;
    }

    $jsonBundle = json_encode($arrayAssoc);

    echo $jsonBundle;

}catch(PDOException $e){
    echo 'Error en la conexión a la BD: ' . $e -> getMessage();
}
?>