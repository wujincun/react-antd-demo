import React, { Component } from 'react';
import { BrowserRouter, Route,Link, NavLink} from 'react-router-dom';
import { Button } from 'antd';
import './App.less';


import Header from './components/header';
import Home from './components/home';
import Product from './components/product';
import About from './components/about';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      aaa: 'aaa'
    };
  }
  render() {
    const Links = () => (
      <nav>
        <NavLink exact activeClassName="active" to="/">Home</NavLink>
        <NavLink activeStyle={{color: 'green'}} to={{pathname: '/about'}}>About</NavLink>
        <NavLink 
          isActive={this.isActiveFunc}
          activeClassName="active" 
          to="/contact">Contact</NavLink>
      </nav>
    )
    return (
      <BrowserRouter>
        <div className="App">
          <Header aaa={this.state.aaa} />
          <Links />
          <Route exact path="/" component={Home}/>
          <Route path="/about"  component={Product}/>
          <Route path="/contact"  component={About}/>
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


