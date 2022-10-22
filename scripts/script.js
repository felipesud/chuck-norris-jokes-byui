;



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





   // COPY TO CLIPBOARD
// const btnCopyToClipboard = document.querySelector('#copyToClipboard');
//    function copyToClipboard() {
    
//     let copyText = document.querySelector("#output");
  
//     // Select the text field
//     copyText.select();
//     copyText.setSelectionRange(0, 99999); // For mobile devices
  
//     // Copy the text inside the text field
//     navigator.clipboard.writeText(copyText.value);
    
   
// }


let text = document.getElementById('output').innerHTML;
  const copyContent = async () => {
    try {
      await navigator.clipboard.writeText(text);
      console.log('Content copied to clipboard');
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  }
