console.log('EmailJS loaded:', typeof window !== 'undefined' ? typeof window.emailjs : 'no-window');
if (typeof window !== 'undefined' && typeof window.emailjs !== 'undefined') {
    try {
        window.emailjs.init({ publicKey: 's8Ye45OEGoHmlmyji' });
    } catch (e) {
        console.error('Error inicializando EmailJS:', e);
    }
} else {
    console.error('EmailJS SDK no cargado');
}

function iniciarMap(){
		var coord = {lat:6.2476 ,lng: -75.5658};
		var map = new google.maps.Map(document.getElementById('map'),{
		  zoom: 10,
		  center: coord
		});
		// Usar Marker tradicional para evitar errores de carga
	
	}

const form = document.getElementById('contact-form');

form.addEventListener('submit', function (event) {
	console.log('Submit event triggered');
	event.preventDefault();

	if (typeof window.emailjs === 'undefined') {
		alert('EmailJS no está disponible. Verifica que el CDN cargue correctamente.');
		return;
	}

	window.emailjs.sendForm('service_22v10fr', 'template_b26qbuo', this)
		.then(function () {
			alert('Mensaje enviado correctamente!');
			form.reset();
		}, function (error) {
			alert('Error al enviar el mensaje: ' + JSON.stringify(error));
		});
});
