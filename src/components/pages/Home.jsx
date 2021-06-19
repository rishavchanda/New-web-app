import React from "react"
import VerticalCard from "../VerticalCards"
import HorizontalCard from "../HorizontalCard"
const Home=()=>{
    return(
       <>
       <div class="container">

           <div class="card-wrapper">
           <VerticalCard/>
           <VerticalCard/>
           <VerticalCard/>

           </div>
           <div class="card-wrapper-hor">
           <HorizontalCard/>
           <HorizontalCard/>
           <HorizontalCard/>
           <HorizontalCard/>
           </div>
       </div>
       </>
    );
};

export default Home;