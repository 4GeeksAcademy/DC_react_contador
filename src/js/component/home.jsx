import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";
import Alert from "./prueba.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div>
			<SecondsCounter />
			{/* <Alert/> */}
		</div>
	);
};

export default Home;
