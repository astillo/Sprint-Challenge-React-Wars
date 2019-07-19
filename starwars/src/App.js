import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Content from './components/content/content';
import ContentComp from './components/content/ContentComp';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [result, setResult] = useState([])
  let array = []

  useEffect(() => {
    axios.get('https://henry-mock-swapi.herokuapp.com/api/')
      .then(res => {
        setResult(res.data.results)
      })
  }, []);

  function setStuff(res) {
    return (<ContentComp Result={res} />)
  }

  return (
    <div>
      {result.map(e => <Content Name={e.name} HomeWorld={e.homeworld} />)}
      {/* map(e => { return (<Content Name={e} />) })} */}
    </div>
    // <Content Name={name} HomeWorld={homeWorld} />

  );
}

export default App;
