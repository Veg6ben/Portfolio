function iniciarMap(){
		var coord = {lat:6.2476 ,lng: -75.5658};
		var map = new google.maps.Map(document.getElementById('map'),{
		  zoom: 10,
		  center: coord
		});
		// Usar Marker tradicional para evitar errores de carga
		const marker = new google.maps.Marker({
			position: coord,
			map: map
		});
	}
