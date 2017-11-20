import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { setMessage } from './incdec_action';
import Increment from './actions/increment';
import Decrement from './actions/decrement';



class App extends Component {

  componentDidMount() {
    this.props.setMessage();
  }

  render() {
    console.log(typeof this.props.set_message.message)
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick = {() => this.props.Increment(this.props.set_message.message)}> UP </button>
        <button onClick = {() => this.props.Decrement(this.props.set_message.message)}> DOWN </button>
        <h1>{this.props.set_message.message}</h1>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {
    set_message: state.set_message
  }
}

const mapActionCreators = {
  setMessage, Increment, Decrement
};

export default connect(
  mapStateToProps,
  mapActionCreators
)(App)

