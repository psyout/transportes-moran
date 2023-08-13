import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import { MenuData } from './MenuData';
import logo from '../../assets/images/logo.svg';
import { LuX } from 'react-icons/lu';
import { SlMenu } from 'react-icons/sl';

function Navbar() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setMobileMenuOpen(!mobileMenuOpen);
	};

	const closeMobileMenu = () => {
		setMobileMenuOpen(false);
	};

	return (
		<nav className={`navbar ${mobileMenuOpen ? 'active' : ''}`}>
			<div className='navbar-container'>
				<div className='navbar-logo'>
					<Link className='navbar-logo__link' to='/' onClick={closeMobileMenu}>
						<img className='navbar-logo__img' src={logo} alt='logo-transportes-moran' />
					</Link>
				</div>

				<button className='navbar-toggle' onClick={toggleMobileMenu}>
					{mobileMenuOpen ? <LuX /> : <SlMenu />}
				</button>

				<ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
					{MenuData.map((item, index) => (
						<li key={index} className='navbar-menu__item'>
							<Link className={item.cName} to={item.url} onClick={closeMobileMenu}>
								{item.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
