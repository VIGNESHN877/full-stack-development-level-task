import React, { useState } from 'react';

function ToggleComponent() {
  // Step 1: useState hook to store boolean value
  const [isVisible, setIsVisible] = useState(false);

  // Step 2: Toggle function to invert the current state
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>SNS College of Engineering</h2>
      
      {/* Step 3: Button to toggle isVisible */}
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Content' : 'Show Content'}
      </button>

      {/* Step 4: Conditionally render content */}
      {isVisible && (
        <div style={{ marginTop: '20px', color: 'blue' }}>
          <p>SNS College of Engineering (Autonomous) is a multi- disciplinary global institution established in the year 2007, is affiliated to Anna University, Chennai and approved by AICTE, New Delhi. Since the inception, SNSCE has reformed and refined the boundaries of intellectual and creative thoughts as a pre-eminent academic center.</p>
        </div>
      )}
    </div>
  );
}

export default ToggleComponent;
