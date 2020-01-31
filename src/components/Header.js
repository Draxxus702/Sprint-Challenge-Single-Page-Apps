import React from "react";
import SearchForm from './SearchForm'
export default function Header({setQuery}) {
  return (
    <header className="ui-centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
      <SearchForm setQuery={setQuery}/>
    </header>
  );
}
