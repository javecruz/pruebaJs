//hacer que las ventanas se posicionen en sitios diferentes en la apertura

//implementar que por cada funcion alertas que cada 5 segundos por cada función que haya en el array alertas se llame a la función según su definicion

//hacer que el boton inicie. Ahora incia solo.

//hacer el boton de parada funcione. Debe parar la actualización de los valores y tambien las alertas.

var valores=[];
var tiempo=2000;
var tiempo_act=5000;
var windowObjectReference=[];
valores[valores.length]={valor:"Abengoa",diferencial:getDif(),signo:getSigno(),indice:"IBEX 35"};
valores[valores.length]={valor:"Facebook",diferencial:getDif(),signo:getSigno(),indice:"Nasdaq 100"};

var alertas=[];
alertas[0]=function(valores){
	valores[getIndiceValor("Abengoa")]={valor:"Abengoa",diferencial:getDif(),signo:getSigno(),indice:"IBEX 35"};
	valores[getIndiceValor("Iberdrola")]={valor:"Iberdrola",diferencial:getDif(),signo:getSigno(),indice:"IBEX 35"};
}
alertas[1]=function(valores){
	valores[getIndiceValor("Santender")]={valor:"Santander",diferencial:getDif(),signo:getSigno(),indice:"IBEX 35"};
	valores[getIndiceValor("Sabadell")]={valor:"Sabadell",diferencial:getDif(),signo:getSigno(),indice:"IBEX 35"};
}

function getDif(){
	return Math.round(Math.random()*1000,3)/100;
}
function getSigno(){
	return Math.random()<0.5?"+":"-";
}
var btnStart=document.getElementById('btnStart');
var btnStop=document.getElementById('btnStop');
btnStart.onclick=function(){
	/** TO DO**/
}
btnStop.onclick=function(){
	/** TO DO**/
	
}
	var strWindowFeatures = "menubar=yes,location=yes,resizable=yes,scrollbars=yes,width=500,height=200";

		function openRequestedPopup(n,elem) {
		  var  w = window.open("", "valoresPositivos"+n, strWindowFeatures);
		   //w[1] = window.open("blank.html", "valoresNegativos", strWindowFeatures);
		    var ndoc=w.document;
			    ndoc.open(); 
			    var miDiv = ndoc.createElement("div");
			    var miP = ndoc.createElement("P");
			    var texto = ndoc.createTextNode("Valor: "+elem.valor+ " Indice: "+elem.indice);
			    miP.appendChild(texto);
			    miH1 = ndoc.createElement("h1");
			    titulo = ndoc.createTextNode("diferencial: "+elem.signo+elem.diferencial);
			    miH1.appendChild(titulo);
			    miDiv.appendChild(miH1);
			    miDiv.appendChild(miP);
			    ndoc.appendChild(miDiv);
		   return w;
		}
		
/* TO DO */
//llamar cada 5 seguncos a las alertas
var cont=0;
var intervalValores=setInterval(function(){
	valores.forEach(function(elem,index){
		 display(elem,getIndiceValor(elem.valor));
		function display(elem,indiceVentana){
			 if(windowObjectReference[indiceVentana]!=undefined) {
			 	windowObjectReference[indiceVentana].close();
			 	windowObjectReference[indiceVentana]=undefined;
			 	// bodyHTML=windowObjectReference[indiceVentana].document.body.innerHTML;
			  //    var texto = "<p>Este es el parrafo"+indiceVentana+"</p>";
			  //    bodyHTML+=texto;
			  
			 }
			 cont++;
			 windowObjectReference[indiceVentana]=openRequestedPopup(cont,elem);
		}
	})
	
},tiempo_act);

function getIndiceValor(valor){
	for(var i=0;i<valores.length;i++) if(valor==valores[i].valor) break;
	return i;
}