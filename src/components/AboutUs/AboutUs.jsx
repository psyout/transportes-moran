import './AboutUs.scss';
import aboutImage from '../../assets/images/about-us-img.jpg';

function AboutUs() {
	return (
		<section class='about'>
			<div class='about__imagen'></div>
			<div class='about__text'>
				<h1 className='about__text--title'>Valoramos la confianza y preferencia.</h1>
				<p className='about__text--paragraph'>
					Transportes Moran, fue fundada por Don Leonardo Moran en los comienzos de 1982. Desde entonces, nuestra empresa ha prosperado y ha acumulado más de tres décadas de experiencia en el sector. Con orgullo celebramos nuestros 32 años de
					trayectoria, durante los cuales hemos evolucionado y crecido para convertirnos en líderes indiscutibles en el mundo del transporte.
				</p>
				<p className='about__text--paragraph'>
					En el núcleo de nuestra filosofía empresarial se encuentra el compromiso de guiar y facilitar las operaciones requeridas por nuestros clientes. Nos enorgullece que nuestros clientes confíen en nosotros debido a la confiabilidad,
					seguridad y eficiencia que proporcionamos en cada servicio que ofrecemos. Valoramos la confianza que han depositado en nosotros a lo largo de los años y trabajamospwe incansablemente para mantener y fortalecer esa confianza.
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
