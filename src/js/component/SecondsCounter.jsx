import React from "react";
import propTypes from "prop-types";


    
    // setInterval(function(){

             
            
    // },
    // 1000);
const SecondsCounter = () => {
    let cont_uni = 0;
    let cont_diez = 0;
    let cont_cien = 0;
    let cont_mil = 0;
    let cont_diezmil = 0;
    let cont_cienmil = 0;

       
        if (cont_uni > 9){
            cont_uni = 0;
            cont_diez++; }
            if (cont_diez > 9){
                cont_diez = 0;
                cont_cien++;}
                if (cont_cien > 9){
                    cont_cien = 0;
                    cont_mil++;}
                    if (cont_mil > 9){
                        cont_mil = 0;
                        cont_diezmil++;}
                        if (cont_diezmil > 9){
                            cont_diezmil = 0;
                            cont_cienmil++;}
                            if (cont_cienmil > 9){
                                cont_cienmil = 0; }
        

        // https://www.youtube.com/watch?v=aVISNta4R9k --> cronometro con js


    return (
        
        <div className="bg-black d-flex justify-content-center">
            <i className="clock far fa-clock"></i>
            <div className="num">{cont_cienmil}</div>
            <div className="num">{cont_diezmil}</div>
            <div className="num">{cont_mil}</div>
            <div className="num">{cont_cien}</div>
            <div className="num">{cont_diez}</div>
            <div className="num">{cont_uni}</div>
        </div>
 
    )
}




export default SecondsCounter


