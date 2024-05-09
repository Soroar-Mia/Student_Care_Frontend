import { createBrowserRouter } from "react-router-dom";
import About from "../src/Pages/About";
import Admission from "../src/Pages/Admission";
import Home from "../src/Pages/Home";
import Login from "../src/layout/component/Login";
import Registration from "../src/layout/component/Registration";
import MainLayout from "../src/layout/main/MainLayout";

const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: "/registration",
				element: <Registration />,
			},
			{
				path: "/login",
				element: <Login />,
			},
			{
				path: "/about",
				element: <About />,
			},
			{
				path: "/admission",
				element: <Admission />,
			},
		],
	},
]);

export default router;
