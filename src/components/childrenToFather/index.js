import React from 'react';

class about extends React.Component {
    render() {
        return (
            <div>
              <input type="text" ref="inputArea"/>
              <button onClick={this.sureHandle.bind(this)}>确定</button>
            </div>
        );
    }  
    sureHandle(){
      let val = this.refs.inputArea.value;
      this.props.onSureHandle && this.props.onSureHandle(val)
    }     
}

export default about;
