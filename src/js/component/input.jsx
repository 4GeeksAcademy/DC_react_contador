import React, { useState } from "react";



const Alerta = () => {

    const [valorInput, setValorInput] = useState('');

    const handleInputChange = (event) => {
        setValorInput(event.target.value);
      };

    let segundos = Math.floor(`${valorInput}` * 1000);

    console.log(segundos);

    let prueba = () => {

        let al = () => {

            alert ("Tu tiempo ha pasado")

        };
       
       setInterval(al,segundos);
  
    };  
    

    return (
        <><input 
            className="picker mx-4" 
            value={valorInput} 
            type="number" 
            onChange={handleInputChange} 
            id="ale" 
            placeholder="Segundos"/>

        <button className="btn btn-success" onClick={prueba}>Alarma</button>
        </>
    )

}


export default Alerta