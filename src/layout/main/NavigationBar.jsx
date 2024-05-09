import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "./Navigation.css";

const NavigationBar = () => {
	return (
		<Navbar expand='lg' className='bg-body-tertiary'>
			<Container fluid>
				<Link to='/' className='text-decoration-none'>
					<Navbar.Brand>STUDENTS CARE</Navbar.Brand>
				</Link>
				<Navbar.Toggle aria-controls='navbarScroll' />
				<Navbar.Collapse id='navbarScroll'>
					<Nav className='me-auto my-2 my-lg-0' style={{ maxHeight: "120px" }} navbarScroll>
						<Nav.Link>
							<Link className='text-decoration-none text-dark' to={"/"}>
								Home
							</Link>
						</Nav.Link>

						<Nav.Link href='#services'>Services</Nav.Link>
						<Nav.Link href='#teachers'>Teachers</Nav.Link>
						<Nav.Link>
							<Link className='text-decoration-none text-dark' to={"/admission"}>
								Admission
							</Link>
						</Nav.Link>
						<Nav.Link>
							<Link className='text-decoration-none text-dark' to={"/about"}>
								About
							</Link>
						</Nav.Link>

						<Nav.Link href='#contact'>Contact</Nav.Link>
					</Nav>
					<div className='d-flex'>
						<Link className='login-button' to={"/registration"}>
							Registration
						</Link>
						<Link className='login-button' to={"/login"}>
							Login
						</Link>
					</div>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default NavigationBar;
