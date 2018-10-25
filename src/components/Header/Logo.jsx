import React, { Component } from 'react';
import './Logo.css';
// import Logo from '../../Content/images/site-logo.svg';

class Header extends Component {
	render() {
		return (
            <a href="#" className="simple-logo">
                {/* <img  src={Logo} alt="Aviasales"/> */}
            </a>
		);
	}
}

export default Header;
