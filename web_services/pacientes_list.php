<?php
//Atributos para PDO
$hostdbname = 'mysql:host=localhost;dbname=hospital';
$username   = 'root';
$password   = '';

//Parametros Ajax si los hubiera
$nombre     = $_POST["nombre"];
$apellido1  = $_POST["apellido1"];
$sip        = $_POST["sip"];

//Hacemos un try-catch para capturar errores en caso de que la conexión falle de alguna manera.
try{
    //Creando conexión a Base de datos
    $con = new PDO($hostdbname,$username,$password,array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8')); 
    $con -> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    switch (strtolower($_SERVER['REQUEST_METHOD'])) {
        case 'post':
            //Creamos una variable que recibirá la parte de filtros a aplicar en la query
            $sql_filtros = "";
            //Array que recoge parámetros sólo si el usuario ha utilizado un determinado filtro.
            $parametros = array();

            //Condiciones de filtros. Se añaden si el usuario indica un valor en un filtro y son acumulativos. Definen $sql y $parametros
            if ($nombre != ""){
                $sql_filtros .= ' AND nombre LIKE :nombre';
                $parametros[':nombre'] = '%'.$nombre.'%';
            }
            if ($apellido1 != ""){
                $sql_filtros .= ' AND apellido1 LIKE :apellido1';
                $parametros[':apellido1'] = '%'.$apellido1.'%';
            }
            if ($sip != ""){
                $sql_filtros .= ' AND sip LIKE :sip';
                $parametros[':sip'] = '%'.$sip.'%';
            }
            
            $sql = 'SELECT * FROM pacientes WHERE true' . $sql_filtros;

            $stmt = $con -> prepare($sql);
            $stmt->execute($parametros);

            $arrayAssoc = array();
            $subarray = array();

            while($data = $stmt -> fetch(PDO::FETCH_ASSOC)){
                $id = $data["id"];

                $subarray["sip"]                = $data["sip"];
                $subarray["dni"]                = $data["dni"];
                $subarray["nombre"]             = $data["nombre"];
                $subarray["apellido1"]          = $data["apellido1"];
                $subarray["apellido2"]          = $data["apellido2"];
                $subarray["telefono"]           = $data["telefono"];
                $subarray["sexo"]               = $data["sexo"];
                $subarray["fecha_nacimiento"]   = $data["fecha_nacimiento"];
                $subarray["localidad"]          = $data["localidad"];

                $arrayAssoc[$id] = $subarray;
            }

            $jsonBundle = json_encode($arrayAssoc);

            echo $jsonBundle;
            break;

        // case 'delete':
        //     $id = $_GET["id"];
        //     $sql = "DELETE FROM medicos WHERE id = :id";
        //     $stmt = $con->prepare($sql);
        //     try {
        //         $stmt->execute(['id' => $id]);
        //     } catch (Exception $exception) {
        //         http_response_code(500);
        //         die($exception->getMessage());
        //     }
        //     break;

        // case 'edit':
        //     break;
    }
    

}catch(PDOException $e){
    echo 'Error en la conexión a la BD: ' . $e -> getMessage();
}
?>