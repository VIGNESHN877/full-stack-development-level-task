import React, { useEffect, useState } from 'react';

// TimerComponent: logs a message every second
function TimerComponent() {
  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('⏱️ Timer is running...');
    }, 1000);

    // Cleanup function
    return () => {
      console.log('🧹 Cleaning up...');
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Know 
      About US</h2>
      <p>SNS College of Engineering (Autonomous) is a multi- disciplinary global institution established in the year 2007, is affiliated to Anna University, Chennai and approved by AICTE, New Delhi. Since the inception, SNSCE has reformed and refined the boundaries of intellectual and creative thoughts as a pre-eminent academic center.</p>
    </div>
  );
}

// App Component to mount/unmount TimerComponent
function App() {
  const [showTimer, setShowTimer] = useState(true);

  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={() => setShowTimer(!showTimer)} style={{ marginTop: '20px' }}>
        {showTimer ? 'Unmount Timer' : 'Mount Timer'}
      </button>
      {showTimer && <TimerComponent />}
    </div>
  );
}

export default App;
