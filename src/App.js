import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Books from './components/Books';
import Addform from './AddForm';
import Categories from './Categories';

function App() {
  return (
    <Router>
      <nav>
        <Link className="navLink" to="/Home">Link#1</Link>
        <Link className="navLink" to="/Add-Form">Link#2</Link>
      </nav>
      <Books />
      <Addform />
      <Categories />
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
