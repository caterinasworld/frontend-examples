import React, { useState, useEffect } from 'react';

// import components
import Starship from './../components/Starship';

// import assets
import loading from './../assets/images/loading.gif';

export default function AppFunctionDemo() {
  const [starships, setStarships] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const url = `https://swapi.dev/api/starships/?page=${page}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setStarships(data.results);
        setIsLoaded(true);
        return data;
      })
      .catch((error) => console.error(error));
  }, [page]);

  return (
    <section>
      {!isLoaded && (
        <img src={loading} alt='gif of a loading circle' className='loading' />
      )}
      {/* {starships.map((item, index) => {
        return <div key={index}> {item.name}</div>;
      })} */}

      <Starship starshipData={starships} />
    </section>
  );
}
