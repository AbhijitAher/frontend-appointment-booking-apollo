import { Container, Stack, Heading, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Home = () => {
	return (
		<Container w={{ base: "100%", md: "90%", lg: "70%" }} py={{ base: "20vh" }}>
			<Heading
				fontWeight={600}
				fontSize={{ base: "2xl", sm: "3xl", md: "5xl" }}
				lineHeight={"110%"}
				marginBottom={"20"}
				textAlign={"center"}
			>
				<Text as={"span"} color={"blue.400"}>
					How can we help you?
				</Text>
			</Heading>
			<Stack
				textAlign={"center"}
				align={"center"}
				direction={"column"}
				spacing={"10"}
			>
				<Button>
					<Link to="/form">Book an Appointment</Link>
				</Button>

				<Button>
					<Link to="/doctor-history">Appoinment History</Link>
				</Button>
			</Stack>
		</Container>
	);
};
