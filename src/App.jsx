import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import CharacterList from './components/CharacterList';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/characters" element={<CharacterList />} />
      </Routes>
    </Router>
  );
};

export default App;
