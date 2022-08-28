import './App.css';
import React, {Component} from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";


const client = new W3CWebSocket('ws://localhost:55455');
function App() {
  return (
    <>
    <Banner />
    <Card name="IPv4" children='https://api.ipify.org'></Card>
    <Card name="IPv6" children='https://api64.ipify.org'></Card>
    <Latency name="Packet Latency" ></Latency>
    </>
  );
}

class Latency extends Component{
  constructor(props) {
    super(props);
    this.state = {
      details: null
    };
  }
  componentDidMount(){
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      this.setState({details: message.data})
    };
  }

  render() {
    const utcTimestamp = new Date().getTime();
  return(
    <div class="cardContainer">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">{this.props.name}</h5>
      <p class="card-text">Latency: {`${utcTimestamp-this.state.details}`}</p>
      </div>
    </div>
    </div>
  );
}
  
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
