import './ContactForm.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaLocationDot, FaPhone, FaEnvelope } from 'react-icons/fa6';

function ContactForm() {
	return (
		<div className='contact-form'>
			<div className='form-container'>
				<form className='form'>
					<h3 className='form__title'>Contáctanos</h3>
					<div className='form__input'>
						<input type='text' id='name' name='user_name' required placeholder='Name' />
						<input type='email' id='email' name='user_email' required placeholder='Email' />
					</div>
					<textarea name='message' required placeholder='Comment'></textarea>

					<button className='form__button' type='submit' value='Send'>
						Enviar Mensaje
					</button>
				</form>
			</div>
			<div className='info'>
				<div className='info__social'>
					<a className='info__social--icon' rel='noreferrer' href='https://www.facebook.com/profile.php?id=100057301577456' target='_blank'>
						<FaFacebook />
					</a>
					<a className='info__social--icon' rel='noreferrer' href='https://www.facebook.com/profile.php?id=100057301577456' target='_blank'>
						<FaTwitter />
					</a>
					<a className='info__social--icon' rel='noreferrer' href='https://www.facebook.com/profile.php?id=100057301577456' target='_blank'>
						<FaInstagram />
					</a>
				</div>
				<div className='info__details'>
					<h3 className='info__details--title'>Información</h3>
					<div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
						<FaLocationDot />
						<p className='info__details--text'>Av. Portales 4126, San Bernardo, Santiago</p>
					</div>
					<div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
						<FaPhone />
						<p className='info__details--text'>+562 28572792</p>
					</div>
					<div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
						<FaEnvelope />
						<a style={{ color: 'black' }} href='mailto:contacto@transportesmoran.cl' className='info__details--text'>
							contacto@transportesmoran.cl
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ContactForm;
