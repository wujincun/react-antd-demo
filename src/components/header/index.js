import React from 'react';
import './index.less'
class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let aaa = this.props.aaa;
    return (
        <h1 className={`${this.props.focus ? 'focus' : ''}`}>header {aaa}</h1>
    );
  }
}

export default Header;