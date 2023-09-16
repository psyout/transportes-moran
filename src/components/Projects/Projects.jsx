import React from 'react';
import './Projects.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { ProjectsData } from './ProjectsData';

function Projects() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 900,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: true,
					dots: true,
				},
			},

			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
				},
			},
		],
	};
	return (
		<section className='projects'>
			<h1 className='projects__title'>Ultimos Proyectos</h1>
			<div className='card-container'>
				<Slider {...settings}>
					{ProjectsData.map((project, index) => (
						<div className='box'>
							<article className='card' key={index}>
								<img className='card__imagen' src={project.imagen} alt={project.title} />
								<div class='card__content'>
									<h2 class='card__content--title'>{project.title}</h2>
									<p class='card__content--paragraph'>{project.body}</p>
									<a href={project.url} className='card__content--button'>
										Ver más...
									</a>
								</div>
							</article>
						</div>
					))}
				</Slider>
			</div>
		</section>
	);
}

export default Projects;
