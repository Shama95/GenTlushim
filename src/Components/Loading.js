import React from 'react';
import Logo from "./sachar2.jpg";

const Loading=()=>{
    return (
        <div style={{ marginTop:'0px',backgroundImage: `url(${Logo})`,padding:'320px', height: '100'}}>
            <h1 style={{ padding:'0px',width:'1000', height: '1000'}}>
                Welcome To The New Sachar Website!!!!
            </h1>
        </div>
    );
}
export default Loading;