import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const About = () => {
	return (
		<Container className='mt-5'>
			<Row>
				<Col>
					<h1>About Us</h1>
					<p>
						Welcome to Student Care! We are dedicated to providing exceptional care and support to
						students.
					</p>
					<p>
						Our mission is to create a nurturing environment where students can thrive academically,
						socially, and emotionally.
					</p>
					<p>
						At Student Care, we offer a range of services including homework assistance, tutoring,
						and enrichment programs.
					</p>
					<p>
						Our team of experienced educators is passionate about helping students reach their full
						potential.
					</p>
					<p>
						We believe that every student deserves the opportunity to succeed, and we are here to
						support them every step of the way.
					</p>
					<p>Thank you for choosing Student Care. We look forward to working with you!</p>
				</Col>
			</Row>
		</Container>
	);
};

export default About;
