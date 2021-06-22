import React from "react"
import { Redirect, Route, Switch } from 'react-router-dom';
import Horizontal from "./Horizontal"
import Navigation from "../Navigation"
const Home = () => {
    return (
        <>
            <div class="container-wrapper">
                <div className="d-flex">
                    <div className="wrapper">
                        <div className="mt-4">
                            <Navigation />
                        </div>
                    </div>
                    <div>
                   <Horizontal/>
                   </div>
                </div>
            </div>
        </>
    );
};

export default Home;