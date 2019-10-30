import React, { Component } from "react";

class Counter extends Component {
  constructor(){
    super();
    this.state = {
      count: 0
    }
  }

  incrementCount(){
    this.setState({
      count: this.state.count + 1
    }, () => {
      console.log("callback value = ", this.state.count );
    });
  }

  resetCount(){
    this.setState({
      count: 0
    }, () => {
      console.log("callback value = ", this.state.count );
    });
  }

  render(){
    return(
      <div className="text-center border bg-light my-3 p-3">
        <h1 className="text-primary"> Counter </h1>
        <div className="text-danger h1 font-weight-bold border bg-white mx-5 my-3 py-5"> { this.state.count } </div>
        <button type="button" className="btn btn-primary" onClick={ () => this.incrementCount() }>Increment</button>
        <button type="button" className="btn btn-danger" onClick={ () => this.resetCount() }>Reset</button>
      </div>
    );
  }
}

export default Counter;