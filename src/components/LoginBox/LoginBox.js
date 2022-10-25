import React from "react";
import './LoginBox.css';
import { FaSpotify} from 'react-icons/fa';
const LoginBox = props =>{
    return(
    <button type='button' className='loginBtn' onClick={props.onLogin}>
     <p> Login </p> 
       <FaSpotify color='#1ed760' size='48px' />
    </button>
    );
};
export default LoginBox;