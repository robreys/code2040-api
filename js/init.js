/*
	Appends buttons bound with function calls to HTML DOM
	-Roberto Reyes
*/
$(document).ready(function() {
	$('div.input button').bind('click', function() {
		var funcName = $(this).attr('data-func')
		var funcRes = functions[funcName]();
		$('div.output div.problem ol').append('<li>' + funcName + '<p>' + funcRes.info + '</p></li>');
		$('div.output div.solution ol').append('<li>' + funcName + '<p>' + funcRes.result + '</p></li>');
	});
});
//End of init.js