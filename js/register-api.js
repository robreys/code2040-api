/*
	Appends a registration button to the HTML DOM.
	Button is bound with a function to register to the
	CODE 2040 Challenge API.
	-Roberto Reyes
*/
$(document).ready(function() {
	$('div.other').append('<button id="register">Register</button>');
	$('#register').bind('click', function() {
		var url = 'http://challenge.code2040.org/api/register';
		var obj = JSON.stringify({
			email: 'robreys123@gmail.com',
			github: 'https://github.com/robreys/code2040-api.git'
		});
		$.post(url, obj, function(data) {
			console.log(data);
		});
	});
});
//End of register-api.js