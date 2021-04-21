let characters = [
  { id: 77, name: 'Viserys', house: 'Targaryen' },
  { id: 16, name: 'Eddard', house: 'Stark' },
  { id: 41, name: 'Cersei', house: 'Lannister' },
  { id: 23, name: 'Jon', house: 'Stark' },
  { id: 4, name: 'Sansa', house: 'Stark' },
  { id: 40, name: 'Jaime', house: 'Lannister' },
  { id: 81, name: 'Rhaegar', house: 'Targaryen' },
  { id: 42, name: 'Tyrion', house: 'Lannister' },
  { id: 75, name: 'Daenerys', house: 'Targaryen' },
  { id: 1, name: 'Arya', house: 'Stark' },
  { id: 50, name: 'Tywin', house: 'Lannister' },
  { id: 17, name: 'Catelyn', house: 'Stark' },
  { id: 53, name: 'Kevan', house: 'Lannister' },
  { id: 20, name: 'Robb', house: 'Stark' },
  { id: 28, name: 'Rickon', house: 'Stark' },
];

let sortExample = () => {
  let sorted = characters.sort((a, b) => a.id - b.id);
  console.log(sorted);
};

sortExample();
