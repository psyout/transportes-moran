import React from 'react';
import './Services.scss';
import { ServicesData } from './ServicesData';

function Services() {
	return (
		<section className='services'>
			<h3 className='services__title'>Nuestros Servicios</h3>
			<div className='services-container'>
				{ServicesData.map((icon, index) => (
					<article key={index} className='services-container__service'>
						<img src={icon.image} alt={icon.title} className='services-container__icon' />
						<h2>{icon.title}</h2>
						<p>{icon.body}</p>
					</article>
				))}
			</div>
		</section>
	);
}

export default Services;
