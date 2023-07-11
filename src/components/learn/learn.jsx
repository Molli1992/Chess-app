import React from "react";
import "./learn.css"
import Navigation from "../navigation/navigation";
import Navbar from "../navbar/navbar";
import YouTube from 'react-youtube';



function Learn() {

    const videoId = 'e57NqRHE6AY';


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
                        <YouTube videoId={videoId} />
                    </div>

                    <div className="video">
                        <h3>Learn to play from scratch</h3>
                        <YouTube videoId={videoId} />
                    </div>

                    <div className="video">
                        <h3>Learn to play from scratch</h3>
                        <YouTube videoId={videoId} />
                    </div>

                    <div className="video">
                        <h3>Learn to play from scratch</h3>
                        <YouTube videoId={videoId} />
                    </div>

                    <div className="video">
                        <h3>Learn to play from scratch</h3>
                        <YouTube videoId={videoId} />
                    </div>

                    <div className="video">
                        <h3>Learn to play from scratch</h3>
                        <YouTube videoId={videoId} />
                    </div>

                </div>

            </div>

        </div>

    );

};

export default Learn;