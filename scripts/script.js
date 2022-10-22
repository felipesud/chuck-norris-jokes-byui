// GET JOKES

const btnNext = document.querySelector('#btnNext');
const sortedJoke = document.querySelector('#output');

function getJokes() {
  fetch('https://api.chucknorris.io/jokes/random')
    .then(r => r.json())
    .then(joke => {
      sortedJoke.innerText = joke.value;
    })
}

btnNext.addEventListener('click', getJokes);


// Showing Current Year
const date = new Date();
const year = date.getFullYear();


document.getElementById("current-date").innerHTML = year;

// Last Modified
const oLastModified = new Date(document.lastModified)
document.getElementById("last-modified").innerHTML = oLastModified;