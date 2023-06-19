import React from "react";
import SecondsCounter from "./SecondsCounter.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => { 
	// console.log(props)

	return(
		<div>
			<SecondsCounter 
			segundos = {props.segundos} 
			minutos = {props.minutos} 
			horas = {props.horas}
			dias = {props. dias} 
			semanas = {props. semanas}
			meses = {props. meses}/>
		</div>
	);
};

export default Home;
