// An API of Fire and Ice
// Endpoints for all books and book 1
const urlOne = 'https://anapioficeandfire.com/api/books/1/';
const urlAll = 'https://anapioficeandfire.com/api/books/';

// Dog Facts API - CORS issue
const urlDogs =
  'https://dog-facts-api.herokuapp.com/api/v1/resources/dogs/all/facts/';

let fetchOneExample = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // object
      console.log(data.name);
      console.log(data.authors[0]);
      console.log(data.numberOfPages);
    })
    .catch((error) => console.log(error));
};

let fetchAllExample = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // array of 10 objects
      data.forEach((item) => {
        // console.log(item.name);
        console.log(
          `${item.name} - ${item.authors[0]} - ${item.numberOfPages} pages`
        );
      });
    })
    .catch((error) => console.log(error));
};

let fetchDogFacts = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

fetchDogFacts(urlOne);

fetchAllExample(urlAll);

fetchDogFacts(urlDogs);
