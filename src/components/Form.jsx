import React from "react";
import { Button, Select, Container, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useEffect } from "react";

export default function Form() {
	const [clinics, setClinics] = useState([]);
	const [doctors, setDoctors] = useState([]);
	const [slots, setSlots] = useState([]);

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

	const handleClinicChange = (e) => {
		console.log("clinicvalue", e.target.value);
		if (e.target.value) {
			var clinicDataofDoctors;
			fetch(
				`https://apollo-appointments.herokuapp.com/doctors/clinic/${e.target.value}`
			)
				.then(async (response) => {
					clinicDataofDoctors = await response.json();
					// console.log("clinicDataofDoctors:", clinicDataofDoctors);
				})
				.then(() => {
					let allDoctors = clinicDataofDoctors;
					console.log("allDoctors:", allDoctors.item);
					setDoctors(allDoctors.item);
				});
		} else {
			setDoctors([]);
		}
	};

	const handleDoctorChange = (e) => {
		console.log("docValue", e.target.value);
		if (e.target.value) {
			var doctor;
			fetch(
				`https://apollo-appointments.herokuapp.com/doctors/${e.target.value}`
			)
				.then(async (response) => {
					doctor = await response.json();
					console.log("doctor:", doctor);
				})
				.then(() => {
					let doctorSlots = doctor.item.slots;
					console.log("doctorSlots:", doctorSlots);
					setSlots(doctorSlots);
				});
		} else {
			setSlots([]);
		}
	};
	return (
		<Container>
			<Stack marginTop={20} spacing={6}>
				<Select placeholder="Select Clinic" onChange={handleClinicChange}>
					{/* <option value="option1">Option 1</option> */}

					{clinics.map((el) => {
						return (
							<option value={el._id} key={el._id}>
								{el.name}
							</option>
						);
					})}
				</Select>

				<Select placeholder="Select Doctor" onChange={handleDoctorChange}>
					{/* <option value="option1">Option 1</option> */}

					{doctors.map((el) => {
						return (
							<option value={el._id} key={el._id}>
								{el.name} {el.speciality}
							</option>
						);
					})}
				</Select>
				<Select placeholder="Select Slot">
					{/* <option value="option1">Option 1</option> */}

					{slots.map((el) => {
						return (
							<option value={el} key={el}>
								{el}
							</option>
						);
					})}
				</Select>
			</Stack>

			<Button colorScheme="blue" marginTop={6}>
				Submit
			</Button>
		</Container>
	);
}
