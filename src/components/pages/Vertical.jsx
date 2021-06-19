import React from "react";
import VerticalCards from "../VerticalCards"

const Vertical = ()=>{
    return(
        <> 
        <div className="card-wrapper">
            <VerticalCards/>
            <VerticalCards/>
            <VerticalCards/>
            <VerticalCards/>
            <VerticalCards/>
            <VerticalCards/>
        </div>
        </>
    );
};

export default Vertical;