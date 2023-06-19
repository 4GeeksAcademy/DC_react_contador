import React from "react";
import propTypes from "prop-types";

   

const SecondsCounter = (props) => {

            

    return (
        
        <div className="bg-black d-flex ">
            <i className="clock far fa-clock"></i>
            <div className="num container-fluid">{props.meses}</div>
            <div className="num container-fluid">{props.semanas}</div>
            <div className="num container-fluid">{props.dias}</div>
            <div className="num container-fluid">{props.horas}</div>
            <div className="num container-fluid">{props.minutos}</div> 
            <div className="num container-fluid">{props.segundos}</div> 
        </div>
 
    )
}




export default SecondsCounter


