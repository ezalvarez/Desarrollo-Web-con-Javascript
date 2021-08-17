var tamanos = ['11px','13px','15px','17px','19px','21px','23px','25px','27px','29px','31px','33px','35px','37px','39px']

var i = 7
var caja = document.getElementById ('agrandar')

function agrandartxt(){
	if (i<tamanos.length){
		i++
	}
	caja.style.fontSize = tamanos[i]
}

function achicartxt(){
	if(i>0){
		i--
	}
	caja.style.fontSize = tamanos[i]
}

function mostrar (texto) {
	var elemento = document.getElementById(texto)
	var botones = document.getElementById('botones')
	if(elemento.style.display == 'none'){
		elemento.style.display = 'inline'
		botones.style.display = 'block'
	}else {
		elemento.style.display = 'none'
		
	}
	
	
}
