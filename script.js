let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que selecciono una opcion
    document.getElementById("nav").classList = "";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("java");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("php");
        habilidades[5].classList.add("CSharp");
        habilidades[6].classList.add("Tiempo");
        habilidades[7].classList.add("comunicacion");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("adaptabilidad");
        habilidades[10].classList.add("trabajo");
        habilidades[11].classList.add("creatividad");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//codigo para la parte de proyectos
var botones = document.querySelectorAll(".botonVerMas");
var modales = document.querySelectorAll(".modal");
var cerrarBotones = document.querySelectorAll(".close");

botones.forEach((btn, index) => {
    btn.onclick = function() {
        modales[index].style.display = "block";
    }
});

cerrarBotones.forEach((cerrarBtn, index) => {
    cerrarBtn.onclick = function() {
        modales[index].style.display = "none";
    }
});

window.onclick = function(event) {
    if (event.target.className === "modal") {
        event.target.style.display = "none";
    }
}

//Validacion para el formulario de contacto
function Comprobar(form) {
    var nombre = document.getElementById('nombre').value;
    var telefono = document.getElementById('telefono').value;
    var correo = document.getElementById('correo').value;
    var tema = document.getElementById('tema').value;
    var mensaje = document.getElementById('mensaje').value;

    if(nombre === '' || telefono === '' || correo === '' || tema === '' || mensaje === '') {
        alert('Por favor, complete todos los campos antes de enviar.');
        return false;
    }

    if(!correo.includes('@')) {
        alert('Por favor, ingrese una dirección de correo válida.');
        return false;
    }

    // Agrega más validaciones según lo necesario

    // Modificar el action del formulario para incluir los datos en el correo
    form.action = "mailto:jm9777296@gmail.com?subject=" + tema + "&body=Nombre: " + nombre + "%0D%0ATelefono: " + telefono + "%0D%0ACorreo: " + correo + "%0D%0AMensaje: " + mensaje;
    return true;
}


