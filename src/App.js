import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = { name: '', message: '', messages: [] };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getMessages = this.getMessages.bind(this);
  }

  async componentDidMount() {
    this.getMessages();
  }

  async getMessages() {
    const data = await fetch('/api/messages/').then(res => res.json());
    this.setState({ messages: data });
  }

  handleChange(e) {
    if (e.target.name === 'name') {
      this.setState({name: e.target.value});
    }
    if (e.target.name === 'message') {
      this.setState({message: e.target.value});
    }
  }

  async handleSubmit(e) {
    e.preventDefault();

    await fetch('/api/message/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: this.state.name, message: this.state.message})
    });

    await this.getMessages();

    console.log('Message was sent and list of messages was updated!');
  }

  render() {
    return (
      <div className="App">
        <form className="message-container" onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>
          <input
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
            name="name"
            type="text"
            placeholder="Enter your name"
            required
          />

          <label htmlFor="message">Message</label>
          <input
            value={this.state.message}
            onChange={this.handleChange}
            id="message"
            name="message"
            type="text"
            placeholder="Enter your message"
            required
          />

          <button type="submit">Sent message</button>
        </form>
        <div className="message-container">
          {this.state.messages.map((message) => {
            return <div className="message">
              <div className="message__title">{message.name}</div>
              <div>{message.message}</div>
            </div>
          })}
        </div>
      </div>
    );
  }
}

export default App;
