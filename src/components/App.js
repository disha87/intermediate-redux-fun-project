import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import { connect } from 'react-redux';
import { login, hear, join, say } from '../chat';
import { doLogin, userNameChanged, doSend, messageChanged, userLogin, sendMsg, receivedMsg } from '../actions';
import Messages from './Messages';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleClick() {
      console.log(`name: ${this.props.name}, status: ${this.props.status}`);
      this.props.doLogin(this.props.name, this.props.status);
  }

  handleSend() {
      console.log(`name: ${this.props.name}, message: ${this.props.message}`);
      console.dir(`messages: ${this.props.messages}`);
      this.props.doSend(this.props.name, this.props.message);
  }

  handleChange(event) {
      this.props.userNameChanged(event.target.value);
      event.preventDefault();
  }

  handleMessageChange(event1) {
      this.props.messageChanged(event1.target.value);
      event1.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Star Wars Chat</h1>
        </header>
        <p>
          <label htmlFor="status">{this.props.status} </label>
          <label htmlFor="nickname">nickname </label>
          <input id="nickname" value={this.props.name} onChange={this.handleChange} type="text" />
          <button onClick={this.handleClick}>login</button>
        </p>
        <p>
          <label htmlFor="message">message </label>
          <input id="message" value={this.props.message} onChange={this.handleMessageChange} type="text"></input>
          <button onClick={this.handleSend}>send</button>
        </p>
        <Messages messages={this.props.messages}/>
      </div>
    );
  }
}

export default connect(state => state, { userNameChanged, doLogin, messageChanged, doSend })(App);


