import React, { Component } from "react";

class EventBind extends Component {

  constructor(){
    this.state = {
      message: "Hello"
    }
  }

  EventHandler(){
    this.setState({
      message: "Good bye"
    });
    // console.log(this);
  }

  render(){
    return (
      <div className="text-center">
      <div className="text-primary"> { this.state.message } </div>
        {/* <button className="btn btn-secondary" type="button" onClick={ this.EventHandler.bind(this) }> click </button>
        // or */}
        <button className="btn btn-secondary" type="button" onClick={ () => this.EventHandler() } > click </button>
      </div>
    )
  }
}

export default EventBind;