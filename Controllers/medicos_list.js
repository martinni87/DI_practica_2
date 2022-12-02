$(document).ready(function(){
    $("#search_button").click(function(){
        $.ajax({
            method: "POST",
            url: "web_services/medicos_list.php",
            data:{},
            dataType: "json",
        })
        .done(function(response){
            var i = 1
            printHeaders()
            while(i <= Object.keys(response).length){
                printResponse(i,response)
                i++
            }
        })
        .fail(function(jqXHR,textStatus,error){
            alert("Error en conexión ajax")
        })

    })
})

function printHeaders(){
    let cabecera = `<table id="myTable" class="list-table">
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
                         </tr>
                    </thead>
                    <tbody id="myTableData">
                        <!-- Aquí se pintarán los resultados de la consulta -->
                    </tbody>
                    </table>`
    $("#article1").html(cabecera)
}

function printResponse(index,response){
    console.log(response[index])
    let fila =  `<tr>
                    <td>` + response[index]["numero_colegiado"] + `</td>
                    <td>` + response[index]["dni"] + `</td>
                    <td>` + response[index]["nombre"] + `</td>
                    <td>` + response[index]["apellido1"] + `</td>
                    <td>` + response[index]["apellido2"] + `</td>
                    <td>` + response[index]["telefono"] + `</td>
                    <td>` + response[index]["especialidad"] + `</td>
                    <td>` + response[index]["horario"] + `</td>
                </tr>`
    $("#myTableData").append(fila)
}