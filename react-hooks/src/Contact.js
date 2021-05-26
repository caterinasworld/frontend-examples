import { useContext } from 'react';
import { UserContext } from './UserContext';

export default function Contact() {
  const { count, setCount } = useContext(UserContext);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div className='container w-75 mx-auto'>
      <h1>Contact</h1>
      <div>This is the Contact page </div>
      <div>Context: {count}</div>
      <button class='btn btn-primary' onClick={handleClick}>
        Update
      </button>
    </div>
  );
}
