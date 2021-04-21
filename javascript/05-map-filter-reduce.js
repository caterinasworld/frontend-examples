let characters = [
  { id: 1, name: 'Arya', house: 'Stark' },
  { id: 4, name: 'Sansa', house: 'Stark' },
  { id: 16, name: 'Eddard', house: 'Stark' },
  { id: 17, name: 'Catelyn', house: 'Stark' },
  { id: 20, name: 'Robb', house: 'Stark' },
  { id: 23, name: 'Jon', house: 'Stark' },
  { id: 28, name: 'Rickon', house: 'Stark' },
  { id: 40, name: 'Jaime', house: 'Lannister' },
  { id: 41, name: 'Cersei', house: 'Lannister' },
  { id: 42, name: 'Tyrion', house: 'Lannister' },
  { id: 50, name: 'Tywin', house: 'Lannister' },
  { id: 53, name: 'Kevan', house: 'Lannister' },
  { id: 75, name: 'Daenerys', house: 'Targaryen' },
  { id: 77, name: 'Viserys', house: 'Targaryen' },
  { id: 81, name: 'Rhaegar', house: 'Targaryen' },
];

let printGroup = (description, result) => {
  console.group(description);
  console.log(result);
  console.groupEnd();
};

let arrayFunctionsExample = () => {
  printGroup('Initial Array', characters);

  // Example: return an array with each name in uppercase
  // Format: "ARYA"
  const uppercase = characters.map((item) => item.name.toUpperCase());
  printGroup('Array of characters from house Stark', uppercase);

  // Example: return an array with the name and house of each character
  // Format: "Arya, of House Stark"
  const intros = characters.map(
    (item) => `${item.name}, of House ${item.house}`
  );
  printGroup('Array of character intros, with name and house', intros);

  // Example: return an array with the characters from House Stark
  const starks = characters.filter((item) => item.house === 'Stark');
  printGroup('Array of characters from house Stark', starks);

  // Example: return an array with the characters with even ids
  const evens = characters.filter((item) => item.id % 2 === 0);
  printGroup('Array of characters with even ids', evens);

  // Example: return the sum of all of the character ids.
  const sum = characters.reduce((acc, curr) => acc + curr.id, 0);
  printGroup('Sum of all of the character ids', sum);

  // Example: return the number of characters from each house
  const houses = characters.reduce((total, item) => {
    total.hasOwnProperty(item.house)
      ? total[item.house]++
      : (total[item.house] = 1);

    return total;
  }, {});
  printGroup('Number of characters from each house', houses);
};

arrayFunctionsExample();
