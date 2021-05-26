import React, { useState, useEffect } from 'react';

export default function List({ getData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
    console.log('Updating');
  }, [getData]);

  return data.map((item) => <div key={item}> {item}</div>);
}
