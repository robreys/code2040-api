/*
	Array of functions used to solve API challenge problems
	-Roberto Reyes
*/
var token = 'TwMOscg4M1';//token used for API requests
var functions = {
	//STAGE I: REVERSE A STRING
	reverse: function() {
		//retrieve string
		var stringURL = 'http://challenge.code2040.org/api/getstring';
		var string = null;
		$.ajax(stringURL, {
			type: 'POST',
			data: JSON.stringify({token: token}),
			async: false,
			success: function(data) {
				string = data.result;
			}
		});
		//reverse string
		var revString = string.split('').reverse().join('');
		//validate reversed string
		var validateURL = 'http://challenge.code2040.org/api/validatestring';
		$.ajax(validateURL, {
			type: 'POST',
			data: JSON.stringify({token: token, string: revString}),
			async: false
		});
		//return result
		return {
			result: 'Reversed string: ' + revString,
			info: 'Reversing string: ' + string
		};
	},
	//STAGE 2: FIND A NEEDLE IN A HAYSTACK
	haystack: function() {
		//retrieve dictionary
		var dictURL = 'http://challenge.code2040.org/api/haystack';
		var dict = null;
		$.ajax(dictURL, {
			type: 'POST',
			data: JSON.stringify({token: token}),
			async: false,
			success: function(data) {
				dict = data.result;
			}
		});
		//find index of needle in haystack
		var index = dict.haystack.indexOf(dict.needle);
		//validate index position
		var validateURL = 'http://challenge.code2040.org/api/validateneedle';
		$.ajax(validateURL, {
			type: 'POST',
			data: JSON.stringify({token: token, needle: index}),
			async: false
		});
		//return result
		return {
			result: 'Found needle "' + dict.needle + '" at index ' + index,
			info: 'Needle: '+ dict.needle + '<br>Haystack: ' + dict.haystack.join(', ')
		}
	},
	//STAGE 3: STRIP AN ARRAY OF WORDS WITH A SPECIFIED PREFIX
	prefix: function() {
		//retrieve dictionary
		var dictURL = 'http://challenge.code2040.org/api/prefix';
		var dict = null;
		$.ajax(dictURL, {
			type: 'POST',
			data: JSON.stringify({token: token}),
			async: false,
			success: function(data) {
				dict = data.result;
			}
		});
		//create new stripped array
		var array = [];
		//iterate through dictionary array
		$.each(dict.array, function(index, value) {
			//push value to temp array if it does not start with the prefix
			if (value.substr(0, dict.prefix.length) != dict.prefix)
				array.push(value);
		});
		//validate new array
		var validateURL = 'http://challenge.code2040.org/api/validateprefix';
		$.ajax(validateURL, {
			type: 'POST',
			data: JSON.stringify({token: token, array: array}),
			async: false
		});
		//return result
		return {
			result: 'New array without prefix: ' + array.join(),
			info: 'Prefix: ' + dict.prefix + '<br>Original array: ' + dict.array.join(', ')
		};
	},
	//STAGE 4: INCREMENT A DATE BY SPECIFIED SECONDS
	dating: function() {
		//retrieve date object
		var dateURL = 'http://challenge.code2040.org/api/time';
		var dateObj = null;
		$.ajax(dateURL, {
			type: 'POST',
			data: JSON.stringify({token: token}),
			async: false,
			success: function(data) {
				dateObj = data.result;
			}
		});
		//create new Date object using provided timestamp
		var date = new Date(dateObj.datestamp);
		//add the interval (in milliseconds) to datestamp
		date.setTime(date.getTime() + (dateObj.interval * 1000));
		//convert Date object to ISO formatted string and validate
		var datestamp = date.toISOString();
		var validateURL = 'http://challenge.code2040.org/api/validatetime';
		$.ajax(validateURL, {
			type: 'POST',
			data: JSON.stringify({token: token, datestamp: datestamp}),
			async: false
		});
		//return result
		return {
			result: 'New datestamp: ' + datestamp,
			info: 'Original datestamp: ' + dateObj.datestamp + '<br>Interval: ' + dateObj.interval
		};			
	},
	status: function() {
		//request status
		var result = null;
		var statusURL = 'http://challenge.code2040.org/api/status';
		$.ajax(statusURL, {
			type: 'POST',
			data: JSON.stringify({token: token}),
			async: false,
			success: function(data) {
				result = data.result;
			}
		});
		//return list of statuses
		return {
			result: (function(result) {
				var string = 'Your status: <ul>';
				for (var property in result) {
				    if (result.hasOwnProperty(property)) {
				        string += '<li>' + property + ' : ' + result[property] + '</li>'
				    }
				}
				return string += '</ul>';
			})(result),
			info: 'Requested status information'
		};							
	}
};
//End of functions.js