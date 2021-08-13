
import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.cityList = [{ name: 'Goa', country: 'India' },
    { name: 'Amsterdam', country: 'Netherlands' },
    { name: 'New York', country: 'USA' },
    { name: 'Tokyo', country: 'Japan' },
    { name: 'Lonavala', country: 'India' },
    { name: 'Brandenburg Gate', country: 'Germany' },
    { name: 'Reichstag Building', country: 'Germany' },
    { name: 'Museum Island', country: 'Germany' },
    { name: 'Munnar', country: 'India' },
    { name: 'Rome', country: 'Italy' },
    { name: 'Milan', country: 'Italy' },
    { name: 'Venice', country: 'Italy' },
    ]
  }
  

  render() {
    let indiancities = this.cityList.filter((pair) => {
      return pair.country === "India";
      console.log(pair.country);
    });
    return (
      <div id="main">
        <ol>
      {indiancities.map((pair,i) =>{
          return <li key={`location${i+1}`}>{pair.name}</li>
  })}
      </ol>
      </div>
    );
  }
}


export default App;
