$("#selh3").click(function(event){
    $("#contenedor").load('colombia.html')
});

En principio el uso más lógico que podemos darle a estos atributos personalizados consiste en 
generar desde una base de datos un código HTML con datos adicionales sin necesidad de recurrir a 
elementos ocultos o notación legible para JavaScript.

$("lia").click(function(event){
    event.preventDefault();
    if ($(this).data('Seleccion')!=null)){
        $("#contenedor").load('seleccion/'+$(this).data('seleccion')+'.html')
    }
});
