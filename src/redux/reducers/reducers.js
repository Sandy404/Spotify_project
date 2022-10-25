import { combineReducers } from "redux";
import { albumReducer,artistReducer,idReducer, nameReducer } from "./reducer";

const reducers = combineReducers({
  artist: artistReducer,
  album: albumReducer,
  id:idReducer,
  name:nameReducer,
});
export default reducers;