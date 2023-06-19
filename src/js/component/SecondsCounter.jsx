import React from "react";
import propTypes from "prop-types";

   

const SecondsCounter = (props) => {

            

    return (
        
        <div className="bg-black d-flex justify-content-center">
            <i className="clock far fa-clock"></i>
            <div className="num">{props.meses}</div>
            <div className="num">{props.semanas}</div>
            <div className="num">{props.dias}</div>
            <div className="num">{props.horas}</div>
            <div className="num">{props.minutos}</div> 
            <div className="num">{props.segundos}</div> 
        </div>
 
    )
}




export default SecondsCounter


