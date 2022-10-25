import React from 'react'
import "./Artists.css";

import {AiFillStar} from 'react-icons/ai';
const  Artists =({img,toAlbum, name, followers, popularity},)=> {
  const popul=Array(popularity).fill(0);
  return (
    <div>
    <div className="artistCard" onClick={toAlbum}>
    
        <div className="artistImg">
          <img src={img !== "" ? img : "https://e7.pngegg.com/pngimages/972/713/png-clipart-spotify-streaming-media-logo-music-until-you-were-gone-album-version-others-hand-logo.png"} alt="artist-img" />
        </div>
        <div className="artistInfo">
          <div className="infos">
            <h1>{name}</h1>
            <p>{followers} followers</p>
          </div>
          <ul className="rating">
            {
            popul.map((e) => (
                  <li><AiFillStar /></li>
                ))}
          </ul>
      </div>
    </div>
  </div>
  )
}

export default Artists;