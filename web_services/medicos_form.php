<?php
//Atributos para PDO
$hostdbname = 'mysql:host=localhost;dbname=hospital';
$username = 'root';
$password = '';

//Parametros Ajax si los hubiera
$numero_colegiado = $_POST["numero_colegiado"];
$dni = $_POST["dni"];
$nombre = $_POST["nombre"];
$apellido1 = $_POST["apellido1"];
$apellido2 = $_POST["apellido2"];
$telefono = $_POST["telefono"];
$especialidad_id = $_POST["especialidad_id"];
$horario_id = $_POST["horario_id"];

try{
    //Creando conexión a Base de datos
    $con = new PDO($hostdbname,$username,$password,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8')); 
    $con -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    //Creamos dos array que recibirán los datos que el usuario introduzca en las celdas.
    $sql_columns = array();
    $sql_values = array();
    //Creamos un array que parametrizará los datos introducidos para añadirlos a la query
    $parametros = array();

    //Si está seteado, lo añadimos a los values de la query y lo parametrizamos.
    if ($numero_colegiado != ""){
        $sql_columns[] = 'numero_colegiado';
        $sql_values[] = ':numero_colegiado';
        $parametros[':numero_colegiado'] = $numero_colegiado;
    }
    if ($dni != ""){
        $sql_columns[] = 'dni';
        $sql_values[] = ':dni';
        $parametros[':dni'] = $dni;
    }
    if ($nombre != ""){
        $sql_columns[] = 'nombre';
        $sql_values[] = ':nombre';
        $parametros[':nombre'] = $nombre;
    }
    if ($apellido1 != ""){
        $sql_columns[] = 'apellido1';
        $sql_values[] = ':apellido1';
        $parametros[':apellido1'] = $apellido1;
    }
    if ($apellido2 != ""){
        $sql_columns[] = 'apellido2';
        $sql_values[] = ':apellido2';
        $parametros[':apellido2'] = $apellido2;
    }
    if ($telefono != ""){
        $sql_columns[] = 'telefono';
        $sql_values[] = ':telefono';
        $parametros[':telefono'] = $telefono;
    }
    if ($especialidad_id != ""){
        $sql_columns[] = 'especialidad_id';
        $sql_values[] = ':especialidad_id';
        $parametros[':especialidad_id'] = $especialidad_id;
    }
    if ($horario_id != ""){
        $sql_columns[] = 'horario_id';
        $sql_values[] = ':horario_id';
        $parametros[':horario_id'] = $horario_id;
    }

    $sql = 'INSERT INTO medicos (';
    $separator = ",";

    //Concatenamos para construir la query completa
    $sql .= implode($separator,$sql_columns);
    $sql .= ') VALUES (';
    $sql .= implode($separator, $sql_values);
    $sql .= ')';

    $stmt = $con -> prepare($sql);
    $stmt->execute($parametros);
    $array["msg"] = "done";
    $json = json_encode($array);
    echo $json;


}catch(PDOException $e){
    echo 'Error en la conexión a la BD: ' . $e -> getMessage();
}

?>