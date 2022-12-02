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
            var i = 1
            while(i <= Object.keys(response).length){
                printResponse(i,response)
                i++
            }
        })
        .fail(function(jqXHR,textStatus,error){
            alert("Error en conexión ajax")
        })
    })

    $("#reset_button").click(function(){
        $("#tableToPrint").html("")
    })

})


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
                    <td><button id="delete_button`+index+`" class="std_button delete_btn">-</button></td>
                    <td><button id="edit_button`+index+`" class="std_button delete_btn">Editar</button></td>
                </tr>`
    $("#myTableData").append(fila)
}

function printTableStruct(){
    let estructura = `<table id="myTable" class="list-table">
                    <thead>
                        <tr>
                            <th>Nº colegiado</th>
                            <th>DNI</th>
                            <th>Nombre</th>
                            <th>Apellido 1</th>
                            <th>Apellido 2</th>
                            <th>Teléfono</th>
                            <th>ID Especialidad</th>
                            <th>ID horario</th>
                            <th colspan="2">Opciones</th>
                         </tr>
                    </thead>
                    <tbody id="myTableData">
                        <!-- Aquí se pintarán los resultados de la consulta -->
                    </tbody>
                    </table>`
    $("#tableToPrint").html(estructura)
}