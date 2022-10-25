import axios from 'axios';
import { useDispatch } from "react-redux";
import { fetchAlbums } from '../redux/actions';


const Test= (id) =>{

  const Api = "https://api.spotify.com/v1";


  const useOne = async() =>{
    const dispatch=useDispatch();
    
   await axios.get(`${Api}/artists/${id}/albums`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  })
    .then((response) => {
      response.data && dispatch(fetchAlbums(response.data.items));
      console.log(response.data);
  
    })
    .catch((error) => {
      throw new Error(error);
    });
      };

      return useOne();
    };
export default Test;
