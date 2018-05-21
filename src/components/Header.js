import React, { Component } from "react";
import SpeechToText from "speech-to-text";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: ""
    };
    this.listenHandler = this.listenHandler.bind(this)
    
  }

  //function to listen to what has been said
  listenHandler(){
    const onAnythingSaid = text => this.setState({ word: text });
    const onFinalised = text => null;

    try {
      const listener = new SpeechToText(onAnythingSaid, onFinalised);
      listener.startListening();
    } catch (error) {
      console.log(error);
    }
  }

  changeHandler=(e)=>{
    this.setState({word:e.target.value})
  }
  render() {
   
    return (
      <header className="header">
        <h1 className="title-text">THE WORLD</h1>
        <input
          className="input"
          type="text"
          value={this.state.word}
          onChange={this.changeHandler}
          placeholder="Search for your favorit country"
        />
        <button className="btn btn-primary" onClick={this.listenHandler} > Listen </button> <nbsp />
        <button className="btn btn-success" onClick={this.props.getKeyword.bind(null, this.state.word)} > Result </button>        
        <hr />
      </header>
    );
  }
}
