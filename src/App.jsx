import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import Form from "./components/Form";
import DoctorHistory from "./components/DoctorHistory";

function App() {
	return (
		<div className="App">
			<h1>Hello</h1>
			<Routes>
				<Route path="/Home" element={<Home />}></Route>
				<Route path="/doctor-history" element={<DoctorHistory />}></Route>
				<Route path="/form" element={<Form />}></Route>
			</Routes>
		</div>
	);
}

export default App;
