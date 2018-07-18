// Use strict mode
'use strict';

//Variables
let catCount = 0;
let cat = document.getElementById('cat');
let counter = document.getElementById('counter');

cat.addEventListener('click', function(event) {
	catCount += 1;
	counter.innerText = `${catCount}`;
});