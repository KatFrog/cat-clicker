// Use strict mode
'use strict';

//Variables
let catCount1 = 0;
let catCount2 = 0;
const cat1 = document.getElementById('cat1');
const cat2 = document.getElementById('cat2');
const counter1 = document.getElementById('counter1');
const counter2 = document.getElementById('counter2');

cat1.addEventListener('click', function(event) {
	catCount1 += 1;
	counter1.innerText = `${catCount1}`;
});

cat2.addEventListener('click', function(event) {
	catCount2 += 1;
	counter2.innerText = `${catCount2}`;
});