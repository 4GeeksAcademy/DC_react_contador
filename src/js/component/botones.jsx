import React from "react";



const Botones = (props) => {
    
    return (<>
        <button type="button" className="btn btn-danger" onClick={props.stop}>Danger</button>
        <button type="button" className="btn btn-primary" onClick={props.play}>Primary</button>
        <button type="button" className="btn btn-warning">Warning</button>
        </>
        
    )
}

export default Botones