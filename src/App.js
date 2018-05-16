import React, { Component } from 'react';
import { BrowserRouter, Route,Link} from 'react-router-dom';
import { Button } from 'antd';
import './App.less';


import Home from './components/home';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <a href="/abc">家</a>
          <Link to="abc"> 家</Link>
          <Route path="/abc" component={Home}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
