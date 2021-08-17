var usuario = document.getElementById('usuario')
var email = document.getElementById('email')
var clave = document.getElementById('password')

function validarDatos(){
	usuario.addEventListener('input',validarusuario)
	clave.addEventListener('input',validarclave)
	email.addEventListener('input',validaremail)
	validarusuario()
	validarclave()
	validaremail()
}

function validarusuario(){
	if (usuario.value.trim() == ''){
		usuario.setCustomValidity('Ingrese el Usuario')
	} else{
		usuario.setCustomValidity('')
		usuario.style.backgroundColor = '#aeebab'
	}
}

function validarclave(){
	if (clave.value.trim()==''){
		clave.setCustomValidity('Debe de ingresar la contraseña')
	}else{
		clave.style.backgroundColor = '#ebb6ab'
		if(clave.value.length<5){
			clave.setCustomValidity('La contraseña debe de poseer como minimo 5 caracteres')
		}else{
			clave.setCustomValidity('')
			clave.style.backgroundColor = '#aeebab'
		}
	}
}

function validaremail(){
	if (email.value == ''){
		email.setCustomValidity('Ingrese un mail correspondiente')
	} else{
		email.setCustomValidity('')
		email.style.backgroundColor = '#aeebab'
	}
}


window.addEventListener('load',validarDatos)