import React from 'react';
import Logo from "../images/sachar.jpg";
import '../css/app.css';

const Loading=()=>{
    return (
        <div className="App">
            <h1 style={{  padding:'0px'}}>
                Welcome To The New Sachar Website!!!!
            </h1>
            <img src={Logo} className="App-logo" alt="logo" />
           
        </div>
    );
}
export default Loading;

// <div style={{ marginTop:'0px',backgroundImage: `url(${Logo})`, padding:'32px', width:'100%', height: '100%'}} />