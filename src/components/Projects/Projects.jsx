import React from 'react';
import './Projects.scss';
import projectOne from '../../assets/images/project-1.jpg';
import projectDos from '../../assets/images/project-2.jpg';
import projectTres from '../../assets/images/project-3.jpg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function Projects() {
	const settings = {
		dots: true,
		infinite: false,
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
				breakpoint: 800,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 540,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<section className='projects'>
			<h1 className='projects__title'>Ultimos Proyectos</h1>
			<div className='card-container'>
				<Slider {...settings}>
					<div className='box'>
						<article className='card'>
							<img className='card__imagen' src={projectOne} alt='ultimos projectos realizados' />
							<div class='card__content'>
								<h2 class='card__content--title'>Card Title</h2>
								<p class='card__content--paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
								<a href='/some-page' className='card__content--button'>
									Learn More
								</a>
							</div>
						</article>
					</div>
					<div className='box'>
						<article className='card'>
							<img className='card__imagen' src={projectDos} alt='ultimos projectos realizados' />
							<div class='card__content'>
								<h2 class='card__content--title'>Card Title</h2>
								<p class='card__content--paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
								<a href='/some-page' className='card__content--button'>
									Learn More
								</a>
							</div>
						</article>
					</div>
					<div className='box'>
						<article className='card'>
							<img className='card__imagen' src={projectTres} alt='ultimos projectos realizados' />
							<div class='card__content'>
								<h2 class='card__content--title'>Card Title</h2>
								<p class='card__content--paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
								<a href='/some-page' className='card__content--button'>
									Learn More
								</a>
							</div>
						</article>
					</div>
					<div className='box'>
						<article className='card'>
							<img className='card__imagen' src={projectDos} alt='ultimos projectos realizados' />
							<div class='card__content'>
								<h2 class='card__content--title'>Card Title</h2>
								<p class='card__content--paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
								<a href='/some-page' className='card__content--button'>
									Learn More
								</a>
							</div>
						</article>
					</div>
					<div className='box'>
						<article className='card'>
							<img className='card__imagen' src={projectTres} alt='ultimos projectos realizados' />
							<div class='card__content'>
								<h2 class='card__content--title'>Card Title</h2>
								<p class='card__content--paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
								<a href='/some-page' className='card__content--button'>
									Learn More
								</a>
							</div>
						</article>
					</div>
				</Slider>
			</div>
		</section>
	);
}

export default Projects;
