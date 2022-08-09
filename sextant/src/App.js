import './App.css';
import React, { Component, useState } from 'react';

function App() {
  return (
    <>
    <Banner />
    <Card name="IPv4" children='https://api.ipify.org'></Card>
    <Card name="IPv6" children='https://api64.ipify.org'></Card>
    </>
  );
}

class Banner extends Component {
  render() {
    return(
      <div class="container banner">
        <div class="jumbotron">
        <h1>Sextant</h1>      
        <p>Display your public IP address</p>
        </div>    
      </div>
    );
  }
}

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: null
    };
  }
  render() {
      fetch(this.props.children)
      .then(response => response.text())
      .then(data => this.setState({details: data}))
    return(
      <div class="cardContainer">
      <div class="card">
        <div class="card-body">
        <h5 class="card-title">{this.props.name}</h5>
        <p class="card-text">IP: {`${this.state.details}`}</p>
        </div>
      </div>
      </div>
    );
  }
}


export default App;
