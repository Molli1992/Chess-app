import React from "react";
import "./learn.css"
import Navigation from "../navigation/navigation";
import Navbar from "../navbar/navbar";
import YouTube from 'react-youtube';



function Learn() {

    const video1 = 'e57NqRHE6AY';
    const video2 = "rv9O8I1kNnc";
    const video3 = "soeEeadcOKw";


    return (

        <div className="body-learn">

            <Navbar />

            <Navigation />

            <div className="container-learn">

                <div className="container-text-learn">
                    <h2>
                        Every man should learn to play chess to know that with a bad move he can lose his Queen.
                    </h2>

                    <p>
                        Welcome to our learning session, learn to play chess from your home
                    </p>
                </div>

                <div className="youtube-container">

                    <div className="video">
                        <h3>Learn to play from scratch</h3>
                        <YouTube videoId={video1} />
                    </div>

                    <div className="video">
                        <h3>Learn to play from scratch</h3>
                        <YouTube videoId={video2} />
                    </div>

                    <div className="video">
                        <h3>Learn to play from scratch</h3>
                        <YouTube videoId={video3} />
                    </div>

                </div>

                <div className="button-container-learn">
                    <button className="button-learn">Prev</button>
                    <button className="button-learn">Next</button>
                </div>

            </div>

        </div>

    );

};

export default Learn;