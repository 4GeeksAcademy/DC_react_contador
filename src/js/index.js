//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";


// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
// import SecondsCounter from "./component/SecondsCounter.jsx";




//render your react application
// ReactDOM.render(<Home />, document.querySelector("#app"));

let sec = 0;
let min = 0;
let hor = 0;
let dia = 0;
let sem = 0;
let mes = 0;


setInterval(function(){

    if (sec == 9){
        sec=0;
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
        />, document.querySelector("#app"));
       
    },1000);

