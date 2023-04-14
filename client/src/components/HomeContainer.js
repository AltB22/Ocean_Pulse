import React, { useState } from "react";
import NavTabs from "./NavTabs";
import Home from "./pages/home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Locations from "./pages/Locations";
import AddLocation from "./pages/AddLocation";
// import Login from "./pages/Login;
import Signup from "./pages/Signup";

export default function HomeContainer() {
	const [currentPage, setCurrentPage] = useState("Home");

	const HandlePageChange = (page) => setCurrentPage(page);

	const renderPage = () => {
		if (currentPage === "Home") {
			return <Home />;
		}
		if (currentPage === "About") {
			return <About />;
		}
		if (currentPage === "Contact") {
			return <Contact />;
		}
		if (currentPage === "Locations") {
			return <Locations />;
		}
		if (currentPage === "AddLocation") {
			return <AddLocation />;
		}
		if (currentPage === "Login") {
			return <Login />;
		}
		if (currentPage === "Signup") {
			return <Signup />;
		}
	};

	return (
		<div>
			<NavTabs currentPage={currentPage} HandlePageChange={HandlePageChange} />
			{renderPage()}
		</div>
	);
}
