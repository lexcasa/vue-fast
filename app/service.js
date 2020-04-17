let Servicio  = {
	view: function (url, callback){
		let xhttp = new XMLHttpRequest();
		let view  = ``;
		xhttp.onreadystatechange = function () {
			if (xhttp.readyState == 4) {
				view = xhttp.responseText;
				callback(view);
			}
		}

		// OBTENER LOS DATOS POR GET
		xhttp.open('GET', url);
		xhttp.send();
	}
}