import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Post from './Post';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<Post />} />
        <Route path="*" element={<h2>404: Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default App;