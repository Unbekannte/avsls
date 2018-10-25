import React, { Component } from 'react';
import './Header.css';
import { Button } from '@material-ui/core';
import NavigationIcon from '@material-ui/icons/Navigation';

class Header extends Component {
	render() {
		return (
			<header className="main-header">
                {/* <CompanyLogo /> */}
				<Button className='main-header__nav-button' size="large" color="primary" variant="outlined">
					Продажа
				</Button>
				<Button className='main-header__nav-button' size="large" color="primary" variant="outlined">
					Аренда
				</Button>
				<Button className='main-header__nav-button' size="large" color="primary" variant="outlined">
					О компании
				</Button>
				{/* <Button variant="extendedFab" aria-label="Delete">
					<NavigationIcon />
					Extended
				</Button> */}
			</header>
		);
	}
}

export default Header;
