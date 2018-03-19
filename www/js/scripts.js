function conectividad(){
	alert("Usuario, en este momento usted esta conectado via: " + navigator.network.connection.type);
	navigator.vibrate(1000);
}

function info(){
	//Bateria
	window.addEventListener("batterystatus", onBatteryStatus, false);

	function onBatteryStatus(info) {
	    document.getElementById("bateria").innerHTML = 'Estado de la bateria: ' + info.level;
	}

	
	document.getElementById("conexion").innerHTML ='Tipo de conexion: ' + navigator.network.connection.type;
	//Informacion del telefono
	document.getElementById("modelo").innerHTML ='Modelo del telefono: ' + device.model;
	document.getElementById("sistema").innerHTML ='Plataforma: ' + device.platform;
	document.getElementById("fabricante").innerHTML ='Fabricante: ' + device.manufacturer;


	
}