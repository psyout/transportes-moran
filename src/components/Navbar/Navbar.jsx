import React, { useState } from 'react';
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

	const scrollToSection = (sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
		closeMobileMenu();
	};

	return (
		<nav className={`navbar ${mobileMenuOpen ? 'active' : ''}`}>
			<div className='navbar-container'>
				<div className='navbar-logo'>
					<a
						href='#hero'
						className='navbar-logo__link'
						rel='noopener noreferrer'
						role='button'
						aria-label='Scroll to top'
						onClick={(e) => {
							e.preventDefault();
							window.scrollTo(0, 0);
						}}>
						<img className='navbar-logo__img' src={logo} alt='logo-transportes-moran' />
					</a>
				</div>

				<button className='navbar-toggle' onClick={toggleMobileMenu}>
					{mobileMenuOpen ? <LuX /> : <SlMenu />}
				</button>

				<ul className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
					{MenuData.map((item, index) => (
						<li key={index} className='navbar-menu__item'>
							<a
								className={item.cName}
								href={item.url}
								onClick={(e) => {
									e.preventDefault();
									scrollToSection(item.url.substring(1));
								}}>
								{item.title}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
