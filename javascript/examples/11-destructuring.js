// JavaScript 11 - Destructuring

const character = {
  first: 'Daenerys',
  last: 'Targaryen',
  house: 'Targaryen',
  parents: {
    mother: 'Queen Rhaella',
    father: 'King Aerys II',
  },
};

// Destructuring the full name
const { first, last, house: allegiance } = character;

console.log(`${first} ${last} of house ${allegiance}.`);
// Daenerys Targaryen of house Targaryen.
