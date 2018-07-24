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
let clickCat, // Records the cat currently being clicked
	random_cat; // Used to randomly choose a cat at load Times

// Constant pointing to where the thumbnails are inserted into HTML
const cat_list = document.getElementById('cat-list');

// Constants for the main display area of the page
const main_area = document.getElementById('main_cat');
const main_image = document.getElementById('cat_pic');
const main_name = document.getElementById('cat_name');
const main_counter = document.getElementById('cat_counter');

// Constants for the admin button and panel
const cancel_button = document.getElementById('cancel');
const save_button = document.getElementById('save');
const admin_button = document.getElementById('admin');
const admin_panel = document.getElementById('admin_form');
const new_name = document.getElementById('name');
const cat_img = document.getElementById('img_src');
const cat_clicks = document.getElementById('clicks');

// Changes the number of clicks without rendering the entire page.
function clickCounter(countedCat) {
	main_counter.textContent = `Times Clicked: ${countedCat.counter}`;
}

//Show the passed in cat object in the center of the page
function showCat(cat) {
	// Display the cat's Name
	main_name.innerHTML = `<b>${cat.name}</b>`;

	// Display the cat's picture
	main_image.setAttribute('src', `${cat.url}`);
	main_image.setAttribute('alt', `${cat.name}`);

	// Display the cat's counter
	clickCounter(cat);
}

// Show the admin panel
function showAdmin(cat) {
	// Fill in the admin panel with data from the passed in cat object
	new_name.value = `${cat.name}`;
	cat_img.value = `${cat.url}`;
	cat_clicks.value = `${cat.counter}`;

	admin_button.classList.add('hidden'); // Hide the admin button
	admin_panel.classList.remove('hidden'); // Show the admin panel
}

function hideAdmin() {
	admin_panel.classList.add('hidden'); //Hide the admin panel
	admin_button.classList.remove('hidden'); // Show the Admin button
}

function saveData(cat) {
	// Update the object
	cat.name = new_name.value;
	cat.url = cat_img.value;
	cat.counter = Number(cat_clicks.value);
	// Render the page
	showCat(cat);
}

// Creates the list of cats to choose from
function createCatList() {
	let newCat,
		newImage;

	//Remove all children from HTML list first
	while (cat_list.firstChild) {
		cat_list.removeChild(cat_list.firstChild);
	};

	// Loop to set up event listeners for each cat thumbnail
	for (let i = 0; i < cats.length; ++i) {
		let currentCat;
		currentCat = cats[i]; // Current cat object;
		newCat = document.createElement('div');
		newCat.setAttribute('class', 'one_cat');
		newCat.innerHTML = `<b>${currentCat.name}</b><br>`;

		newImage = document.createElement('img');
		newImage.setAttribute('src', `${currentCat.tn_url}`);
		newImage.setAttribute('max-width', '100px');
		newImage.setAttribute('max-height', '100px');
		newCat.appendChild(newImage);

		newCat.addEventListener('click', function() {
			showCat(currentCat);
			clickCat = currentCat;
		});
		cat_list.appendChild(newCat);
	}
}

// The event listener for the main images
main_image.addEventListener('click', function() {
	clickCat.counter += 1;
	clickCounter(clickCat);
})

// The event listener for the cancel sbutton
cancel_button.addEventListener('click', function(event) {
	event.preventDefault();
	hideAdmin();
});

// The event listener for the save button
save_button.addEventListener('click', function(event) {
	event.preventDefault();
	saveData(clickCat);
	createCatList();
	hideAdmin();
});

// The event listener for the admin button
admin_button.addEventListener('click', function(event) {
	event.preventDefault();
	showAdmin(clickCat);
});

// Initial code for starting the app
createCatList();
random_cat = Math.floor(Math.random() * cats.length); // Generate random number
showCat(cats[random_cat]); // Pick a random cat to show at the beginning
clickCat = cats[random_cat];