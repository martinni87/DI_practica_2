# PRACTICA 2.1. DESARROLLO DE INTERFACES

* **Alumno**: Martín Antonio Córdoba Getar
* **Curso**: 2º Desarrollo de Aplicaciones Multiplataforma
* **Desarrollo de Interfaces**

## Explicación de la práctica

El objetivo final de la práctica es montar un pequeño CRUD, aplicación con las funcionalidades de CREATE, READ, UPDATE, DELETE con PHP sobre la Base de Datos "hospital.sql" que se encuentra cargada con los recursos de la asignatura.

Realizamos un proyecto para Desarrollo de Interfaces con el front-end de la aplicación, de manera que consuma los servicios web del proyecto realizado para la práctica AD mediante peticiones Ajax.

## Esquema de la prática
Creamos las vistas y controladores para cada uno de los apartados que componen el proyecto. El objetivo es crear una aplicación que sea capaz de gestionar citas sobre la BD Hospital, **será suficiente con la utilización de las tablas médicos, pacientes y citas**. Para ello crearemos los archivos HTML con la estructura de cada pantalla (Views), los CSS asociados a cada vista, para darle un aspecto atractivo y los Controller con JavaScript correspondientes.

El nombre del proyecto es **DI_practica_2**, iremos creando una rama por cada parte de la práctica de manera que la primera creamos practica_2.1, en donde haremos los commits necesarios y finalizada haremos un merge con la rama master.

La estructura del proyecto web es la siguiente:
* **Controllers** controladores de vistas en JavaScript
* **CSS** hojas de estilos
* **/** directorio raíz en donde irán las vistas
* **index.html** Pantalla de inicio del proyecto, en este caso se ha hecho un login sencillo en php

Los archivos serán del tipo medico_list.html, medico_list.js, medico_list.php, para las vistas generales y medico_form.html, medico_form.js, medico_form.php para las vistas de los formularios en donde podremos hacer inserts, updates, etc.

Repetir para cada vista.

## Formato de respuesta
El servicio web siempre devolverá un json con la siguiente estructura, no haremos echo.
```json
{
    "success": "true",
    "msg": "Listado de medicos",
    "data":[
        {"nombre":"Martín","apellido_1":"Córdoba","localidad":"Elche"},
        {"nombre":"Juan","apellido_1":"García","localidad":"Orihuela"}
    ],
    "paginated":"true",
    "page":1,
    "total_rows":25,
    "rows_per_page":2
}
```
* Succsess nos indicará si la respuesta es correcta o no.
* msg nos devolverá un mensaje de respuesta para la operación.
* data contiene la información a devolver por ejemplo un array de datos
* paginated indica si el resultado se quiere o no paginado
* page indica la página que se quiere para un listado
* total_rows indica el total de registros
* rows_per_page indica el número de registros por pagina

## Formato de petición
El formato  de envío de parámetros ajax será el siguiente:
```json
data:
{
    "action": "get",
    "filters":
    {
        "nombre":"Martín",
        "apellido_1":"Córdoba",
        "localidad":"Elche"
    },
    "orders":
    {
        "nombre":"desc",
        "apellido":"desc",
        "localidad":"asc"
    },
    "paginated": true,
    "page": 2,
    "rows_per_page":10,
}
```