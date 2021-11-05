const houses = ['Barantheon', 'Lannister', 'Stark', 'Targaryen'];

// Vanilla JavaScript

houses.forEach((item) => {
  let div = document.createElement('div');
  div.textContent = item;
  document.getElementById('appJs').append(div);
});

// React.createElement
let div = React.createElement(
  'div',
  { className: 'house' },
  React.createElement('h2', {}, 'React - createElement()'),
  React.createElement('div', {}, 'Barantheon'),
  React.createElement('div', {}, 'Lannister'),
  React.createElement('div', {}, 'Stark'),
  React.createElement('div', {}, 'Targaryen')
);

ReactDOM.render(div, document.getElementById('appReact'));

// JSX
let block = (
  <>
    <h2>React - JSX</h2>
    <div className='houses'>
      <div>Barantheon</div>
      <div>Lannister</div>
      <div>Stark</div>
      <div>Targaryen</div>
    </div>
  </>
);

ReactDOM.render(block, document.getElementById('appJSX'));

// JSX - 2
let block2 = (
  <>
    <h2>React - JSX</h2>
    <div className='houses'>
      {houses.map((house) => (
        <div>{house}</div>
      ))}
    </div>
  </>
);

ReactDOM.render(block2, document.getElementById('appJSX2'));
