import React from 'react';
import './SearchArtist.css';
import {FaSearch} from 'react-icons/fa';

const SearchArtist =({search, handleChange,submit}) => {

  return (
    <div className="form">
      
      <input className='input'
        type="text"
        placeholder=" Search for an artist..."
        value={search}
        onChange={handleChange}
       onKeyPress={(e) => e.key === 'Enter' && submit()}
      />
      <button onClick={submit} className='btn' ><FaSearch color='#d0d0d0' /></button>
    
</div>
  )
}

export default SearchArtist;