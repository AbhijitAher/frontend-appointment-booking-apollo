import React from "react";
import { Button, Select, Container, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

export default function Form() {
	const [clinics, setClinics] = useState([]);

	useEffect(() => {
		var data;
		fetch("https://apollo-appointments.herokuapp.com/clinics")
			.then(async (response) => {
				data = await response.json();
				console.log("data:", data);
			})
			.then(() => {
				let allClinics = data.item;
				setClinics(allClinics);
			});
	}, []);
	return (
		<Container>
			<Stack>
				<Select placeholder="Select option">
					{/* <option value="option1">Option 1</option> */}

					{clinics.map((el) => {
						return (
							<option value={el._id} key={el._id}>
								{el.name}
							</option>
						);
					})}
				</Select>
			</Stack>

			<Button colorScheme="blue">Button</Button>
		</Container>
	);
}
