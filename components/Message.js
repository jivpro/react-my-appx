import React, { Component } from "react";

class Message extends Component {
  constructor(){
    super();
    this.state = {
      message: "text-warning",
      message1: "Welcome Visitor!",
      message2: "btn btn-success",
      message3: "Subscribe"
    }
  }

  changeMessage(){
    this.setState({
      message: "text-success",
      message1: "Thanks for subscribing!",
      message2: "btn btn-danger",
      message3: "Unsubscribe"
    });
  }

  render(){
    return(
      <div>
        <h1 className={ this.state.message }>{ this.state.message1 }</h1>
        <button type="button" className= { this.state.message2 } onClick = { ()=> this.changeMessage() } >{ this.state.message3 }</button>
      </div>
    );
  }
}

export default Message;