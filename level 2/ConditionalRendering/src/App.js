import React from 'react';

import ConditionalRendering from './components/ConditionalRendering';

// Import other components...

function App() {
  return (
    <div className="App">
     
      <ConditionalRendering isLoggedIn={false} />
    </div>
  );
}

export default App;