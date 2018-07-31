//MONTAÑA 1
var montaña1 = {
	colorfondo: 'rgba(100,0,255,'+alfa+')',
	iniciox:0,
	inicioy:400,
	linea1x:200,
	linea1y:100,
	linea1x1:400,
	linea1y1:400,
	primerfuncion: function(){
		ctx.beginPath();
		ctx.fillStyle = montaña1.colorfondo;
		ctx.moveTo(montaña1.iniciox,montaña1.inicioy);
		ctx.lineTo(montaña1.linea1x,montaña1.linea1y);
		ctx.lineTo(montaña1.linea1x1,montaña1.linea1y1);
		ctx.fill();
	}
  }


