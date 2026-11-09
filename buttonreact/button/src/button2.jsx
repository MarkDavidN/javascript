

import { useState } from 'react';

function Button2() {
  const count = useState(0);

  const handleclick = () => {
    if (count < 5) {
      setCount(prevCount => prevCount + 1);
      console.log(count + 1);
    } else {
      console.log("You have reached the maximum limit of clicks.");
    }
  };

  return (
    <button onClick={handleclick}>dont click ({count})</button>
  );
}

export default Button2;