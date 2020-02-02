import React from 'react';
import { Link } from 'react-router-dom';
import './styles/Home.css'
import Astronauts from '../images/astronauts.svg';
import PlatziConf from '../images/platziconf-logo.svg';

export default class Home extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="Background__universe">
                    <div className="Container">
                        <div className="Content__platziConf">
                            <img className="Image__platziConf" src={PlatziConf} alt="Platzi conf"/>
                            <div className="text__platziConf">
                                <h1>PRINT YOUR BADGES</h1>
                                <label>The easiest way to manage your conference</label>
                                <Link
                                    to="/badges"
                                    className="btn btn-primary">
                                        Start now
                                </Link>
                            </div>
                        </div>
                        <div className="Content__astronauts">
                            <img className="Image__astronauts" src={Astronauts} alt="Astronauts with microphone"/>
                        </div>
                    </div>

                </div>
            </React.Fragment>
        );
    }
}