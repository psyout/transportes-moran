import React from 'react';
import './Hero.scss';
import backgroundImage from '../../assets/images/slider.jpg';

function HeroSection() {
	return (
		<div className='hero-section container' style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className='hero-overlay'></div>
		</div>
	);
}

export default HeroSection;
