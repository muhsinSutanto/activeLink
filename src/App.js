import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Detail from './components/Detail'
import Navbar from './components/Navbar'
import {BrowserRouter as Router, Route,} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About}/>
      <Route path='/detail' component={Detail}/>
    </Router>
  );
}

export default App;
