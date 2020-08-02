import React, { Fragment } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import Cats from './pages/Cats';
import Dogs from './pages/Dogs';
import About from './pages/About';
import Cart from './pages/Cart';
import NavState from './context/nav/NavState'


function App() {
  return (
   <NavState>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/cats' component={Cats} />
            <Route exact path='/dogs' component={Dogs} />
            <Route exact path='/about' component={About} />
            <Route exact path='/cart' component={Cart} />
          </Switch>
        </Fragment>
      </Router>
      </NavState>
  );
}

export default App;
