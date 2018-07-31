// configurar extencion de animacion
var frame=window.requestAnimationFrame||
		  window.mozRequedAnimationFrame||
		  window.webkitRequestAnimationFrame||
		  window.msRequesAnimationFrame;

var canvas=document.querySelector("#lienzo");
var ctx=canvas.getContext('2d');
//=========IMAGEN======
var sprite=new Image();
sprite.src="img/img1.jpg";
var numerowidth=0;
var ubicacionx =0;
var numero1=0;
var ubicacion1=0;

function tiempo(){
	if(numerowidth>=800) {numerowidth=0}else{numerowidth+=5}
		for (var i = 0; i <= numerowidth; i+=150) {
			if(numerowidth>=i) {ubicacionx=i}
		}
	if(numero1>=1000) {numero1=0}else{numero1+=5}
		for (var a = 0; a <= numero1; a+=10) {
			if(numero1>=a) {ubicacion1=a}
		}
	//ctx.draw(imagen, x1,y1,recortex, recortey,x2,xy2);
ctx.clearRect(ubicacion1,100,100,100);


//PAISAGE 1
var grd = ctx.createLinearGradient(0,0,0,500);

grd.addColorStop(0,"blue");
grd.addColorStop(1,"white");

ctx.fillStyle=grd;
ctx.fillRect(0,0,1000,500);
//paisage 2
var grd = ctx.createLinearGradient(0,400,0,500);

grd.addColorStop(0,"cyan");
grd.addColorStop(1,"white");

ctx.fillStyle=grd;
ctx.fillRect(0,400,1000,500);

//montaña 1
var montaña1 = {
	color: "blueviolet",
	iniciox:0,
	inicioy:400,
	linea1x:200,
	linea1y:110,
	linea1x1:400,
	linea1y1:400,
	visualizar: function(){
ctx.beginPath();
ctx.fillStyle= montaña1.color;
ctx.moveTo(montaña1.iniciox,montaña1.inicioy);
ctx.lineTo(montaña1.linea1x,montaña1.linea1y);
ctx.lineTo(montaña1.linea1x1,montaña1.linea1y1);
ctx.fill();
	}
}
 montaña1.visualizar();

//montaña 2
var montaña2 = {
	color: "blue",
	iniciox:200,
	inicioy:400,
	linea1x:400,
	linea1y:110,
	linea1x1:600,
	linea1y1:400,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= montaña2.color;
ctx.moveTo(montaña2.iniciox,montaña2.inicioy);
ctx.lineTo(montaña2.linea1x,montaña2.linea1y);
ctx.lineTo(montaña2.linea1x1,montaña2.linea1y1);
ctx.fill();		
	}
}
montaña2.visualizar();

//montaña 3
var montaña3 = {
	color: "blueviolet",
	iniciox:400,
	inicioy:400,
	linea1x:600,
	linea1y:110,
	linea1x1:800,
	linea1y1:400,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= montaña3.color;
ctx.moveTo(montaña3.iniciox,montaña3.inicioy);
ctx.lineTo(montaña3.linea1x,montaña3.linea1y);
ctx.lineTo(montaña3.linea1x1,montaña3.linea1y1);
ctx.fill();		
	}
}
montaña3.visualizar();

//montaña 4
var montaña4 = {
	color: "blue",
	iniciox:600,
	inicioy:400,
	linea1x:800,
	linea1y:110,
	linea1x1:1000,
	linea1y1:400,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= montaña4.color;
ctx.moveTo(montaña4.iniciox,montaña4.inicioy);
ctx.lineTo(montaña4.linea1x,montaña4.linea1y);
ctx.lineTo(montaña4.linea1x1,montaña4.linea1y1);
ctx.fill();		
	}
}
montaña4.visualizar();
//pico 1
var pico11 = {
	color: "white",
	iniciox:136,
	inicioy:200,
	linea1x:200,
	linea1y:109,
	linea1x1:200,
	linea1y1:300,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= pico11.color;
ctx.moveTo(pico11.iniciox,pico11.inicioy);
ctx.lineTo(pico11.linea1x,pico11.linea1y);
ctx.lineTo(pico11.linea1x1,pico11.linea1y1);
ctx.fill(); 		
	}
}
pico11.visualizar();

//2
var pico1 = {
	color: "lavender",
	iniciox:263,
	inicioy:200,
	linea1x:200,
	linea1y:109,
	linea1x1:200,
	linea1y1:300,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= pico1.color;
ctx.moveTo(pico1.iniciox,pico1.inicioy);
ctx.lineTo(pico1.linea1x,pico1.linea1y);
ctx.lineTo(pico1.linea1x1,pico1.linea1y1);
ctx.fill();		
	}
}

pico1.visualizar();
//pico2
var pico2 = {
	color: "white",
	iniciox:336,
	inicioy:200,
	linea1x:400,
	linea1y:109,
	linea1x1:400,
	linea1y1:300,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= pico2.color;
ctx.moveTo(pico2.iniciox,pico2.inicioy);
ctx.lineTo(pico2.linea1x,pico2.linea1y);
ctx.lineTo(pico2.linea1x1,pico2.linea1y1);
ctx.fill();		
	}
}

pico2.visualizar();

var pico22 = {
	color: "lavender",
	iniciox:463,
	inicioy:200,
	linea1x:400,
	linea1y:109,
	linea1x1:400,
	linea1y1:300,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= pico22.color;
ctx.moveTo(pico22.iniciox,pico22.inicioy);
ctx.lineTo(pico22.linea1x,pico22.linea1y);
ctx.lineTo(pico22.linea1x1,pico22.linea1y1);
ctx.fill();		
	}
}

pico22.visualizar();

//pico 3
var pico3 = {
	color: "white",
	iniciox:536,
	inicioy:200,
	linea1x:600,
	linea1y:109,
	linea1x1:600,
	linea1y1:300,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= pico3.color;
ctx.moveTo(pico3.iniciox,pico3.inicioy);
ctx.lineTo(pico3.linea1x,pico3.linea1y);
ctx.lineTo(pico3.linea1x1,pico3.linea1y1);
ctx.fill();

	}
}
pico3.visualizar();
var pico33 = {
	color: "lavender",
	iniciox:663,
	inicioy:200,
	linea1x:600,
	linea1y:109,
	linea1x1:600,
	linea1y1:300,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= pico33.color;
ctx.moveTo(pico33.iniciox,pico33.inicioy);
ctx.lineTo(pico33.linea1x,pico33.linea1y);
ctx.lineTo(pico33.linea1x1,pico33.linea1y1);
ctx.fill();		
	}
}
pico33.visualizar();

//pico 4
var pico4 = {
	color: "white",
	iniciox:736,
	inicioy:200,
	linea1x:800,
	linea1y:109,
	linea1x1:800,
	linea1y1:300,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= pico4.color;
ctx.moveTo(pico4.iniciox,pico4.inicioy);
ctx.lineTo(pico4.linea1x,pico4.linea1y);
ctx.lineTo(pico4.linea1x1,pico4.linea1y1);
ctx.fill();

	}
}

pico4.visualizar();

var pico44 = {
	color: "lavender",
	iniciox:863,
	inicioy:200,
	linea1x:800,
	linea1y:109,
	linea1x1:800,
	linea1y1:300,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= pico44.color;
ctx.moveTo(pico44.iniciox,pico44.inicioy);
ctx.lineTo(pico44.linea1x,pico44.linea1y);
ctx.lineTo(pico44.linea1x1,pico44.linea1y1);
ctx.fill();		
	}
}

pico44.visualizar();
//arbol 1

var arbol1 = {
	color: "brown",
	iniciox:100,
	inicioy:400,
	linea1x:100,
	linea1y:200,
	linea1x1:115,
	linea1y1:200,
	linea11x1:115,
	linea11y1:400,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= arbol1.color;
ctx.moveTo(arbol1.iniciox,arbol1.inicioy);
ctx.lineTo(arbol1.linea1x,arbol1.linea1y);
ctx.lineTo(arbol1.linea1x1,arbol1.linea1y1);
ctx.lineTo(arbol1.linea11x1,arbol1.linea11y1)
ctx.fill();		
	}
}

arbol1.visualizar();

//hojas
var hojas = {
	color : "limegreen",
	iniciox:60,
	inicioy:190,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = hojas.color;
ctx.arc(hojas.iniciox,hojas.inicioy,hojas.radiox,hojas.radioy,hojas.circunf);
ctx.fill();		
	}
}

hojas.visualizar();
//hoja1
var hoja1 = {
	color : "forestgreen",
	iniciox:140,
	inicioy:190,
	radiox:30,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = hoja1.color;
ctx.arc(hoja1.iniciox,hoja1.inicioy,hoja1.radiox,hoja1.radioy,hoja1.circunf);
ctx.fill();		
	}
}
hoja1.visualizar();
//hoja2
var hoja2 = {
	color : "green",
	iniciox:100,
	inicioy:200,
	radiox:50,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = hoja2.color;
ctx.arc(hoja2.iniciox,hoja2.inicioy,hoja2.radiox,hoja2.radioy,hoja2.circunf);
ctx.fill();

	}
}
hoja2.visualizar();
//hoja3
var hoja3 = {
	color : "darkgreen",
	iniciox:120,
	inicioy:240,
	radiox:25,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = hoja3.color;
ctx.arc(hoja3.iniciox,hoja3.inicioy,hoja3.radiox,hoja3.radioy,hoja3.circunf);
ctx.fill();
	}
}
hoja3.visualizar();
//arbol 2

var arbol2 = {
	color: "brown",
	iniciox:900,
	inicioy:400,
	linea1x:900,
	linea1y:200,
	linea1x1:916,
	linea1y1:200,
	linea11x1:916,
	linea11y1:400,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= arbol2.color;
ctx.moveTo(arbol2.iniciox,arbol2.inicioy);
ctx.lineTo(arbol2.linea1x,arbol2.linea1y);
ctx.lineTo(arbol2.linea1x1,arbol2.linea1y1);
ctx.lineTo(arbol2.linea11x1,arbol2.linea11y1)
ctx.fill();

	}
}

arbol2.visualizar();
//hojas
var hojas = {
	color: "darkgreen",
	iniciox:848,
	inicioy:300,
	linea1x:908,
	linea1y:210,
	linea1x1:968,
	linea1y1:300,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= hojas.color;
ctx.moveTo(hojas.iniciox,hojas.inicioy);
ctx.lineTo(hojas.linea1x,hojas.linea1y);
ctx.lineTo(hojas.linea1x1,hojas.linea1y1);
ctx.fill();

	}
}

hojas.visualizar();
//hoja1
var hoja1 = {
	color: "green",
	iniciox:848,
	inicioy:250,
	linea1x:908,
	linea1y:160,
	linea1x1:968,
	linea1y1:250,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= hoja1.color;
ctx.moveTo(hoja1.iniciox,hoja1.inicioy);
ctx.lineTo(hoja1.linea1x,hoja1.linea1y);
ctx.lineTo(hoja1.linea1x1,hoja1.linea1y1);
ctx.fill();

	}
}
hoja1.visualizar();

//hoja2
var hoja2 = {
	color: "limegreen",
	iniciox:848,
	inicioy:200,
	linea1x:908,
	linea1y:110,
	linea1x1:968,
	linea1y1:200,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle= hoja2.color;
ctx.moveTo(hoja2.iniciox,hoja2.inicioy);
ctx.lineTo(hoja2.linea1x,hoja2.linea1y);
ctx.lineTo(hoja2.linea1x1,hoja2.linea1y1);
ctx.fill();

	}
}

hoja2.visualizar();
//sol 
var sol = {
	color : "yellow",
	iniciox:35,
	inicioy:35,
	radiox:50,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = sol.color;
ctx.arc(sol.iniciox,sol.inicioy,sol.radiox,sol.radioy,sol.circunf);
ctx.fill();		
	}
}

sol.visualizar();
//bosque
var bosque = {
	color : "limegreen",
	iniciox:40,
	inicioy:500,
	radiox:225,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = bosque.color;
ctx.arc(bosque.iniciox,bosque.inicioy,bosque.radiox,bosque.radioy,bosque.circunf);
ctx.fill();		
	}
}
bosque.visualizar();

//bosque1
var bosque = {
	color : "green",
	iniciox:870,
	inicioy:540,
	radiox:220,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = bosque.color;
ctx.arc(bosque.iniciox,bosque.inicioy,bosque.radiox,bosque.radioy,bosque.circunf);
ctx.fill();

	}
}
bosque.visualizar();


//pbosque
var pbosque = {
	color : "darkgreen",
	iniciox:30,
	inicioy:500,
	radiox:30,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = pbosque.color;
ctx.arc(pbosque.iniciox,pbosque.inicioy,pbosque.radiox,pbosque.radioy,pbosque.circunf);
ctx.fill();

	}
}
pbosque.visualizar();

//pbosque
var pbosque = {
	color : "darkgreen",
	iniciox:90,
	inicioy:500,
	radiox:30,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = pbosque.color;
ctx.arc(pbosque.iniciox,pbosque.inicioy,pbosque.radiox,pbosque.radioy,pbosque.circunf);
ctx.fill();

	}
}
pbosque.visualizar();

//pbosque
var pbosque = {
	color : "darkgreen",
	iniciox:150,
	inicioy:500,
	radiox:30,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = pbosque.color;
ctx.arc(pbosque.iniciox,pbosque.inicioy,pbosque.radiox,pbosque.radioy,pbosque.circunf);
ctx.fill();

	}
}
pbosque.visualizar();

//pbosque
var pbosque = {
	color : "darkgreen",
	iniciox:210,
	inicioy:500,
	radiox:30,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = pbosque.color;
ctx.arc(pbosque.iniciox,pbosque.inicioy,pbosque.radiox,pbosque.radioy,pbosque.circunf);
ctx.fill();

	}
}
pbosque.visualizar();


//nuves
var nuves = {
	color : "cyan",
	iniciox:400,
	inicioy:50,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();
//nuves
var nuves = {
	color : "cyan",
	iniciox:430,
	inicioy:40,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();
//nuves
var nuves = {
	color : "cyan",
	iniciox:460,
	inicioy:40,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();

//nuves
var nuves = {
	color : "cyan",
	iniciox:490,
	inicioy:40,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();

//nuves
var nuves = {
	color : "cyan",
	iniciox:520,
	inicioy:50,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();


//nuves
var nuves = {
	color : "cyan",
	iniciox:490,
	inicioy:60,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();
//nuves
var nuves = {
	color : "cyan",
	iniciox:460,
	inicioy:60,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();

//nuves
var nuves = {
	color : "cyan",
	iniciox:430,
	inicioy:60,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();

//
//nuves2
var nuves = {
	color : "cyan",
	iniciox:200,
	inicioy:50,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();
//nuves
var nuves = {
	color : "cyan",
	iniciox:230,
	inicioy:40,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();
//nuves
var nuves = {
	color : "cyan",
	iniciox:260,
	inicioy:40,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();

//nuves
var nuves = {
	color : "cyan",
	iniciox:290,
	inicioy:40,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();

//nuves
var nuves = {
	color : "cyan",
	iniciox:320,
	inicioy:50,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();


//nuves
var nuves = {
	color : "cyan",
	iniciox:290,
	inicioy:60,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();
//nuves
var nuves = {
	color : "cyan",
	iniciox:260,
	inicioy:60,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();

//nuves
var nuves = {
	color : "cyan",
	iniciox:230,
	inicioy:60,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();


//nuves 3
var nuves = {
	color : "cyan",
	iniciox:600,
	inicioy:50,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();
//nuves
var nuves = {
	color : "cyan",
	iniciox:630,
	inicioy:40,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();
//nuves
var nuves = {
	color : "cyan",
	iniciox:660,
	inicioy:40,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();

//nuves
var nuves = {
	color : "cyan",
	iniciox:690,
	inicioy:40,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();

//nuves
var nuves = {
	color : "cyan",
	iniciox:720,
	inicioy:50,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();


//nuves
var nuves = {
	color : "cyan",
	iniciox:690,
	inicioy:60,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();
//nuves
var nuves = {
	color : "cyan",
	iniciox:660,
	inicioy:60,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();

//nuves
var nuves = {
	color : "cyan",
	iniciox:630,
	inicioy:60,
	radiox:20,
	radioy:0,
	circunf:2*Math.PI,
	visualizar:function(){
ctx.beginPath();
ctx.fillStyle = nuves.color;
ctx.arc(nuves.iniciox,nuves.inicioy,nuves.radiox,nuves.radioy,nuves.circunf);
ctx.fill();

	}
}
nuves.visualizar();



ctx.drawImage(sprite,ubicacionx,0,350,350,ubicacion1,400,100,100);
frame(tiempo);
}
	// declaramos la funcion para que se ejecute
tiempo();














