var frame = window.requestAnimationFrame ||
 			window.mozRequestAnimationFrame || 
			window.webkitRequestAnimationFrame || 
			window.msRequestAnimationFrame;

var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext('2d');

var jugador = {
	x: 200,
	y: 70,
	ancho: 10,
	alto: 10,
	color: "red",
	movimiento_x: 0,
	movimiento_y: 0,
	velocidad: 5
}

var datos= {
	izquierda: false,
	derecha: false,
	arriba: false,
	abajo: false
// variables booleanas
}

var juego = {
	//captura si se oprime o se suelta el teclado


	teclado: function(){
		document.addEventListener("keydown",juego.opremir);
		document.addEventListener("keyup",juego.soltar);
	}
	//funcion oprimir distru q tecla
	oprimir: function(){
		tecla.preventDefault();
		switch(tecla.keyCode){
			case 37: datos.isquierda=true;break;
			case 38: datos.arriba=true;break;
			case 39: datos.derecha=true;break;
			case 40: datos.abajo=true;break;
		}

	}
	//funcion soltar distr q tecla
	soltar: function(tecla){
		tecla.preventDefaul();
		switch(tecla.keyCode){
			case 37: datos.isquierda=true;break;
			case 38: datos.arriba=true;break;
			case 39: datos.derecha=true;break;
			case 40: datos.abajo=true;break; }
		
	}

	tiempo: function(){

		jugador.x += jugador.movimiento_x;
		if (datos.izquierda) {
			jugador.movimiento_x = -jugador.velocidad;
			jugador.movimiento_y = 0;
		}

	
		if (datos.derecha) {
			jugador.movimiento_x = jugador.velocidad;
			jugador.movimiento_y = 0;
		}
		if (datos.izquierda && datos.derecha) {
			jugador.movimiento_x=0

		}

        jugador.y += jugador.movimiento_y;
    

    if (datos.abajo) {
			jugador.movimiento_x = -jugador.velocidad;
			jugador.movimiento_y = 0;
		}

	
		if (datos.arriba) {
			jugador.movimiento_x = jugador.velocidad;
			jugador.movimiento_y = 0;
		}
		if (datos.arriba && datos.abajo) {
			jugador.movimiento_x=0

		}

		juego.canvass();
		frame(juego.tiempo);
},

    canvas: function(){
		ctx.clearRect(0.0,canvas.width,canvas.height);
		ctx.fillSyle=jugador.color;
		ctx.fillRect(jugador.x.jugador.y,jugador.ancho,jugador.alto);
	}

}
juego.teclado();
juego.tiempo();