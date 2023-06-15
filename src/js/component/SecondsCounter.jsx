import React from "react";
import propTypes from "prop-types";

const numStyles = {

    color: "White",
    fontSize: "150px",
    padding: "5px",
    margin: "auto",
    
}


const SecondsCounter = (props) => {

    return (
        
        <div className="bg-black d-flex">
            <i className="far fa-clock"style={numStyles}></i>
            <p style={numStyles}>{props.num}</p>
        </div>
    )
}

SecondsCounter.propTypes={
    num: propTypes.number
}

export default SecondsCounter