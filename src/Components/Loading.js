import React from 'react';
import Logo from "../images/sachar.jpg";
import '../css/app.css';

const Loading=()=>{
    return (//this component is the main page component, it uses the css file to center the message and the image.
        <div className="App">
            <h1 style={{  padding:'0px'}}>
                Welcome To The New Sachar Website!!!!
            </h1>
            <img src={Logo} className="App-logo" alt="logo" />
           
        </div>
    );
}
export default Loading;
