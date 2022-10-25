export const fetchArtists = (artists) => {
    return {
      type: "GET_ARTISTS",
      payload: artists,
    };
  };
  export const fetchAlbums = (albums) => {
    return {
      type: "GET_ALBUMS",
      payload: albums,
    };
  };
  export const fetchId = (id) => {
    return {
      type: "GET_ID",
      payload: id,
    };
  };
  export const fetchName = (name) => {
    return {
      type: "GET_NAME",
      payload: name,
    };
  };
