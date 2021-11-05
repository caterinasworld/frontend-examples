function House(props) {
  return (
    <React.Fragment>
      <div>House {props.name}</div>
      <div>Motto: {props.motto}</div>
    </React.Fragment>
  );
}

ReactDOM.render(
  <House name='Stark' motto='Winter is Coming' />,
  document.getElementById('app')
);
