import './CurrentProject.scss';
import projectImage from '../../assets/images/project-1.jpg';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'react-slideshow-image/dist/styles.css';

function CurrentProject() {
	return (
		<section className='current-project'>
			<h1 className='current-project__title'>Proyecto Destacado</h1>

			<div className='project-container'>
				<Carousel className='project-container__image' showThumbs={false} showStatus={false} showIndicators={true}>
					<div>
						<img className='project-container__image--slide' src={projectImage} alt='current project' />
					</div>
					<div>
						<img className='project-container__image--slide' src={projectImage} alt='current project' />
					</div>
				</Carousel>
				<div className='project-container__text'>
					<h3 className='project-container__text--title'>Renovación pavimento</h3>
					<p className='project-container__text--body'>
						Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
					</p>
					<ul className='project-container__list'>
						<li className='project-container__list--item'>
							<span>Maquinas:</span> Retroescavadora, Cama baja
						</li>
						<li className='project-container__list--item'>
							<span>Cliente:</span> Autopista Central
						</li>
						<li className='project-container__list--item'>
							<span>Ubicacion:</span> San Bernardo
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
}

export default CurrentProject;
