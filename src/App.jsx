import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ContactForm from './components/ContactForm/ContactForm';
import AboutUs from './components/AboutUs/AboutUs';
import Projects from './components/Projects/Projects';
import Services from './components/Services/Services';
import Footer from './components/Footer/Footer';

function App() {
	return (
		<>
			<div className='container'>
				<header className='header'>
					<Navbar />
				</header>
			</div>
			<Hero />
			<div id='nosotros'>
				<Services />
				<AboutUs />
			</div>
			<div id='projectos'>
				<Projects />
			</div>
			<div id='contacto'>
				<ContactForm />
			</div>
			<Footer />
		</>
	);
}

export default App;
