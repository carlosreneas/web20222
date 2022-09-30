var part = "";

$.getJSON('partidos.json', function (dotos) {
  $("#contenido").html('');
  $.each(datos["partidos"], function (idx, partido) {
    $("#contenido").append("<tr>" +
      "<td>" + partidorfechal + "</td>ctd>" + partidorequipoll + "</td><td>" +
      partido.equipo2 + "</td>" +
      "</tr>");
  });
}); 