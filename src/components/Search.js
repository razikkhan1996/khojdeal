import React from 'react'
import './search.css';

export const Search = () => {
  return (
    <>
    <div className='search-container'>
        <input className='search-input' type="text" placeholder="Search..."/>
        <button className='search-button'>Search</button>
    </div>
    </>
  )
}
