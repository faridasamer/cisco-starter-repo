import './App.css';
import * as React from 'react';

function App() {
  return (
    <>
    <Banner /> 
    <Card/>
    </>
  );
}

function Banner(){
  return(
    <div class="container banner">
      <div class="jumbotron">
      <h1>Sextant</h1>      
      <p>Display your public IP address</p>
      </div>    
    </div>
  );
    
}

function Card(){
  return(
    <div class="cardContainer">
    <div class="card">
      <div class="card-body">
      <h5 class="card-title">Your IP address is:</h5>
      <p class="card-text">100.100.100.100</p>
      </div>
    </div>
    </div>
  );
}

export default App;
