import React from "react";
import "./sing-up.css";
import Navigation from "../navigation/navigation";
import Navbar from "../navbar/navbar";
import { Link } from "react-router-dom";



function SingUp() {



    return (

        <div className="body-login">

            <Navbar />

            <Navigation />

            <div className="items-login">

                <div className="wrapper">

                    <form action="">

                        <h1>Login</h1>

                        <div className="input-box">
                            <input type="text" placeholder="Username" required />
                            <ion-icon name="person-outline"></ion-icon>
                        </div>

                        <div className="input-box">
                            <input type="password" placeholder="Password" required />
                            <ion-icon name="lock-closed-outline"></ion-icon>
                        </div>

                        <div className="remember-forgot">
                            <label><input type="checkbox" />Remember me</label>
                            <Link to="/forgot" className="link-forgot">Forgot password? </Link>
                        </div>

                        <button type="submit" className="btn-login">Login</button>

                        <div className="register">
                            <p>Dont Have an account? <Link to="/register" className="link-register">Register</Link></p>
                        </div>

                    </form>

                </div>

            </div>

        </div>

    );

};

export default SingUp;