const url = 'https://anapioficeandfire.com/api/books/';

let app = document.querySelector('#books');
let loading = document.querySelector('#loading');

let addToDOM = (element, item) => {
  let li = document.createElement(element);
  li.innerText = `${item.name} - by ${item.authors[0]} 
    ${item.released.substr(0, 4)} - ${item.numberOfPages} pages`;
  li.setAttribute('style', 'font-size: 1.2em;');
  li.setAttribute('class', 'list-item');
  app.append(li);
};

let fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        addToDOM('li', item);
      });
    })
    .catch((error) => {
      console.log(error);
      app.append();
    })
    .finally(() => {
      app.removeChild(loading);
    });
};

fetchData(url);
