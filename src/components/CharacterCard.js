import React from "react";
import CharacterList from './CharacterList'
function CharacterCard(props){
console.log('props', props)
  return(
  <div className='cards'>
   {props.cardProps.map(p =>(
  <CharacterList
  key={p.id}
  character={p}
  />
  ))}
  
  </div>
  )
  }
  
  
  export default CharacterCard