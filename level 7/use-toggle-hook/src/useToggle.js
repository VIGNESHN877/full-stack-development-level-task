// useToggle.js
import { useState } from 'react';

// Step 1: Custom Hook definition
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  // Step 2: Toggle function
  const toggle = () => {
    setValue((prev) => !prev);
  };

  // Step 3: Return current value and toggler
  return [value, toggle];
}

export default useToggle;
