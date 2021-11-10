import React, { useState, useEffect } from 'react';
import './App.css';
import Starship from './Starship';

export default function StarshipFleet() {
  let [starships, setStarships] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  let [page, setPage] = useState(1);

  useEffect(() => {
    let url = `https://swapi.dev/api/starships/?page=${page}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setStarships(data.results);
        setIsLoading(false);
        return data;
      })
      .catch((error) => console.log(error));
  }, [page]);

  return (
    <section>
      <h1>SWAPI Starships</h1>
      <h2>CRA with Hooks</h2>

      {isLoading && <p>Loading...</p>}

      {/* {starships.map((item, index) => {
        return <div key={index}> {item.name}</div>;
      })} */}

      <Starship starshipData={starships} />
    </section>
  );
}
