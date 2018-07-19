// Use strict mode
'use strict';

// Cat objects
const cats = [{
		url: 'images/loki-cat.jpg',
		tn_url: 'images/loki-cat_tn.jpg',
		name: 'Loki',
		counter: 0
	},
	{
		url: 'images/oh-no-cat.jpg',
		tn_url: 'images/oh-no-cat_tn.jpg',
		name: 'James',
		counter: 0
	},
	{
		url: 'images/ridcully-cat.jpg',
		tn_url: 'images/ridcully-cat_tn.jpg',
		name: 'Ridcully',
		counter: 0
	},
	{
		url: 'images/rincewind-cat.jpg',
		tn_url: 'images/rincewind-cat_tn.jpg',
		name: 'Rincewind',
		counter: 0
	},
	{
		url: 'images/rowan-cat.jpg',
		tn_url: 'images/rowan-cat_tn.jpg',
		name: 'Rowan',
		counter: 0
	}
];

//Variables
let catCount = 0;
let currentCat = {},
	newCat, newImage;
const cat_list = document.getElementById('cat-list');
//const cat = document.getElementById('cat');
//const counter = document.getElementById('counter');

//Show the passed in cat object in the center of the page
function showCat(cat) {
	let main_image,
		main_desc;
	const main_area = document.getElementById('main-cat');
	main_image = document.createElement('img');
	while (main_area.firstChild) { // Empty the main area if full
		main_area.removeChild(main_area.firstChild)
	}
	main_image.setAttribute('src', `${cat.url}`);
	main_image.setAttribute('alt', `${cat.name}`);
	main_area.appendChild(main_image);

	main_desc = document.createElement('p');
	main_desc.textContent = `Name: ${cat.name} \t Times Clicked: ${cat.counter}`;
	main_area.appendChild(main_desc);

	main_image.addEventListener('click', function() {
		cat.counter += 1;
	});
}

// Loop to set up event listeners for each cat picture
for (let i = 0; i < cats.length; ++i) {
	currentCat = cats[i]; // Current cat object;
	newCat = document.createElement('li');
	newCat.textContent = `Name: ${currentCat.name}`;

	newImage = document.createElement('img');
	newImage.setAttribute('src', `${currentCat.tn_url}`);
	newCat.appendChild(newImage);

	newCat.addEventListener('click', (function(copyCat) {
		return function() {
			showCat(copyCat)
		};
	})(currentCat));
	cat_list.appendChild(newCat);
}

showCat(cats[1]);