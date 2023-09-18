import './AboutUs.scss';

function AboutUs() {
	return (
		<section className='about'>
			<div className='about__imagen'></div>
			<div className='about__text'>
				<h1 className='about__text--title'>Valoramos la confianza y preferencia.</h1>
				<p className='about__text--paragraph'>
					Transportes Moran, una empresa fundada por el visionario Don Leonardo Moran en los albores de 1982, ha trascendido el tiempo y las vicisitudes del mercado para florecer y cosechar más de tres décadas de experiencia inigualable en el
					vertiginoso mundo del transporte. Hoy, con un profundo sentido de logro y gratitud, celebramos con jubilo nuestros 32 años de incansable dedicación y evolución constante, que nos han catapultado a una posición de liderazgo indiscutible
					en la industria.
					<br />
					<br className='break-desktop' />
					En el núcleo de nuestra filosofía empresarial se encuentra el compromiso de guiar y facilitar las operaciones requeridas por nuestros clientes. Nos enorgullece que nuestros clientes confíen en nosotros debido a la confiabilidad,
					seguridad y eficiencia que proporcionamos en cada servicio que ofrecemos. Valoramos la confianza que han depositado en nosotros a lo largo de los años y trabajamos incansablemente para mantener y fortalecer esa confianza.
				</p>
			</div>
			<div className='about__info--years'>
				<h3>40</h3>
				<p>Años establecidos</p>
			</div>
			<div className='about__info--projects'>
				<h3>+ 250</h3>
				<p>Proyectos</p>
			</div>
		</section>
	);
}

export default AboutUs;
