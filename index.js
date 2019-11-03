import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import FunctionCall from "./components/FunctionCall";
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Counter from "./components/Counter";
import EventBind from "./components/EventBind";

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {

    return (
      <div className="container">
        <Message />
        <Counter />
        <EventBind />
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Greet name = "Krishna" >
          <p>Hello, that is your name.</p>
        </Greet>

        <Greet name="Rama">
        </Greet>

        <Hellox name="Krishna Pandit" />

        <Welcome name = "Hero" >
          <p className = "text-primary">Jay ho!</p>
        </Welcome>

        <FunctionCall />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
