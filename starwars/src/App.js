import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import Content from './components/content/content';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [name, setName] = useState([])
  const [homeWorld, setHomeWorld] = useState([])
  const [chars, setChars] = useState("")
  const [nameData, setNameData] = useState("")
  const [elements, setElements] = useState([])
  let array = []

  useEffect(() => {
    axios.get('https://henry-mock-swapi.herokuapp.com/api/')
      .then(res => {
        setStuff(res)

      })
  }, []);

  function setStuff(res) {

    res.data.results.map(e => {
      setName(e.name)
      setHomeWorld(e.homeWorld)
      return (<Content Name={name} HomeWorld={homeWorld} />)
      console.log("done")
    })
  }

  return (
    <div>
      <Content Name={name} HomeWorld={homeWorld} />
      {console.log(name)
        // array.map(e => console.log(e))
      }
    </div>
    // <Content Name={name} HomeWorld={homeWorld} />

  );
}

export default App;
