import React from "react";


   let num = 0;
    const clickHandler = () => {
        num= num++;
    };
    
    const Alert = (props) => {
        return ( <>
        <p>{num}</p>
            <button onClick={clickHandler} className="btn btn-success btn-lg">
                Click Me
            </button></>
            
        );
    };


  

export default Alert