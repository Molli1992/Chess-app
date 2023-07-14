import React from "react";
import "./inicio.css";
import Navigation from "../navigation/navigation";
import Navbar from "../navbar/navbar";


function Inicio() {

    const onclick = () => {
        window.location.href = "/ChessGame"
    };

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
                    <button type="button" className="button-inicio" onClick={onclick}>
                        <span className="span-button"></span>Juega contra vos mismo para aprender
                    </button>
                </div>

            </div>

        </div>

    );

};

export default Inicio;