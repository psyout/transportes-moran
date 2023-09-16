import './Footer.scss';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-container'>
				<p className='footer-container__title'>
					<span>Transportes Moran Limitada 2023.</span>
					<br />
					Todos los derechos reservados.
				</p>
				<div className='footer-navbar'>
					<ul className='footer-navbar__list'>
						<li className='footer-navbar__item'>
							<a className='footer-navbar__link' href='#nosotros'>
								Nosotros
							</a>
						</li>
						<li className='footer-navbar__item'>
							<a className='footer-navbar__link' href='#servicios'>
								Servicios
							</a>
						</li>
						<li className='footer-navbar__item'>
							<a className='footer-navbar__link' href='proyectos'>
								Proyectos
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
