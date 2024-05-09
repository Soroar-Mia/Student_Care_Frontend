import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		fetch("https://students-care.onrender.com/services/")
			.then(res => res.json())
			.then(data => setServices(data));
	}, []);
	console.log(services);
	return (
		<div className='pb-5' id='services'>
			<h1 className='text-center text-primary mt-5'>Services</h1>
			<div className='d-flex justify-content-center'>
				{services?.map((service, index) => (
					<ServiceCard key={index} service={service} />
				))}
			</div>
		</div>
	);
};

export default Services;
