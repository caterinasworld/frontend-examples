import React from 'react';
import './App.css';
import Starship from './Starship';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      starships: [],
      isLoaded: false,
    };
  }

  fetchData(url) {
    fetch(url)
      .then((res) => res.json())
      .then((data) => data.results)
      .then((data) => {
        this.setState({
          starships: data,
          isLoaded: true,
        });
      })
      .catch((error) => console.log(error));
  }

  componentDidMount() {
    const url = 'https://swapi.dev/api/starships/';
    this.fetchData(url);
  }

  render() {
    const { starships, isLoaded } = this.state;

    return (
      <React.Fragment>
        <h1 className='h1'>SWAPI Starships</h1>
        <h2 className='h2'>CRA with Class Components</h2>
        {!isLoaded && <p>Data Loading...</p>}

        <Starship starshipData={starships} />
      </React.Fragment>
    );

    // return (
    //   <div>
    //     {spaceships.map((spaceship, i) => {
    //       return <div key={i}>{spaceship}</div>;
    //     })}
    //   </div>
    // );
  }
}

export default App;
