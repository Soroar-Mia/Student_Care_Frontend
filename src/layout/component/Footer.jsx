const Footer = () => {
	return (
		<footer className='bg-dark text-center text-white p-3'>
			<div className='container'>
				<p>&copy; {new Date().getFullYear()} Students Care. All Rights Reserved.</p>
				<p>
					Designed with <i className='bi bi-heart-fill text-danger'></i> by You
				</p>
			</div>
		</footer>
	);
};

export default Footer;
