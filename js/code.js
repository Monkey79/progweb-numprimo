window.addEventListener("load", onLoadComplHndl);


function onLoadComplHndl(){
	console.log("======WINDOWS.LOAD=========");

	console.log("============SIN RANGO===================");
	console.log("2 es Primo? ", esPrimo(2));
	console.log("5 es Primo? ", esPrimo(5));
	console.log("4 es Primo? ", esPrimo(4));
	console.log("14 es Primo? ", esPrimo(14));
	console.log("7 es Primo? ", esPrimo(7));

	console.log("============CON RANGO===================");
	esPrimoRango(2,7);
}

/*******Trabajo solamente con los numero naturales (positivos)*********/
function esPrimo(valorNum){
	var rest;
	var count = 2;
	var esNumPrimo = true;

	while (esNumPrimo && (count < valorNum) ) {
		rest = valorNum % count;

		if( rest === 0 ) 
			esNumPrimo = false;

		count++;
	}

	return esNumPrimo;
}

function esPrimoRango(desdeNum, hastaNum){
	var i = desdeNum;
	var j = hastaNum;
	for (i; i<=j; i++){
		console.log("el numero ", i," es primo ? ",esPrimo(i));
	}
}