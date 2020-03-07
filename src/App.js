import React, {useState, useEffect} from "react";
import Header from "./components/Header.js";
import {Route} from 'react-router-dom'
import axios from 'axios'
import CharacterCard from './components/CharacterCard'
import WelcomePage from './components/WelcomePage'

export default function App() {

  const [query, setQuery]= useState('rick')
  const [state, setState]=useState([])
console.log('get',state)
  useEffect(()=>{
    axios
    .get(`https://rickandmortyapi.com/api/character/?name=${query}`)
    .then(response =>{
    setState(response.data.results)
    })
    .catch(error =>{
    console.log(error)
    })
    },[query]);

  return (
    <main>
      <Header setQuery={setQuery}/>
      <Route exact path='/'>
      <CharacterCard cardProps={state}/>
      </Route>
      <Route exact path ='/WelcomePage'>
        <WelcomePage/>
      </Route>
    </main>
  );
}
