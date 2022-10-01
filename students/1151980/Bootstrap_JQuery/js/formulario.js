
// function validaVacio(valor) {
//     valor = valor.replace("&nbsp;", "");
//     valor = valor == undefined ? "" : valor;
//     if (!valor || 0 === valor.trim().length) {
//         return true;
//         }
//     else {
//         return false;
//         }
//     }

// function validarfor(){

// var correo = document.getElementById("mail").value; 
// var nom = document.getElementsByName("name")[0].value;
// var webs = document.getElementsByName("webs")[0].value;
// var message = document.getElementsByName("message")[0].value;

// var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;


// if ( !expr.test(correo) ){                                                            //COMPRUEBA MAIL
//     alert("Error: La dirección de correo " + correo + " es incorrecta.");
//     return false;
// }

// if ( validaVacio(correo.value) || validaVacio(nom.value) || validaVacio(webs.value) || validaVacio(message.value)) {  //COMPRUEBA CAMPOS VACIOS
//     alert("Los campos no pueden quedar vacios");
//     return false;
    
// }
// return true;
// }

const nombre = document.getElementById("nameU")
const email = document.getElementById("mail")
const form = document.getElementById("contact_form")
const parrafo = document.getElementById("message")

contact_form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += `El email no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }else{
        parrafo.innerHTML = "Enviado"
    }
})