/* Cambio del nombre en la pestaña de la página */

function menu1() {
	document.getElementById('txtInicio').innerHTML = "Inicio";
}

function menu2() {
	document.getElementById('txtInicio').innerHTML = "Quienes Somos";
}

function menu3() {
	document.getElementById('txtInicio').innerHTML = "Instalaciones";
}

function menu4() {
	document.getElementById('txtInicio').innerHTML = "Servicios";
}

function menu5() {
	document.getElementById('txtInicio').innerHTML = "Productos";
}

function menu6() {
	document.getElementById('txtInicio').innerHTML = "Contacto";
}

/* Cambio del texto de muestra de cada servicio */

function txtConsultoria() {
	document.getElementById('txtServicios').innerHTML = "Ofrecemos un servicio profesional especializado en Digital Workspace.</br>Ayudamos a las empresas a realizar los procesos comunes de la empresa con herramientas digitales para así ir integrándolas en el mundo digital.";
}

function txtVideojuegos() {
	document.getElementById('txtServicios').innerHTML = "La empresa tiene un equipo encargado de desarrollar nuevos videojuegos para la cada gran comunidad 'gamer'.</br>Intentamos esforzarnos cada día más para cumplir con las exigencias de la comunidad que nos apoya.";
}

function txtDispositivos() {
	document.getElementById('txtServicios').innerHTML = "Ofrecemos un servicio de venta de dispositivos electrónicos.</br>Nuestros servicios cubren a empresas e individuales.</br>Disponemos de una gran variedad de productos para ordenadores.";
}

function txtDisenoApps() {
	document.getElementById('txtServicios').innerHTML = "Poseemos un equipo encargado de desarrollar aplicaciones, tanto de escritorio como dispositivos móviles.</br>Ofrecemos servicio a empresas las cuales nos cuentan las necesidades que tienen y nosotros nos encargamos de solucionarlas mediante la creación de 'Apps'.";
}

/* Carrusel de imagenes */

var inicio = 0;
carrusel();

function carrusel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	inicio++;
	if (inicio > x.length) {
		inicio = 1;
	}
	x[inicio - 1].style.display = "block";
	setTimeout(carrusel, 3000);
}

function txtTorres() {
	document.getElementById('txtProductos').innerHTML = "Tenemos torres de varias marcas, estilos y tamaños.</br>Nox, Nfortec, Asus, HP, etc.";
}

function txtMonitores() {
	document.getElementById('txtProductos').innerHTML = "Disponemos de monitores de varias marcas, estilos y tamaños.</br>Asus, LG, Samsung, Lenovo, etc.";
}

function txtPerifericos() {
	document.getElementById('txtProductos').innerHTML = "Disponemos de ratones de varias marcas, estilos y tamaños.</br>Trust, Mars Gaming, Razer, Lenovo, etc..";
}

function txtTeclados() {
	document.getElementById('txtProductos').innerHTML = "Tenemos teclados de varias marcas, estilos y tamaños.</br>.Razer, Corsair, Asus, Lenovo, etc.";
}


/* Validar formulario */

function validar() {
    /* Almacenar los valores de las cajas en los que introducimos datos */
    var nombre, mail, telefono, expresion;

    mail = document.getElementById("mail").value;
    telefono = document.getElementById("telefono").value;

    /* Permite caracteres */
    expresion = /\w+@\w+\.+[a-z]/;

    if (nombre === "" || mail === "" || telefono === "") {
        alert("Todos los campos deben ser rellenados.");
        return false;
    } else if (mail.length > 40) {
        alert("El numero de caracteres introducido supera el límite permitido: 40.");
        return false;
    } else if (!expresion.test(mail)) {
        alert("Correo no valido. Por favor introduzca un valor correcto.");
        return false;
    } else if (telefono.length != 9) {
        alert("El número de telefono introducido no es correcto.");
        return false;
    }
    if (document.contacto.consultoria.checked == false && document.contacto.videojuegos.checked == false && document.contacto.venta.checked == false && document.contacto.aplicaciones.checked == false) {
		alert("Por favor, seleccione el tipo de servicio. Gracias.");
		return false;
	}
}