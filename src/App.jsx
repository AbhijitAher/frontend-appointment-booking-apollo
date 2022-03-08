import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import Form from "./components/Form";
import DoctorHistory from "./components/DoctorHistory";
import {
	Container,
	Stack,
	Heading,
	Text,
	Link,
	Button,
} from "@chakra-ui/react";

function App() {
	return (
		<Container>
			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/form" element={<Form />}></Route>
				<Route path="/doctor-history" element={<DoctorHistory />}></Route>
			</Routes>
		</Container>
	);
}

export default App;
