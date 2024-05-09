import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import NavigationBar from "./NavigationBar";

const MainLayout = () => {
	return (
		<Container>
			<NavigationBar />
			<Outlet />
		</Container>
	);
};

export default MainLayout;
