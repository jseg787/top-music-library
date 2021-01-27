const library = document.querySelector('.library');

let myLibrary = [];

function Album(title, artist, year) {
	this.title = title;
	this.artist = artist;
	this.year = year;
}

function addAlbumToLibrary(title, artist, year) {
	myLibrary.push(new Album(title, artist, year));
}

addAlbumToLibrary('Chon', 'Chon', 2019);
addAlbumToLibrary('Homey', 'Chon', 2017);
addAlbumToLibrary('Grow', 'Chon', 2015);
addAlbumToLibrary('Newborn Sun', 'Chon', 2013);
addAlbumToLibrary('Chon', 'Chon', 2019);
addAlbumToLibrary('Homey', 'Chon', 2017);
addAlbumToLibrary('Grow', 'Chon', 2015);
addAlbumToLibrary('Newborn Sun', 'Chon', 2013);
addAlbumToLibrary('Chon', 'Chon', 2019);
addAlbumToLibrary('Homey', 'Chon', 2017);
addAlbumToLibrary('Grow', 'Chon', 2015);
addAlbumToLibrary('Newborn Sun', 'Chon', 2013);
addAlbumToLibrary('Chon', 'Chon', 2019);
addAlbumToLibrary('Homey', 'Chon', 2017);
addAlbumToLibrary('Grow', 'Chon', 2015);
addAlbumToLibrary('Newborn Sun', 'Chon', 2013);
addAlbumToLibrary('Chon', 'Chon', 2019);
addAlbumToLibrary('Homey', 'Chon', 2017);
addAlbumToLibrary('Grow', 'Chon', 2015);
addAlbumToLibrary('Newborn Sun', 'Chon', 2013);
addAlbumToLibrary('Chon', 'Chon', 2019);
addAlbumToLibrary('Homey', 'Chon', 2017);
addAlbumToLibrary('Grow', 'Chon', 2015);
addAlbumToLibrary('Newborn Sun', 'Chon', 2013);
addAlbumToLibrary('Chon', 'Chon', 2019);
addAlbumToLibrary('Homey', 'Chon', 2017);
addAlbumToLibrary('Grow', 'Chon', 2015);
addAlbumToLibrary('Newborn Sun', 'Chon', 2013);
addAlbumToLibrary('Chon', 'Chon', 2019);
addAlbumToLibrary('Homey', 'Chon', 2017);
addAlbumToLibrary('Grow', 'Chon', 2015);
addAlbumToLibrary('Newborn Sun', 'Chon', 2013);
addAlbumToLibrary('Chon', 'Chon', 2019);
addAlbumToLibrary('Homey', 'Chon', 2017);
addAlbumToLibrary('Grow', 'Chon', 2015);
addAlbumToLibrary('Newborn Sun', 'Chon', 2013);
addAlbumToLibrary('Chon', 'Chon', 2019);
addAlbumToLibrary('Homey', 'Chon', 2017);
addAlbumToLibrary('Grow', 'Chon', 2015);
addAlbumToLibrary('Newborn Sun', 'Chon', 2013);
addAlbumToLibrary('Chon', 'Chon', 2019);
addAlbumToLibrary('Homey', 'Chon', 2017);
addAlbumToLibrary('Grow', 'Chon', 2015);
addAlbumToLibrary('Newborn Sun', 'Chon', 2013);
addAlbumToLibrary('Chon', 'Chon', 2019);
addAlbumToLibrary('Homey', 'Chon', 2017);
addAlbumToLibrary('Grow', 'Chon', 2015);
addAlbumToLibrary('Newborn Sun', 'Chon', 2013);

myLibrary.forEach((album) => {
	const card = document.createElement('div');
	const title = document.createElement('p');
	const artist = document.createElement('p');
	const year = document.createElement('p');
	const image = document.createElement('img');
	const imageContainer = document.createElement('div');

	card.classList.add('album');
	imageContainer.classList.add('artwork');

	title.innerText = album.title;
	artist.innerText = album.artist;
	image.src = './temp.jpg';
	year.innerText = album.year;

	imageContainer.appendChild(image);
	card.appendChild(imageContainer);
	card.appendChild(title);
	card.appendChild(artist);
	card.appendChild(year);
	library.appendChild(card);
});
