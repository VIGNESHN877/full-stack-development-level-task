import { useState } from 'react';

function ToggleContent() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? 'Hide' : 'Show'} Content
      </button>
      {isVisible && <div>SNS College of Engineering (Autonomous) is a multi- disciplinary
         global institution established in the year 2007, is affiliated to Anna University,
          Chennai and approved by AICTE, New Delhi. Since the inception, SNSCE has reformed
           and refined the boundaries of intellectual and creative thoughts as a pre-eminent
            academic center.</div>}
    </div>
  );
}

export default ToggleContent;