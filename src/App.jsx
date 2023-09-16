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
			<Services />
			<div className='container'>
				<AboutUs />
				<Projects />
				<ContactForm />
				<Footer />
			</div>
		</>
	);
}

export default App;
