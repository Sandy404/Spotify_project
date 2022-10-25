import React,{useEffect} from "react";
import './LandingScreen.css';
import LoginBox from "../../components/LoginBox/LoginBox";
import {useNavigate} from 'react-router-dom';
import { authURL } from "../../functions/forLogin/authURL";
import { tokenParams } from "../../functions/forLogin/tokenParams";

const LandingScreen = props =>{
    const navigate = useNavigate();
    const login = () =>window.location=authURL();
    useEffect(()=>{
        if(window.location.hash){
        const {access_token}=tokenParams(window.location.hash);
        localStorage.clear();
        localStorage.setItem("accessToken", access_token);
        navigate("/search-artists");
        }
    });

    return <LoginBox onLogin={login}/>;
};
export default LandingScreen;