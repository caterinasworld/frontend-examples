let characters = [
  { id: 1, name: 'Luke Skywalker', birth_year: '19BBY', eye_color: 'blue' },
  { id: 2, name: 'C-3PO', birth_year: '112BBY', eye_color: 'yellow' },
  { id: 3, name: 'R2-D2', birth_year: '33BBY', eye_color: 'red' },
  { id: 4, name: 'Darth Vader', birth_year: '41.9BBY', eye_color: 'yellow' },
  { id: 5, name: 'Leia Organa', birth_year: '19BBY', eye_color: 'brown' },
  { id: 6, name: 'Owen Lars', birth_year: '52BBY', eye_color: 'blue' },
  { id: 7, name: 'Beru Lars', birth_year: '47BBY', eye_color: 'blue' },
  { id: 13, name: 'Chewbacca', birth_year: '20BBY', eye_color: 'blue' },
  { id: 14, name: 'Han Solo', birth_year: '29BBY', eye_color: 'brown' },
  { id: 15, name: 'Greedo', birth_year: '44BBY', eye_color: 'black' },
];

let filterItems = (arr) => {
  // write a function that will filter the characters with odd id numbers and return the names of those characters in uppercase and in alphabetical order
  let filtered = arr
    .filter((item) => item.id % 2 !== 0)
    .map((item) => item.name.toUpperCase())
    .sort();

  return filtered;
};

console.log(filterItems(characters));
// [
//   'BERU LARS',
//   'CHEWBACCA',
//   'GREEDO',
//   'LEIA ORGANA',
//   'LUKE SKYWALKER',
//   'R2-D2'
// ]
