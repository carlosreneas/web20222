// function validarfor(){

//     var correo = document.getElementById("mail").value; 
//     var nom = document.getElementsByName("name")[0].value;
//     var webs = document.getElementsByName("webs")[0].value;
//     var message = document.getElementsByName("message")[0].value;
    
//     var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    
    
//     if ( !expr.test(correo) ){                                                            //COMPRUEBA MAIL
//         alert("Error: La dirección de correo " + correo + " es incorrecta.");
//         return false;
//     }
    
//     if ((correo == "") || (nom == "") ||  (webs == "") || (message == "")) {  //COMPRUEBA CAMPOS VACIOS
//         alert("Los campos no pueden quedar vacios");
//         return false;
//     }
    
//     }

function validaVacio(valor) {
    valor = valor.replace("&nbsp;", "");
    valor = valor == undefined ? "" : valor;
    if (!valor || 0 === valor.trim().length) {
        return true;
        }
    else {
        return false;
        }
    }

function validarfor(){

var correo = document.getElementById("mail").value; 
var nom = document.getElementsByName("name")[0].value;
var webs = document.getElementsByName("webs")[0].value;
var message = document.getElementsByName("message")[0].value;

var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


if ( !expr.test(correo) ){                                                            //COMPRUEBA MAIL
    alert("Error: La dirección de correo " + correo + " es incorrecta.");
    return false;
}

if ( validaVacio(correo.value) || validaVacio(nom.value) || validaVacio(webs.value) || validaVacio(message.value)) {  //COMPRUEBA CAMPOS VACIOS
    alert("Los campos no pueden quedar vacios");
    return false;
    
}
return true;
}