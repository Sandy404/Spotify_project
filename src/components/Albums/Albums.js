import React from 'react'
import './Albums.css';

const Albums=({ img, artist, name, tracks, date, preview })=> {
  
  return (
    <div className='albumCard' >
          <div className='albumImg' >
            <img src={img} alt="album-img" />
            </div>
          <div className="albumInfo">
            <div className="info">
              <h3>{name}</h3>
              <p>{artist}</p>
            </div>
            <div className='more' >
              <p>{date}</p>
              <p>{tracks} tracks</p>
            </div>
            <div className='link'>
            <a href={preview} target="_blank">
              Preview on Spotify
            </a>
            </div>
          </div>
        </div>
      
  )
}

export default Albums;
