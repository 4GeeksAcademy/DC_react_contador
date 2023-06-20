import React from "react";



const Botones = (props) => {

    return (
        <div className="m-4">
        <button type="button" className="btn btn-danger" onClick={props.stop}>STOP</button>
        <button type="button" className="btn btn-primary" onClick={props.play}>PLAY</button>
        <button type="button" className="btn btn-warning" onClick={props.reset}>RESET</button>
        </div>
        
    )
}

export default Botones