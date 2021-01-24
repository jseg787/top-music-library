const body = document.querySelector('body');

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

myLibrary.forEach((album) => {
	const card = document.createElement('div');
	const title = document.createElement('p');
	title.innerText = album.title;
	const artist = document.createElement('p');
	artist.innerText = album.artist;
	const year = document.createElement('p');
	year.innerText = album.year;
	card.appendChild(title);
	card.appendChild(artist);
	card.appendChild(year);
	body.appendChild(card);
});
