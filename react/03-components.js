// create a class component and use component lifecycle methods
class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate() {
    console.log('component did update');
  }

  render() {
    return (
      <div>
        <h2>Class Component</h2>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    );
  }
}

// create a function component and use hooks
function FunctionComponent() {
  const [count, setCount] = React.useState(0);
  const [query, setQuery] = React.useState('hello world');

  React.useEffect(() => {
    console.log('running useEffect');
  }, [count]);

  return (
    <div>
      <h2>Functional Component</h2>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

ReactDOM.render(<ClassComponent />, document.getElementById('appClass'));
ReactDOM.render(<FunctionComponent />, document.getElementById('appFunction'));
