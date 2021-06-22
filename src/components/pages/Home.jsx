import React from "react"
import { Redirect, Route, Switch } from 'react-router-dom';
import Horizontal from "./Horizontal"
import Details from "../pages/Details"
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
                    <Switch>
                    <Route exact path="/" component={Horizontal} />
                    <Route exact path="/details/:country" component={Details} />
                    </Switch>
                   </div>
                </div>
            </div>
        </>
    );
};

export default Home;