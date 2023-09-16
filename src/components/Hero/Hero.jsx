import React from 'react';
import './Hero.scss';
import backgroundImage from '../../assets/images/excavation-slider.jpg';

function HeroSection() {
	return (
		<div className='hero-section container' style={{ backgroundImage: `url(${backgroundImage})` }}>
			<div className='hero-overlay'>
				<div className='hero-overlay__box'></div>
				<div className='hero-overlay__box'>
					<div className='hero-overlay__box--text'>
						<h1>Construyendo Sueños, Creando Realidad</h1>
						<p>
							Bienvenidos a Transportes Moran. Desde pequeñas renovaciones hasta proyectos de gran envergadura, nuestro compromiso es hacer realidad tus proyectos y convertir tus sueños en estructuras sólidas y duraderas. Descubre cómo nuestro
							equipo de expertos en construcción puede llevar a cabo tus ideas con excelencia y profesionalismo. ¡Comencemos a construir juntos
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HeroSection;
