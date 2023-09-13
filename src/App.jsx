import React from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ContactForm from './components/ContactForm/ContactForm';
import AboutUs from './components/AboutUs/AboutUs';
import Projects from './components/Projects/Projects';

function App() {
	return (
		<>
			<div className='container'>
				<header className='header'>
					<Navbar />
				</header>
			</div>
			<Hero />
			<div className='container'>
				<AboutUs />
				<Projects />
				<ContactForm />
			</div>
		</>
	);
}

export default App;
