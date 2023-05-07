import {
	BrowserRouter as Router,
	Routes,
	Route,
	useLocation,
} from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Jeuxvadrouille from "./pages/Jeuxvadrouille";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";

function App() {
	return (
		<div className="App">
			<Router>
				{/* <Navbar /> */}
				<Routes>
					<Route path="/" element={<Home />} />
					<Route
						path="/jeux_vadrouille"
						element={<Jeuxvadrouille />}
					/>
					<Route path="/a_propos" element={<About />} />
					<Route path="/nos_services" element={<Services />} />
					<Route path="/contact" element={<Contact />} />
				</Routes>
			</Router>
		</div>
	);
}

export default App;
