let destructureItems = (input) => {
  // destructure the name and house(s) of the character and format the output as shown

  let { first, last } = input;
  let { mother, father } = input.allegiance.parents;

  let result = `${first} ${last}
    child of
    ${mother} and ${father}`;

  return result;
};

const character = {
  first: 'Sansa',
  last: 'Stark',
  allegiance: {
    house: 'Winterfell',
    parents: {
      mother: 'Catelyn Tully',
      father: 'Eddard Stark',
    },
    animals: {
      direwolf: 'Lady',
    },
  },
};

console.log(destructureItems(character));
// Sansa Stark
//   daughter of
//   Catelyn Tully and Eddard Stark
