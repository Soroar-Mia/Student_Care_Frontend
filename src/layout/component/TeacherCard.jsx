/* eslint-disable react/prop-types */
import Card from "react-bootstrap/Card";

const TeacherCard = ({ teacher }) => {
	const { image, user, meet_link, available_time, subject } = teacher;
	return (
		<Card className='border-primary mx-3 mt-5 bg-secondary text-white' style={{ width: "40%" }}>
			<Card.Img className='w-100' height='500px' variant='top' src={image} />
			<Card.Body>
				<h3 className='text-uppercase'>{user}</h3>
				<div className='mb-2 text-muted d-flex'>
					<p className='text-white'>Subject: </p>
					{subject.map((sub, index) => (
						<p className='text-white' key={index}>
							{sub}
						</p>
					))}
				</div>
				<Card.Text>Time: {available_time}</Card.Text>
				<a
					className='text-white text-decoration-none bg-primary p-2 fw-bold rounded-2'
					href={meet_link}
				>
					Join Meet
				</a>
			</Card.Body>
		</Card>
	);
};

export default TeacherCard;
