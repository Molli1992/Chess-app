import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";


function Profile() {


    return (

        <div className="body-profile">

            <div className="header-wrapper">

                <header></header>

                <div className="cols-container">

                    <div className="left-col">

                        <div className="img-container">
                            <img src="https://storage.prompt-hunt.workers.dev/clio48kjk000vmf0g77lhisd5_1" alt="Anna Smith" />
                            <span></span>
                        </div>

                        <h2>Anna Smith</h2>
                        <p>UI/UX Desingner</p>
                        <p>anna@example.com</p>

                        <ul className="about ul-profile">
                            <li><span>4,073</span>Followers</li>
                            <li><span>322</span>Following</li>
                            <li><span>200,543</span>Attractions</li>
                        </ul>

                        <div className="content">

                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde fugit,
                                at explicabo sint ipsa facere esse mollitia voluptatibus consequuntur
                                aliquam sapiente cum consectetur, repudiandae amet expedita.
                                Eum, autem incidunt! Ipsam.
                            </p>

                        </div>

                    </div>

                    <div className="rigth-col">

                        <nav>
                            <ul className="ul-profile">
                                <li><Link to="/" className="link-profile">Photos</Link></li>
                                <li><Link to="/" className="link-profile">Games</Link></li>
                                <li><Link to="/" className="link-profile">Home</Link></li>
                                <li><Link to="/" className="link-profile">Settings</Link></li>
                            </ul>

                            <button>Follow</button>
                        </nav>

                        <div className="photos">
                            <img src="https://cdn.pixabay.com/photo/2016/02/10/21/59/landscape-1192669_640.jpg" alt="" />
                            <img src="https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="" />
                            <img src="https://www.xtrafondos.com/descargar.php?id=5846&resolucion=2560x1440" alt="" />
                            <img src="https://definicion.de/wp-content/uploads/2009/12/paisaje-1.jpg" alt="" />
                            <img src="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg" alt="" />
                            <img src="https://media.gq.com.mx/photos/60cf8f0a33c54bdef67610ee/16:9/w_2560%2Cc_limit/paisaje.jpg" alt="" />
                            <img src="https://concepto.de/wp-content/uploads/2015/03/paisaje-e1549600034372.jpg" alt="" />
                            <img src="https://media.gq.com.mx/photos/60cf8f0a33c54bdef67610ee/16:9/w_2560%2Cc_limit/paisaje.jpg" alt="" />
                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default Profile;