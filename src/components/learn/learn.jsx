import React, { useState } from "react";
import "./learn.css"
import Navigation from "../navigation/navigation";
import Navbar from "../navbar/navbar";



function Learn() {

    const [state, setState] = useState("principiantes");

    const VideosPrincipiantes = [{ id: "https://www.youtube.com/embed/Kti3oKIZ8Mw" },
    { id: "https://www.youtube.com/embed/snSHKk5d-fo" },
    { id: "https://www.youtube.com/embed/UVIunS4XNUg" },
    { id: "https://www.youtube.com/embed/2Uu6DjmCQDc" },
    { id: "https://www.youtube.com/embed/ZkqbegeGxaY" },
    { id: "https://www.youtube.com/embed/xc3lWM3EVPE" },
    { id: "https://www.youtube.com/embed/T5iis0QnWtQ" },
    { id: "https://www.youtube.com/embed/Bj1-0jHlVXM" },];

    const VideosJaquesMates = [{ id: "https://www.youtube.com/embed/m5Di3rAaiAk" },
    { id: "https://www.youtube.com/embed/MAQuIaQ-208" },
    { id: "https://www.youtube.com/embed/W4HvkB1TukE" },
    { id: "https://www.youtube.com/embed/Ql2r9_bQNwE" },
    { id: "https://www.youtube.com/embed/Qd60zKZkzl8" },
    { id: "https://www.youtube.com/embed/Xpn4lTu8el0" },
    { id: "https://www.youtube.com/embed/PLOqyMxCZ2E" },
    { id: "https://www.youtube.com/embed/5fgcqB6KaEE" },];

    const VideosAperturas = [{ id: "https://www.youtube.com/embed/UfbwuldmNGk" },
    { id: "https://www.youtube.com/embed/gGW1kE8D2sM" },
    { id: "https://www.youtube.com/embed/it1PtOlqlEw" },
    { id: "https://www.youtube.com/embed/Ql2r9_bQNwE" },
    { id: "https://www.youtube.com/embed/ol6IekYAcVQ" },
    { id: "https://www.youtube.com/embed/ElV3eZ8d5oY" },
    { id: "https://www.youtube.com/embed/xUZ1k_FNUFs" },
    { id: "https://www.youtube.com/embed/PFFreRt7p7Q" },];

    const VideosFinales = [{ id: "https://www.youtube.com/embed/gRbFsSC6FXU" },
    { id: "https://www.youtube.com/embed/6LAhpNMn3XQ" },
    { id: "https://www.youtube.com/embed/uPzI-K9f9_U" },
    { id: "https://www.youtube.com/embed/ViS4NYHzpJY" },
    { id: "https://www.youtube.com/embed/NffFx6g_z58" },
    { id: "https://www.youtube.com/embed/_IdnjemKMpM" },
    { id: "https://www.youtube.com/embed/ykWijNiwXS0" },
    { id: "https://www.youtube.com/embed/Lrg5TkooSzI" },];

    const VideosImortales = [{ id: "https://www.youtube.com/embed/dtwtDuAhpag" },
    { id: "https://www.youtube.com/embed/aUzKeSOojKg" },
    { id: "https://www.youtube.com/embed/2dtDuspK_dA" },
    { id: "https://www.youtube.com/embed/fE83xYkmplc" },
    { id: "https://www.youtube.com/embed/R15BoLt6aTY" },
    { id: "https://www.youtube.com/embed/QTEm8JdzWBE" },
    { id: "https://www.youtube.com/embed/DOpodvbqLfk" },
    { id: "https://www.youtube.com/embed/YvDHpj8uRrk" },];

    const onClickPrincipiantes = () => {
        setState("principiantes")
    };

    const onClickFinales = () => {
        setState("finales")
    };

    const onClickAperturas = () => {
        setState("aperturas")
    };

    const onClickJaquesMates = () => {
        setState("mates")
    };

    const onClickInmortales = () => {
        setState("inmortales")
    };


    return (

        <div className="body-learn">

            <Navbar />

            <Navigation />

            <div className="container-learn">

                <div className="container-text-learn">
                    <h2>
                        Todo hombre debería aprender a jugar al ajedrez
                        para saber que con una mala jugada puede perder a su Reina.
                    </h2>

                    <p>
                        Bienvenido a nuestra sesión de aprendizaje, aprende a jugar al ajedrez desde tu casa
                    </p>
                </div>

                <div className="container-filtros-videos">

                    <div className="filtros">

                        <button className="button-filtros" onClick={onClickPrincipiantes}>Aprende desde cero</button>
                        <button className="button-filtros" onClick={onClickJaquesMates}>Jaques Mates</button>
                        <button className="button-filtros" onClick={onClickAperturas}>Aperturas</button>
                        <button className="button-filtros" onClick={onClickFinales}>Finales</button>
                        <button className="button-filtros" onClick={onClickInmortales}>Partidas Inmortales</button>

                    </div>

                    <div className="youtube-container">

                        {state === "principiantes" && VideosPrincipiantes.map((v) => {
                            return (
                                <div className="video">
                                    <iframe
                                        src={v.id}
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                            )
                        })}

                        {state === "mates" && VideosJaquesMates.map((v) => {
                            return (
                                <div className="video">
                                    <iframe
                                        src={v.id}
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                            )
                        })}

                        {state === "finales" && VideosFinales.map((v) => {
                            return (
                                <div className="video">
                                    <iframe
                                        src={v.id}
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                            )
                        })}

                        {state === "aperturas" && VideosAperturas.map((v) => {
                            return (
                                <div className="video">
                                    <iframe
                                        src={v.id}
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                            )
                        })}

                        {state === "inmortales" && VideosImortales.map((v) => {
                            return (
                                <div className="video">
                                    <iframe
                                        src={v.id}
                                        frameborder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>

                            )
                        })}

                    </div>

                </div>

            </div>

        </div >

    );

};

export default Learn;