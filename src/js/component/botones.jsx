import React from "react";



const Botones = (props) => {
    console.log(props.reset);
    return (<>
        <button type="button" className="btn btn-danger" onClick={props.stop}>STOP</button>
        <button type="button" className="btn btn-primary" onClick={props.play}>PLAY</button>
        <button type="button" className="btn btn-warning" onClick={props.reset}>RESET</button>
        <button type="button" className="btn btn-dark" onClick={props.back}>Back</button>
        </>
        
    )
}

export default Botones