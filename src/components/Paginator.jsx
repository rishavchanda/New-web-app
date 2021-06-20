import React, {useState,useEffect} from "react"

const Pagination = ({showPerPage}) => {
    const [counter, setCounter] = useState(1);

    useEffect(()=>{
      const value = showPerPage * counter;
      
    },[counter])
    return(
         <div className="d-flex justify-content-between">
             <button className="btn btn-primary" onClick={() => setCounter(counter -1)}>Previous</button>
             <button className="btn btn-primary" onClick={() => setCounter(counter +1)}>Next</button>

         </div>
    );
};

export default Pagination;