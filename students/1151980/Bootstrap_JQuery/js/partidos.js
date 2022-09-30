var part ="";
$.getJSON('jeison.json',function(datos){
    $("#contenido").html('');
        $.each(datos["partido"],function(idx,partido){
            $("#contenido").append("<tr>"+
            "<td>"+partido+["fecha"]+"</td><td>"+partido["equipo1"]+"</td><td>"
            +partido.equipo2+"</td>"+"</tr>");
        });
        });
