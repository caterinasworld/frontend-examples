const destructureItems = (input) => {
  // destructure the name and parents of the character and format the output as shown

  return input;
};

const sansa = {
  first: 'Sansa',
  last: 'Stark',
  allegiance: {
    house: 'Winterfell',
    parents: {
      mother: 'Catelyn Tully',
      father: 'Eddard Stark',
    },
    animals: ['Lady'],
  },
};

const daenerys = {
  first: 'Daenerys',
  last: 'Targaryen',
  allegiance: {
    house: 'Targaryen',
    parents: {
      mother: 'Queen Rhaella',
      father: 'King Aerys II Targaryen',
    },
    animals: ['Drogon', 'Rhaegal', 'Viserion'],
  },
};

console.log(destructureItems(sansa));
// Sansa Stark of house Winterfell
//     parents: Catelyn Tully and Eddard Stark
//     allegiance(s): Lady

console.log(destructureItems(daenerys));
// Daenerys Targaryen of house Targaryen
//     parents: Queen Rhaella and King Aerys II Targaryen
//     allegiance(s): Drogon, Rhaegal, Viserion
