import React, { Component } from 'react';
import { BrowserRouter, Route,Link, NavLink} from 'react-router-dom';
import { Button } from 'antd';
import './App.less';


import Header from './components/header';
import Home from './components/home';
import Product from './components/product';
import About from './components/about';
import ChildrenToFather from './components/childrenToFather';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      aaa: 'aaa',
      focus: 1,
      list: []
    };
  }
  render() {
    const Links = () => (
      <nav>
        <NavLink exact activeClassName="active" to="/" aaa={this.state.aaa}>Home</NavLink>
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
          <Header aaa={this.state.aaa} focus={this.state.focus == 1}/>
          <ChildrenToFather onSureHandle={this.sureHandle.bind(this)}/>
          <ul>
            {this.state.list.map((item) =>(
                          <li key={item}>{item}</li>
                        ))}
          </ul>
          <Links />
          <Route exact path="/" component={Home} />
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
  sureHandle(val){
    console.log('from widget', val)
    this.state.list.push(val)
    this.setState({
      list: this.state.list 
    });

  }
}

export default App;


