export const albumReducer = (state = {albums:[]}, { type, payload }) => {
  switch (type) {
    case 'GET_ALBUMS':
      return { ...state, albums: payload };
    default:
      return state;
  };
};
export const artistReducer = (state = {artists:[]}, { type, payload }) => {
  switch (type) {
    case "GET_ARTISTS":
      return { ...state, artists: payload };
    default:
      return state;
  }
};
export const idReducer = (state = {id:''}, { type, payload }) => {
  switch (type) {
    case "GET_ID":
      return { id: payload };
    default:
      return state;
  }
};
export const nameReducer = (state = {name:''}, { type, payload }) => {
  switch (type) {
    case "GET_NAME":
      return { name: payload };
    default:
      return state;
  }
};

