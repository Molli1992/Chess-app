import React from "react";
import "./inicio.css";
import Navigation from "../navigation/navigation";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";

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
                    <Link to="/ChessGame">
                        <button type="button" className="button-inicio">
                            <span className="span-button"></span>Juega contra vos mismo para aprender
                        </button>
                    </Link>
                </div>

            </div>

        </div>

    );

};

export default Inicio;