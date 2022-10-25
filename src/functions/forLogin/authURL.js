export const authURL=()=>{
const CLIENT_ID='6af0f07542764a22b430a241010b6d5e';
const SPOTIFY_AUTHORIZE_ENDPOINT='https://accounts.spotify.com/authorize';
const REDIRECT_URL='http://localhost:3000/';
const SCOPES=["user-read-currently-playing",
"user-read-playback-state",
"playlist-read-private"];
const ask_auth=SPOTIFY_AUTHORIZE_ENDPOINT + '?client_id='+CLIENT_ID+'&redirect_uri='+REDIRECT_URL+'&scope='+SCOPES+'%20&response_type=token&show_dialog=true';
return ask_auth;
};