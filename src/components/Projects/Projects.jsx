import './Projects.scss';
import projectOne from '../../assets/images/project-1.jpg';

function Projects() {
	return (
		<section className='projects'>
			<h1 className='projects__title'>Ultimos Proyectos</h1>
			<article className='card-container'>
				<div class='card'>
					<img src={projectOne} alt='ultimos projectos' />
					<div class='card-content'>
						<h2 class='card-title'>Card Title</h2>
						<p class='card-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
						<button class='card-button'>Learn More</button>
					</div>
				</div>
			</article>

			<article className='card-container'>
				<div class='card'>
					<img src={projectOne} alt='ultimos projectos' />
					<div class='card-content'>
						<h2 class='card-title'>Card Title</h2>
						<p class='card-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
						<button class='card-button'>Learn More</button>
					</div>
				</div>
			</article>

			<article className='card-container'>
				<div class='card'>
					<img src={projectOne} alt='ultimos projectos' />
					<div class='card-content'>
						<h2 class='card-title'>Card Title</h2>
						<p class='card-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
						<button class='card-button'>Learn More</button>
					</div>
				</div>
			</article>

			<article className='card-container'>
				<div class='card'>
					<img src={projectOne} alt='ultimos projectos' />
					<div class='card-content'>
						<h2 class='card-title'>Card Title</h2>
						<p class='card-paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
						<button class='card-button'>Learn More</button>
					</div>
				</div>
			</article>
		</section>
	);
}

export default Projects;
