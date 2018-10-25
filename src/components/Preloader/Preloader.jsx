import React, { Component}  from 'react';
import './Preloader.css';

function Preloader() {
    return (
        <div className="preloader__wrapper">
            <div className="preloader__circle preloader__circle-1"></div>
            <div className="preloader__circle preloader__circle-1a"></div>
            <div className="preloader__circle preloader__circle-2"></div>
            {/* <div className="preloader__circle preloader__circle-3"></div> */}
        </div>
    );
}

export default Preloader;