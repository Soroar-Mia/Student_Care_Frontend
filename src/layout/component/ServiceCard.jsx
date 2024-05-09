/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const ServiceCard = ({ service }) => {
	const { name, description, image } = service;
	return (
		<Card className='border-primary mx-3 mt-5 bg-secondary text-white' style={{ width: "40%" }}>
			<Card.Img className='w-100' height='250px' variant='top' src={image} />
			<Card.Body>
				<h3 className='text-uppercase'>{name}</h3>

				<Card.Text>{description}</Card.Text>
				<Button variant='primary'>Learn More</Button>
			</Card.Body>
		</Card>
	);
};

export default ServiceCard;
