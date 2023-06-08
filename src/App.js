import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import News from './components/News/News';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<News />}/>
      </Routes>
    </Router>
  );
}

export default App;