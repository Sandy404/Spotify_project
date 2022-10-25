import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useDispatch } from "react-redux";
import {fetchArtists} from '../redux/actions';



const SpotifyGetArtists = (e) => {
  const dispatch=useDispatch();
  const [token, setToken] = useState("");
  
 
  useEffect(() => {
      if (localStorage.getItem("accessToken")) {
        setToken(localStorage.getItem("accessToken"));
      
      }
    }, []);

    const submit = async() => {
      const API = "https://api.spotify.com/v1";
      await axios
        .get(`${API}/search?q=${e}&type=artist`, {
          headers: {
            Authorization: "Bearer " +token,

          }   ,
        })
        .then((response) => {
          
          response.data.artists.items &&
          dispatch(fetchArtists(response.data.artists.items)); 
      })
        .catch((error) => {
          console.log(error);
        });
      
      };
      

  
      return ({ submit});
    };



export default SpotifyGetArtists;