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
	},
	{
		url: 'images/albion-cat.jpg',
		tn_url: 'images/albion-cat_tn.jpg',
		name: 'Judge Albion',
		counter: 0
	},
	{
		url: 'images/emerald-cat.jpg',
		tn_url: 'images/emerald-cat_tn.jpg',
		name: 'Emerald',
		counter: 0
	},
	{
		url: 'images/frank-cat.jpg',
		tn_url: 'images/frank-cat_tn.jpg',
		name: 'Frank',
		counter: 0
	},
	{
		url: 'images/gandalf-cat.jpg',
		tn_url: 'images/gandalf-cat_tn.jpg',
		name: 'Gandalf',
		counter: 0
	},
	{
		url: 'images/q-cat.jpg',
		tn_url: 'images/q-cat_tn.jpg',
		name: 'Q',
		counter: 0
	},
	{
		url: 'images/meddling-kids.jpg',
		tn_url: 'images/meddling-kids_tn.jpg',
		name: 'Those Meddling Kids',
		counter: 0
	},
	{
		url: 'images/things-one-two.jpg',
		tn_url: 'images/things-one-two_tn.jpg',
		name: 'Thing One & Thing Two',
		counter: 0
	}
];

//Variables
let catCount = 0;
let newCat,
	newImage,
	random_cat;
const cat_list = document.getElementById('cat-list');

//Show the passed in cat object in the center of the page
function showCat(cat) {
	let main_image,
		main_name,
		main_counter;
	const main_area = document.getElementById('main-cat');

	// Show/update the click counter per cat
	function clickCounter() {
		main_counter.textContent = `Times Clicked: ${cat.counter}`;
	}

	// Empty the main area of any content
	while (main_area.firstChild) {
		main_area.removeChild(main_area.firstChild)
	}

	// Display the cat's Name
	main_name = document.createElement('p');
	main_name.textContent = `${cat.name}`;
	main_area.appendChild(main_name);

	// Display the cat's picture
	main_image = document.createElement('img');
	main_image.setAttribute('src', `${cat.url}`);
	main_image.setAttribute('alt', `${cat.name}`);
	main_area.appendChild(main_image);

	// Display the cat's counter
	main_counter = document.createElement('p');
	clickCounter();
	main_area.appendChild(main_counter);

	main_image.addEventListener('click', function() {
		cat.counter += 1;
		clickCounter();
	});
}

// Loop to set up event listeners for each cat picture
for (let i = 0; i < cats.length; ++i) {
	let currentCat;
	currentCat = cats[i]; // Current cat object;
	newCat = document.createElement('div');
	newCat.setAttribute('class', 'one_cat');
	newCat.innerHTML = `<b>${currentCat.name}</b><br>`;

	newImage = document.createElement('img');
	newImage.setAttribute('src', `${currentCat.tn_url}`);
	newImage.setAttribute('width', '100px');
	newImage.setAttribute('height', '100px');
	newCat.appendChild(newImage);

	newCat.addEventListener('click', function() {
		showCat(currentCat);
	});
	cat_list.appendChild(newCat);
}

// Pick a random cat to show at the beginning
random_cat = Math.floor(Math.random() * cats.length);
showCat(cats[random_cat]);