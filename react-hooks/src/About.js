import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function About() {
  const { count, setCount } = useContext(UserContext);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className='container w-75 mx-auto'>
      <h1>About</h1>
      <div>This is the About page </div>
      <div>Context: {count}</div>
      <button className='btn btn-primary' onClick={handleClick}>
        Update
      </button>
    </div>
  );
}
