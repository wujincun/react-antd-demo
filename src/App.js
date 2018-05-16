import React, { Component } from 'react';
import { BrowserRouter, Route,Link, NavLink} from 'react-router-dom';
import { Button } from 'antd';
import './App.less';


import home from './components/home';
import product from './components/product';
import about from './components/about';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <nav>
            <NavLink exact activeClassName="active" to="/">Home</NavLink>
            <NavLink activeStyle={{color: 'green'}} to={{pathname: '/about'}}>About</NavLink>
            <NavLink 
              isActive={this.isActiveFunc}
              activeClassName="active" 
              to="/contact">Contact</NavLink>
          </nav>
          <Route exact path="/" render={() => <h1>Home</h1>} />
          <Route path="/about" render={() => <h1>About</h1>} />
          <Route path="/contact" render={() => <h1>Contact</h1>} />
        </div>
      </BrowserRouter>
    );
  }
  isActiveFunc(match, location) {
    console.log(match,'contact')
    return match
  }
}

export default App;


