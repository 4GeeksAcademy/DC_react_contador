//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";





//render your react application



    // REANUDAR EL BUCLE

let play = () =>{
    setInterval(temporizador, 1000);
}

      // DETENER EL BUCLE

    let stop = () => {
    clearInterval(intervalo);
    }

        // REINICIAR EL BUCLE

// function reiniciarContador() {
//     sec = -1;
//     clearInterval(temporizador);
//     temporizador = setInterval(temporizador, 1000);
//     }

let sec = -1;
let min = 0;
let hor = 0;
let dia = 0;
let sem = 0;
let mes = 0;


// const temporizador = setInterval(function(){

//     if (sec >= 9){
//         sec=-1;
//         min++
//     }
//     if (min == 9){
//         min=0;
//         hor++
//     }
//     if (hor == 9){
//         hor=0;
//         dia++
//     }
//     if (dia == 9){
//         dia=0;
//         sem++
//     }
    
//     if (sem == 9){
//         sem=0;
//         mes++
//     }
    
    

//     sec++


      
//     ReactDOM.render(<Home 
//         segundos = {sec}
//         minutos = {min} 
//         horas = {hor}
//         dias = {dia}
//         semanas = {sem}
//         meses = {mes}
//         parar = {stop}
//         continuar = {play} 

//         />, document.querySelector("#app"));
       
//     },1000);

const temporizador = () => {
    if (sec >= 9){
                sec=-1;
                min++
            }
            if (min == 9){
                min=0;
                hor++
            }
            if (hor == 9){
                hor=0;
                dia++
            }
            if (dia == 9){
                dia=0;
                sem++
            }
            
            if (sem == 9){
                sem=0;
                mes++
            }
            

            sec++
  
            ReactDOM.render(<Home 
                segundos = {sec}
                minutos = {min} 
                horas = {hor}
                dias = {dia}
                semanas = {sem}
                meses = {mes}
                parar = {stop}
                continuar = {play} 
        
                />, document.querySelector("#app"));
}
let intervalo = setInterval(temporizador,1000);