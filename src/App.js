
import './App.css';
import LandingScreen from './screens/LandingScreen/LandingScreen';
import ArtistSearchScreen from './screens/ArtistSearchScreen/ArtistSearchScreen';
import AlbumSearchScreen from './screens/AlbumSearchScreen/AlbumSearchScreen';
import React,{useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header/Header';




function App() {

  return (
<div>
    <Header>Spotify Artist Search</Header>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingScreen />} />
      <Route path="/search-artists" element={<ArtistSearchScreen />} />
      <Route path="/search-albums" element={<AlbumSearchScreen />} />
      

    </Routes>
  </BrowserRouter>
  </div>
  
      
  );
};

export default App;
