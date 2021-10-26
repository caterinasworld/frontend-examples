// Appending elements to the DOM
let main = document.querySelector('main');

let heading1 = document.createElement('h1');
heading1.textContent = 'DOM Manipulations';
main.append(heading1);

let divElement = document.createElement('div');
divElement.textContent = 'A new <div> element was added to DOM';
main.append(divElement);

// Create and Add a new <br> element
main.append(document.createElement('br'));

let button = document.createElement('button');
button.setAttribute('id', 'example');
button.setAttribute('class', 'btn');
button.textContent = 'Click Me!';
button.style.border = 0;
button.style.padding = '5px 10px';
button.style.borderRadius = '5px';
main.append(button);

// Adding an event listener to the previously created button
button.addEventListener('click', handleClick);

function handleClick(event) {
  console.log('This is the click event!');
  console.log(event);
}

// Adding an event listener to the previously created button - with event handler
document.getElementById('example').onclick = function (event) {
  console.log(event);
  alert('The button has been pressed!');
};
