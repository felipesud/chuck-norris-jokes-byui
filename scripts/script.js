// GET JOKES

const btnNext = document.querySelector('#btnNext');
const sortedJoke = document.querySelector('#output');

// function getJokes() {
//   fetch('https://api.chucknorris.io/jokes/random')
//     .then(r => r.json())
//     .then(joke => {
//       sortedJoke.innerText = joke.value;
//     })
// }



async function getJokes() {
  const responseData = await fetch('https://api.chucknorris.io/jokes/random');
   const JSONData = await responseData.json();
    
      sortedJoke.innerText = JSONData.value;
   
};

btnNext.addEventListener('click', getJokes);


// Showing Current Year
const date = new Date();
const year = date.getFullYear();

function showCurrentYear() {
  document.getElementById("current-date").innerHTML = year;
}
// Last Modified
function lastModified() {
  const oLastModified = new Date(document.lastModified)
  document.getElementById("last-modified").innerHTML = oLastModified;
}

showCurrentYear();
lastModified();

let today = date.getDay();
let message1;
let message2;

function getWeekDay(today) {
  switch (today) {
    case 0:
      message2 = "Sunday";
      break;
    case 1:
      message2 = "Monday";
      break;
    case 2:
      message2 = "Tuesday";
      break;
    case 3:
      message2 = "Wednesday";
      break;
    case 4:
      message2 = "Thursday";
      break;
    case 5:
      message2 = "Friday";
      break;
    case 6:
      message2 = "Saturday";
      break;
    default:
      message2 = "Unknown - " + today;
      break;
  }
}

function getTodayMessage(day) {
  if (day >= 1 && day <= 5) {
    message1 = `Today is ${message2}. Have a good week!`;
    console.log(message1)
    document.getElementById('message').innerHTML = message1
  } else {
    message1 = `Today is ${message2}! Chuck Norris approve this weekend, enjoy it!`
    console.log(message1)
    document.getElementById('message').innerHTML = message1
  }
}

getWeekDay(today);
getTodayMessage(today);