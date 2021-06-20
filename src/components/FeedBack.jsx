import React from "react"
import { NavLink } from "react-router-dom";

const FeedBack = () => {
    return (
        <>

            <div className="feedback-card">
                <div>
                    <h3 className="heading-t">Have a Feedback?</h3>
                    <div className="feedbacktbn">
                    <NavLink  className="feedback-btn" activeClassName="toggle-active"to="/form"exact>
                        We're Listening!
                    </NavLink>
                    </div>
                   

                </div>
            </div>
        </>
    );
};

export default FeedBack;