import React from 'react';

class home extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
        return (
                <h1>home {this.props.aaa}</h1>
        );
    }
}

export default home;