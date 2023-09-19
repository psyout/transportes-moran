import React from 'react';
import './Services.scss';
import { ServicesData } from './ServicesData';

import aridosImage from '../../assets/images/svg/movimiento.svg';
import compactacionImage from '../../assets/images/svg/compactacion.svg';
import bajaImage from '../../assets/images/svg/baja.svg';
import arriendoImage from '../../assets/images/svg/arriendo.svg';
import ventaImage from '../../assets/images/svg/venta.svg';
import preparacionImage from '../../assets/images/svg/preparacion.svg';

function Services() {
	return (
		<>
			<section className='services'>
				<h3 className='services__title'>Nuestros Servicios</h3>
				<div className='services-container'>
					{ServicesData.map((icon, index) => (
						<article key={index} className='services-container__service'>
							<img src={imageService(icon.title)} alt={icon.title} className='services-container__service--icon' />
							<h2 className='services-container__service--title'>{icon.title}</h2>
							<p className='services-container__service--body'>{icon.body}</p>
						</article>
					))}
				</div>
			</section>
		</>
	);
}

export default Services;

function imageService(serviceTitle) {
	switch (serviceTitle) {
		case 'Movimiento Áridos':
			return aridosImage;
		case 'Compactación':
			return compactacionImage;
		case 'Cama Baja':
			return bajaImage;
		case 'Preparación Terreno':
			return preparacionImage;
		case 'Venta Áridos':
			return ventaImage;
		case 'Arriendo Maquinarias':
			return arriendoImage;
		default:
			return null;
	}
}
