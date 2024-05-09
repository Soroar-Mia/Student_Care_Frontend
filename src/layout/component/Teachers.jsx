import { useEffect, useState } from "react";
import TeacherCard from "./TeacherCard";

const Teachers = () => {
	const [teachers, setTeachers] = useState([]);

	useEffect(() => {
		fetch("https://students-care.onrender.com/teacher/list/")
			.then(res => res.json())
			.then(data => setTeachers(data.results));
	}, []);

	return (
		<div className='pb-5' id='teachers'>
			<h1 className='text-center text-primary mt-5'>Teachers</h1>
			<div className='d-flex justify-content-center'>
				{teachers?.map((teacher, index) => (
					<TeacherCard key={index} teacher={teacher} />
				))}
			</div>
		</div>
	);
};

export default Teachers;
