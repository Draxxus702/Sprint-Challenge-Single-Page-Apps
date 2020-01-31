import React, { useState } from "react";
import {Link} from 'react-router-dom'
import {Badge} from 'reactstrap'


export default function SearchForm({setQuery}) {
  const[search, setSearch]= useState()

  const handleSubmit= e => {
      e.preventDefault()
      setQuery(search)
      setSearch('')
  }
  return (
    <section className="search-form">
    <form onSubmit={handleSubmit}>
<input type='text' 
name='query' 
value={search} 
placeholder='Search' 
onChange={e => setSearch(e.target.value)} />
<button type='submit'>Submit</button>
<br/>
<br/>
<Link to='/'><Badge  color="secondary"><h5>Main Page</h5></Badge></Link>
<br/>
<br/>
<Link to='/WelcomePage'><Badge color="secondary"><h5>Welcome</h5></Badge></Link>
</form>
    </section>
  );
}
