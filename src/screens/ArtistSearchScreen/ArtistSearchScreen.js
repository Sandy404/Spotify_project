import React ,{useEffect, useState}from 'react'
import './ArtistSearchScreen.css';
import SpotifyGetArtists from '../../SpotifyData/SpotifyGetArtists';
import SearchArtist from '../../components/SearchArtist/SearchArtist';
import { useSelector } from 'react-redux';
import Artists from '../../components/Artists/Artists';
import {useNavigate} from 'react-router-dom';
import { fetchId,fetchName } from '../../redux/actions';
import { useDispatch } from 'react-redux';

const ArtistSearchPage = () => {

  
    const navigate=useNavigate();
    const dispatch=useDispatch();
    const { artists } = useSelector(state => state.artist);
    const [search,setSearch]=useState('');

    const handleSearchChange = (e) => {
      setSearch(e.target.value);
    };
    const { submit}=SpotifyGetArtists(search);
  
    const navigateToAlbumArtist = (id, name) => {
      navigate
        ("/search-albums");
        dispatch(fetchId(id));
        dispatch(fetchName(name));
        };      
    return(
    <div className='screen'>
      <div className='top'>
   
         <div className={artists.length === 0 ? "search1" : "search2"}>
        <SearchArtist
        search={search}
        handleChange={handleSearchChange}
        submit={submit}/>
        </div>  
        </div>
        

        <div class='artistShow'>
        {artists.map((artist, index) => {
          return (
            <Artists
              key={index}
              img={artist?.images.length > 0 ? artist.images[0].url : ""}
              name={artist?.name}
              followers={artist?.followers.total}
              popularity={Math.floor((artist?.popularity)*5/100)}
              toAlbum={() => navigateToAlbumArtist(artist?.id, artist?.name)}
            />)}
         )}
    
        </div>
       
    </div>
  
  
  );
};


export default ArtistSearchPage;