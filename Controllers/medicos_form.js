$(document).ready(function(){

    // let numero_colegiado = document.getElementById("numero_colegiado")
    // let dni = document.getElementById("dni")
    // let nombre = document.getElementById("nombre")
    // let apellido1 = document.getElementById("apellido1")
    // let apellido2 = document.getElementById("apellido2")
    // let telefono = document.getElementById("telefono")
    // let especialidad_id = document.getElementById("especialidad_id")
    // let horario_id = document.getElementById("horario_id")

    $("#submit").click(function(){
        $.ajax({
            method: "POST",
            url: "./web_services/medicos_form.php",
            data: {
                $numero_colegiado: $("#numero_colegiado").val(),
                $dni: $("#dni").val(),
                $nombre: $("#nombre").val(),
                $apellido1: $("#apellido1").val(),
                $apellido2: $("#apellido2").val(),
                $telefono: $("#telefono").val(),
                $especialidad_id: $("#especialidad_id").val(),
                $horario_id: $("#horario_id").val(),
            },
            dataType: "json",
        })
        .done(function(response){
            // console.log(response)
            // printTableStruct()
            // Object.keys(response).forEach((element) => {
            //     console.log(element + " -> " + response[element]["nombre"])
            //     printResponse(element,response)
            // });
            console.log(response)
        })
        .fail(function(jqXHR,textStatus,error){
            alert("Error en conexión ajax")
        })
    })

    // $("#reset_button").click(function(){
    //     $("#tableToPrint").html("")
    //     document.getElementById("nombre").value = ""
    //     document.getElementById("apellido1").value = ""
    //     document.getElementById("numero_colegiado").value = ""
    // })
})

// function printTableStruct(){
//     let estructura = `<table id="myTable" class="list-table">
//                     <thead>
//                         <tr>
//                             <th>Nº colegiado</th>
//                             <th>DNI</th>
//                             <th>Nombre</th>
//                             <th>Apellido 1</th>
//                             <th>Apellido 2</th>
//                             <th>Teléfono</th>
//                             <th>ID Especialidad</th>
//                             <th>ID horario</th>
//                             <th colspan="2">Opciones</th>
//                          </tr>
//                     </thead>
//                     <tbody id="myTableData">
//                         <!-- Aquí se pintarán los resultados de la consulta -->
//                     </tbody>
//                     </table>`
//     $("#tableToPrint").html(estructura)
// }

// function printResponse(index,response){
//     // console.log(response[index])
//     let fila =  `<tr>
//                     <td>` + response[index]["numero_colegiado"] + `</td>
//                     <td>` + response[index]["dni"] + `</td>
//                     <td>` + response[index]["nombre"] + `</td>
//                     <td>` + response[index]["apellido1"] + `</td>
//                     <td>` + response[index]["apellido2"] + `</td>
//                     <td>` + response[index]["telefono"] + `</td>
//                     <td>` + response[index]["especialidad"] + `</td>
//                     <td>` + response[index]["horario"] + `</td>
//                     <td><button id="delete_button`+index+`" class="std_button delete_btn">-</button></td>
//                     <td><button id="edit_button`+index+`" class="std_button delete_btn">Editar</button></td>
//                 </tr>`
//     $("#myTableData").append(fila)
// }