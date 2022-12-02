$(document).ready(function(){
    $("#search_button").click(function(){
        $.ajax({
            method: "POST",
            url: "./web_services/pacientes_list.php",
            data:{
                nombre: $("#nombre").val(),
                apellido1: $("#apellido1").val(),
                sip: $("#sip").val(),
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
        document.getElementById("sip").value = ""
    })

    // $(".delete_button").click(function () {
    //     //TODO Falta detectar correctamente cual es el botón que se está pulsando, se toma el attr name y con eso tenemos el id del registro a eliminar
    //     //Lo podemos pasar por la funcion deleteRecord y ahí hacemos una llamada ajax para pasar los datos al servidor y ejecutar el case delete con la llamada
    //     //de mysql para eliminar el registro
    //     let id = param.attr("name")
    //     deleteRecord(id)
    // })
})

function printTableStruct(){
    let estructura = `<table id="myTable" class="list-table">
                    <thead>
                        <tr>
                            <th>Nº SIP</th>
                            <th>DNI</th>
                            <th>Nombre</th>
                            <th>Apellido 1</th>
                            <th>Apellido 2</th>
                            <th>Teléfono</th>
                            <th>Sexo</th>
                            <th>Fecha de nacimiento</th>
                            <th>Localidad</th>
                            <th colspan="2">Opciones</th>
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
                    <td>` + response[index]["sip"] + `</td>
                    <td>` + response[index]["dni"] + `</td>
                    <td>` + response[index]["nombre"] + `</td>
                    <td>` + response[index]["apellido1"] + `</td>
                    <td>` + response[index]["apellido2"] + `</td>
                    <td>` + response[index]["telefono"] + `</td>
                    <td>` + response[index]["sexo"] + `</td>
                    <td>` + response[index]["fecha_nacimiento"] + `</td>
                    <td>` + response[index]["localidad"] + `</td>
                    <td><button id="delete_button`+index+`" name="`+index+`" class="std_button delete_button" >-</button></td>
                    <td><button id="edit_button`+index+`" name="`+index+`" class="std_button edit_button">Editar</button></td>
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