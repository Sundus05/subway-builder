import React from "react";
import "./LandingPage.css";
import subway from "../../assets/Fajita.png";
import { Link } from 'react-router-dom';


const LandingPage = () => {
    return (
        <div className="homePage">
            <div className="left">
                    <div className="textSection">
                        <p className="tagline">ORDER SUBWAYS THE EASY WAY!</p>
                        <Link to="/subway-builder/subway">
                            <button type="button"
                                class="btn btn-light" className="myButton">
                                Build Now
                            </button>
                        </Link>

                    </div>
                </div>
                <div className="right"></div>
                <h1 className="center">SUB
                    <img
                        src={subway}
                        alt=""
                    />
                    WAY
                </h1>

            </div>
                            
    );
}

export default LandingPage;