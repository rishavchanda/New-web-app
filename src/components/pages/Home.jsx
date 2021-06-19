import React from "react"
import { Redirect, Route, Switch } from 'react-router-dom';
import Horizontal from "./Horizontal"
import Vertical from "./Vertical"
import Navigation from "../Navigation"
import Toggler from "../Toggler"
import FeedBack from "../FeedBack"
import FeedBackForm from "./FeedBackForm";
const Home = () => {
    return (
        <>
            <div class="container-wrapper">
                <div className="d-flex">
                    <div className="wrapper">
                        <div className="mt-4">
                            <Navigation />
                            <Toggler />
                            <FeedBack />
                        </div>
                    </div>
                    <div>
                       
                    <Switch>
                      <Route exact path="/vertical" component={Vertical} />
                      <Route exact path="/horizontal" component={Horizontal} />
                    </Switch>
                    <Switch>
                    <Route exact path="/form" component={FeedBackForm} />
                    </Switch>
                   </div>
                </div>
            </div>
        </>
    );
};

export default Home;