// App.js
import React, { useContext } from 'react';
import ThemeProvider from './ThemeProvider';
import ThemeContext from './ThemeContext';
import './App.css'; // We'll add styles here

function ThemedComponent() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className={`app-container ${theme}`}>
      <h2>useContext Theme Switcher</h2>
      <p>Current theme: <strong>{theme}</strong></p>
      <button onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <ThemedComponent />
    </ThemeProvider>
  );
}

export default App;
