import React from 'react'
import './search.css'
import search from "../../icons/search.svg";


export default function Search() {
  return (
    <div classNameName='search-bar-container'>
      <form class='form-search' method='get' action='#'>
        <input type='search' name='search' placeholder='Search'></input>
        <button type='submit'>
          <img src={search} alt='' />
        </button>
      </form>
    </div>
  );
}
