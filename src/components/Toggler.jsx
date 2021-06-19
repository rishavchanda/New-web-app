import React from "react"
import ver from "../images/ver.png"
import toggle from "../images/toggle.png"
import Vector from "../images/Vector.png"
import { NavLink } from "react-router-dom";
const Toggler = () => {
    return (
        <>  
            <div className="toggle-card">
                <div>
                    <h3 className="heading-t">View Toggle</h3>
                </div>
                <div className=" toggle-bar">
                    <NavLink className="toggle-button-l" activeClassName="active"to="/vertical"exact>
                        <div style={{ position: "relative" }}>
                            <img style={{ position: "absolute", top: "5px", left: "2px" }} src={Vector} />
                            <img src={ver} style={{ position: "relative" }} />
                        </div>
                    </NavLink>
                    <NavLink className="toggle-button-r" activeClassName="active"to="/horizontal"exact>
                        <img src={toggle} />
                    </NavLink>
                </div>
            </div>
        </>
    );
};

export default Toggler;