import React from 'react';

// import components
import Starship from './../components/Starship';

// import assets
import loading from './../assets/images/loading.gif';

class AppClassDemo extends React.Component {
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
      .catch((error) => console.error(error));
  }

  componentDidMount() {
    const url = 'https://swapi.dev/api/starships/';
    this.fetchData(url);
  }

  render() {
    const { starships, isLoaded } = this.state;

    // return (
    //   <div>
    //     {spaceships.map((spaceship, i) => {
    //       return <div key={i}>{spaceship}</div>;
    //     })}
    //   </div>
    // );

    return (
      <React.Fragment>
        {!isLoaded && (
          <img
            src={loading}
            alt='gif of a loading circle'
            className='loading'
          />
        )}

        <Starship starshipData={starships} />
      </React.Fragment>
    );
  }
}

export default AppClassDemo;
