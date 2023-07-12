import React from "react";
import "./inicio.css";
import Navigation from "../navigation/navigation";
import Navbar from "../navbar/navbar";



function Inicio() {



    return (

        <div className="banner">

            <Navigation />

            <Navbar />

            <div className="content-inicio">

                <h1>LA VIDA ES UN JUEGO DE AJEDREZ</h1>
                <p>
                    Aprende a jugar al ajedrez con nuestra web,
                    Tutoriales fáciles de Youtube para ver.
                </p>

                <div>
                    <button type="button" className="button-inicio">
                        <span className="span-button"></span>Juega al ajedrez
                    </button>
                    <button type="button" className="button-inicio">
                        <span className="span-button"></span>Entrenamiento
                    </button>
                </div>

            </div>

        </div>

    );

};

export default Inicio;