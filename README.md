CODE 2040 API Challenge Submission
============
This is a repository created for the CODE 2040 API Challenge.
The functions within js/functions.js are my (Roberto Reyes)
solutions to each of the stages of the challenge, each stage
labelled as a comment above its corresponding function. I utilized
the JavaScript library 'jQuery', primarily to facilitate the api
endpoint requests, but also to take advantage of certain functions
described below. Included is a simple browser interface. The file,
index.html, which can be opened in a browser, displays buttons that
can be used to trigger the functions in js/functions.js. The leftmost
box will display the problem received when a function
is triggered, while the rightmost box will display the solution to
the problem once it has been solved by the function.
![alt tag](https://raw.github.com/robreys/code2040-api/master/browser.png)

#Solutions Overview:

##Stage I: Reverse a string
For this problem, I took a string and converted it to an array
using the JavaScript 'split' function. Next, I took the array
and used the JavaScript 'reverse' function to reverse the string
array. Finally, I converted the string array back into a string
using the 'join' function and returned this string.

##Stage 2: Find the needle in a haystack
For this problem, I took advantage of the JavaScript array
'indexOf' function. I called this function on the 'haystack'
array and I simply passed the 'needle' as the parameter for
the function. I then returned the result.

##Stage 3: Prefix
For this problem, I utilized the jQuery 'each' function in order
to iterate through the contents of the dictionary array. For each
value in the array, I made use of the JavaScript 'substr' method 
to compare the first characters of this string to the 'prefix'.
If a match was not found, this value would then be pushed to a second
temporary array. Once I finished iterating through the array and
pushed valid values to the temporary array, I returned the
temporary array as my solution.

##Stage 4: The Dating Game
For this problem, I took advantage of the JavaScript 'Date' object.
First, I created a new Date object using the specified datestamp.
Next, I use the Date object's functions, 'getTime' and 'setTime' in
order to retrieve the datestamp's time (in milliseconds), and increment
it by the interval (in milliseconds). I then converted this Date object
back into an ISO string using the 'toISOString' function and returned
this string. Initially, I was using the Date functions 'setSeconds'
and 'getSeconds', but I found my answers weren't always correct because
of a lack of precision with these functions. 
