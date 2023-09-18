import './Footer.scss';

function Footer() {
	return (
		<footer className='footer'>
			<div className='footer-container'>
				<p className='footer-container__copyright'>
					Hecho en Vancouver por &nbsp;
					<a href='https://felipegonzalez.ca' target='_blank' rel='noreferrer' title='Felipe Gonzalez'>
						Felipe
					</a>
				</p>
				<p className='footer-container__title'>
					<span>Transportes Moran Ltda. © 2023 </span>&nbsp;
				</p>
			</div>
		</footer>
	);
}

export default Footer;
