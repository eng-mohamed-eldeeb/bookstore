import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';
import Books from './Books';
import Addform from './AddForm';

function App() {
  return (
    <Router>
      <nav>
        <Link className="navLink" to="/">Link#1</Link>
        <Link className="navLink" to="/">Link#2</Link>
      </nav>
      <Books />
      <Addform />
      <button type="button">Check status</button>
      <Routes>
        <Route path="/" element={<></>} />
      </Routes>
    </Router>
  );
}

export default App;
