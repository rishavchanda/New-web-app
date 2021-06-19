import React from "react"
import { NavLink } from "react-router-dom";

const FeedBack = () => {
    return (
        <>

            <div className="feedback-card">
                <div>
                    <h3 className="heading-t">Have a Feedback?</h3>
                    <NavLink style={{textDecoration: "none"}} activeClassName="toggle-active"to="/form"exact>
                        <div className="feedback-btn">
                            <h5 className="heading-t mt-1">We're Listening!</h5>
                        </div>
                    </NavLink>

                </div>
            </div>
        </>
    );
};

export default FeedBack;