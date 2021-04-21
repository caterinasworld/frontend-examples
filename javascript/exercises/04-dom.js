// whenever the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM

let userInput = document.querySelector('#input');
let copy = document.querySelector('#copy');

// add an event listener on the target element

copy.addEventListener('click', handleClick);

// add a callback function to handle event

function handleClick(event) {
  console.log(userInput.value);
  console.log(copy.value);

  let element = document.createElement('div');

  element.textContent = userInput.value;

  document.querySelector('main').append(element);
}
