import React, { Component } from "react";

class Welcome extends Component {

  render(){
    const { name, children } = this.props; // destructuring props in class-component
    // const { state1, state2 } = this.state; // destructuring state in class-component
    return (
      <div>
        // <h1>Welcome to {this.props.name} </h1>
        // {this.props.children}

        <h1>Welcome to {name} </h1>
        {children}
      </div>
    )
  }
}

export default Welcome;