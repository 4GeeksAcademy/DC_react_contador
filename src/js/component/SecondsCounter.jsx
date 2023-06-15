import React from "react";
import propTypes from "prop-types";

const SecondsCounter = (sec) => {

    let uni = 0;
    let diez = 0;
    let cien = 0;
    let mil = 0;
    let diezmil = 0;
    let cienmil = 0;
    if (uni > 9) sec.uni = uni;


    return (
        
        <div className="bg-black d-flex justify-content-center">
            <i className="clock far fa-clock"></i>
            <div className="num">{cienmil}</div>
            <div className="num">{diezmil}</div>
            <div className="num">{mil}</div>
            <div className="num">{cien}</div>
            <div className="num">{diez}</div>
            <div className="num">{uni}</div>
        </div>
 
    )
}

let counter = 0;

setInterval(function(){
   <SecondsCounter sec={counter}/>;
    counter +=1;
},
1000);


export default SecondsCounter