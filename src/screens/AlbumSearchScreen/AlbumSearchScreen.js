import './AlbumSearchScreen.css';
import React from 'react';
import SpotifyGetAlbums from '../../SpotifyData/SpotifyGetAlbums';
import { useSelector } from "react-redux";
import Albums from '../../components/Albums/Albums';



const  AlbumSearchScreen =()=>{
  const {id}=useSelector((state)=>state.id);
  const {name}=useSelector((state)=>state.name);
 

  SpotifyGetAlbums(id);
  const { albums } = useSelector((state) => state.album);

  return (
  <div className='albumPage'>
      <div className="artistName">
         <h1>{name}</h1>
        <p>Albums</p>
      </div>
    <div className='albumShow'> {albums.map((album, i) => {
       return <div>

      
        <Albums key={i}
          name={album?.name}
          date={album?.release_date}
          img={album?.images[1].url}
          tracks={album?.total_tracks}
          artist={name}
          preview={album?.external_urls.spotify}
        />
     </div>
      })}
    </div>
  </div>
  );
};

export default AlbumSearchScreen;