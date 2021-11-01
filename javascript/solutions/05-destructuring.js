const destructureItems = (input) => {
  // destructure the name and parents of the character and format the output as shown

  const { first, last } = input;
  const { house } = input.allegiance;
  const { mother, father } = input.allegiance.parents;
  const [...animals] = input.allegiance.animals;

  const result = `${first} ${last} of House ${house}
    parents: ${mother} and ${father}
    allegiance(s): ${animals.join(', ')}`;

  return result;
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
// Sansa Stark of House Winterfell
//     parents: Catelyn Tully and Eddard Stark
//     allegiance(s): Lady

console.log(destructureItems(daenerys));
// Daenerys Targaryen of House Targaryen
//     parents: Queen Rhaella and King Aerys II Targaryen
//     allegiance(s): Drogon, Rhaegal, Viserion
