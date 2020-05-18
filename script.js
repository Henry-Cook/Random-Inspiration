//This is a suuper basic front end website that generates an inspirational quote and picture, super dumb but I needed to build something.

//Grabbing HTML element
const quote = document.getElementById('quotes');
const image = document.getElementById('imageDiv');
//Fetching from the inspirational quote api - Needed to add a CORS proxy becuase or CORS error
const proxyurl = 'https://cors-anywhere.herokuapp.com/';
const url = 'https://www.affirmations.dev/';

let loader = `<div class='loader'></div>`;
quote.innerHTML = loader;
fetch(proxyurl + url)
  .then(function (response) {
    let data = response.json();
    return data;
  })
  //Then use innerHTML to display
  .then(function (data) {
    quote.innerHTML = data.affirmation;
    console.log(data.affirmation);
  });
