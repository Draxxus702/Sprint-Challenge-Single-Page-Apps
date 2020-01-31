import React from "react";

function CharacterList(props){
  return(
  <div className='card-div'>
  <p>Name: {props.character.name}</p>
  <p>Status: {props.character.status}</p>
  <p>Species: {props.character.species}</p>
  <p>Gender: {props.character.gender}</p>
  <p>Homeworld: {props.character.origin.name}</p>
  
      
  </div>
  )
  }
  
  export default CharacterList
