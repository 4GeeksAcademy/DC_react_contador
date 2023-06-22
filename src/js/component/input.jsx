import React, { useState } from "react";



const Alerta = (props) => {

    const [valorInput, setValorInput] = useState('null');

    const handleInputChange = (event) => {
        setValorInput(event.target.value);
      };

    let segundos = Math.floor(`${valorInput}` * 1000);

    function handlerAlerta () {

        props.alerta(segundos)

    }


    // console.log(segundos);

    


    return (
        <><input 
            className="picker mx-4" 
            value={valorInput} 
            type="number" 
            onChange={handleInputChange} 
            id="ale" 
            placeholder="Segundos"/>

        <button className="btn btn-success" onClick={handlerAlerta}>Alarma</button>
        </>
    )

}


export default Alerta