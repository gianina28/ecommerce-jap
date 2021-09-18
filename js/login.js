//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.

let btn = document.getElementById("btn");
	if (btn) {
		btn.addEventListener("click", function (e) {
			validarFormulario (e);
		}); 
	}
	let usr = localStorage.getItem("Usuario");
	if (usr) {
		let usrLink = document.getElementById("usuario.pag");
		if (usrLink) {usrLink.innerHTML = "Usuario : "+ usr;}
	}
function validarFormulario (evento) {
	evento.preventDefault();
	let user= document.getElementById ("Usuario").value
	let contraseña = document.getElementById ("Contraseña").value;
	if (user.length == 0 ) {
		alert ("¡Vaya! Parece que te has olvidado de colocar tu mail")
        return;
	}
    
	if (contraseña.length == 0) {
		alert ("¡Vaya! Parece que te has olvidado de colocar tu contraseña")
        return;
	}
	else  {
		let fin
		let Usuario = user.substring (0, fin);
		localStorage.setItem ("Usuario",Usuario);
		console.log(Usuario);
        var usuario = localStorage.getItem("Usuario");
		window.location.href = "./home.html";
    
	}
    
};