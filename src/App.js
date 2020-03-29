import React from 'react';
import logo from './logo.svg';
import './App.css';
import Haythem from './Inputinterface'
import Tableau from './Manipulation'
import Adding from './Adding'
import Descreption from './Descreption'
import { BrowserRouter as Router, Route} from "react-router-dom";

function App() {
  return (
    <Router>
<Route exact path='/'  component={Haythem}/>
<Route exact path='/' component={Tableau}/>
<Route exact path='/' component={Adding}/>
<Route  path='/descreption/:id' component={Descreption}/>



    </Router>
  );
}

export default App;
