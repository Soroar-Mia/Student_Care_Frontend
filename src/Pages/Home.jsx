import Banner from "../assets/banner.png";
import Contact from "../layout/component/Contact";
import Footer from "../layout/component/Footer";
import Services from "../layout/component/Services";
import Teachers from "../layout/component/Teachers";

const Home = () => {
	return (
		<div>
			<div className='pb-5'>
				<img className='w-100 mt-5 object-fit-cover' src={Banner} alt='' />
			</div>
			<Teachers />
			<Services />
			<Contact />
			<Footer />
		</div>
	);
};

export default Home;
