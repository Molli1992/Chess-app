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

                <h1>LIFE IS A GAME OF CHESS</h1>
                <p>
                    Learn to play chess with our website,
                    easy tutorials Youtube Channel to watch.
                </p>

                <div>
                    <button type="button" className="button-inicio">
                        <span className="span-button"></span>PLAY CHESS
                    </button>
                    <button type="button" className="button-inicio">
                        <span className="span-button"></span>TRAINING
                    </button>
                </div>

            </div>

        </div>

    );

};

export default Inicio;