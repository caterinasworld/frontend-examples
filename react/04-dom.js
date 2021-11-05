function getTimeJS() {
  const time = new Date().toLocaleTimeString();
  const element = `<h1>React 04 - DOM</h1>
    <h2>Vanilla JavaScript</h2>
    <p>Current time: ${time}</p>`;
  document.getElementById('appDOM').innerHTML = element;
}

function getTimeReact() {
  const current = new Date().toLocaleTimeString();
  const element = (
    <div className='time-block'>
      <h2>React</h2>
      <p>Current time: {current}</p>
    </div>
  );
  ReactDOM.render(element, document.getElementById('appVirtualDOM'));
}

setInterval(getTimeJS, 1000);
setInterval(getTimeReact, 1000);
