import React, {useState} from 'react';

const SearchBar = ({setCountryName}) => {

  const handleChange = (e) => {
    e.preventDefault();
    setCountryName(e.target.value);
  }

  return (
    <div className="md-form mt-0">
        <input className="form-control bord-b" type="text" placeholder="Search" aria-label="Search" onChange = {(e) => handleChange(e)}></input>
        
    </div>
    
  );
}

export default SearchBar;
