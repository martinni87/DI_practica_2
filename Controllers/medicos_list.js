$(document).ready(function(){
    $("#search_button").click(function(){
        $.ajax({
            method: "POST",
            url: "./web_services/medicos_list.php",
            data:{
                nombre: $("#nombre").val(),
                apellido1: $("#apellido1").val(),
                numero_colegiado: $("#numero_colegiado").val(),
            },
            dataType: "json",
        })
        .done(function(response){
            // console.log(response)
            printTableStruct()
            Object.keys(response).forEach((element) => {
                console.log(element + " -> " + response[element]["nombre"])
                printResponse(element,response)
            });
        })
        .fail(function(jqXHR,textStatus,error){
            alert("Error en conexión ajax")
        })
    })

    $("#reset_button").click(function(){
        $("#tableToPrint").html("")
        document.getElementById("nombre").value = ""
        document.getElementById("apellido1").value = ""
        document.getElementById("numero_colegiado").value = ""
    })

    $(".delete_button").click(function () {
        //TODO Falta detectar correctamente cual es el botón que se está pulsando, se toma el attr name y con eso tenemos el id del registro a eliminar
        //Lo podemos pasar por la funcion deleteRecord y ahí hacemos una llamada ajax para pasar los datos al servidor y ejecutar el case delete con la llamada
        //de mysql para eliminar el registro
        let id = param.attr("name")
        deleteRecord(id)
    })
})



function printTableStruct(){
    let estructura = `<table id="myTable" class="table table-striped">
                    <thead>
                        <tr>
                            <th class="table-dark">Nº colegiado</th>
                            <th class="table-dark">DNI</th>
                            <th class="table-dark">Nombre</th>
                            <th class="table-dark">Apellido 1</th>
                            <th class="table-dark">Apellido 2</th>
                            <th class="table-dark">Teléfono</th>
                            <th class="table-dark">ID Especialidad</th>
                            <th class="table-dark">ID horario</th>
                            <th colspan="2" class="table-dark">Opciones</th>
                         </tr>
                    </thead>
                    <tbody id="myTableData">
                        <!-- Aquí se pintarán los resultados de la consulta -->
                    </tbody>
                    </table>`
    $("#tableToPrint").html(estructura)
}

function printResponse(index,response){
    // console.log(response[index])
    let fila =  `<tr>
                    <td>` + response[index]["numero_colegiado"] + `</td>
                    <td>` + response[index]["dni"] + `</td>
                    <td>` + response[index]["nombre"] + `</td>
                    <td>` + response[index]["apellido1"] + `</td>
                    <td>` + response[index]["apellido2"] + `</td>
                    <td>` + response[index]["telefono"] + `</td>
                    <td>` + response[index]["especialidad"] + `</td>
                    <td>` + response[index]["horario"] + `</td>
                    <td><button id="delete_button`+index+`" name="`+index+`" class="btn btn-danger" >-</button></td>
                    <td><button id="edit_button`+index+`" name="`+index+`" class="btn btn-warning">Editar</button></td>
                </tr>`
    $("#myTableData").append(fila)
}

function deleteRecord(id)
    {
        $.ajax({
            url: './web_services/medicos_list.php?id=' + id,
            type: 'DELETE',
        })
        .done(function(){
            console.log("Eliminado")
        })
        .fail(function(jqXHR,textStatus,error){
            alert("Error on delete")
        });
    }