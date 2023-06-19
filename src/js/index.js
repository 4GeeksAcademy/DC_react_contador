//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";





//render your react application

    // CUENTA ATRAS

let back = () => {
    D1 = 1;
    D2 = 1;
    D3 = 1;
    D4 = 1;
    D5 = 1;
    D6 = 1;

    
}



    // REANUDAR EL BUCLE

let play = () =>{
    setInterval(temporizador, 1000);
}

    //   // DETENER EL BUCLE

    let stop = () => {
    clearInterval(intervalo);
    }

        // REINICIAR EL BUCLE

let reset = () => {
    D1 = -1;
    D2 = 0;
    D3 = 0;
    D4 = 0;
    D5 = 0;
    D6 = 0;

    clearInterval(intervalo);
    intervalo = setInterval(temporizador,1000)
}

let D1 = -1;
let D2 = 0;
let D3 = 0;
let D4 = 0;
let D5 = 0;
let D6 = 0;



const temporizador = () => {

    
    if (D1 >= 9){
        D1=-1;
        D2++
    }
    if (D2 == 9){
        D2=0;
        D3++
    }
    if (D3 == 9){
        D3=0;
        D4++
    }
    if (D4 == 9){
        D4=0;
        D5++
    }
    
    if (D5 == 9){
        D5=0;
        D6++
    }
    

    D1++

    ReactDOM.render(<Home 
        segundos = {D1}
        minutos = {D2} 
        horas = {D3}
        dias = {D4}
        semanas = {D5}
        meses = {D6}
        parar = {stop}
        continuar = {play} 
        reiniciar = {reset} 

        />, document.querySelector("#app"));
}
let intervalo = setInterval(temporizador,1000);