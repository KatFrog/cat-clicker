// Use strict mode
'use strict';

//Variables
let catCount = 0;
const cat = document.getElementById('cat');
const counter = document.getElementById('counter');

cat.addEventListener('click', function(event) {
	catCount += 1;
	counter.innerText = `${catCount}`;
});