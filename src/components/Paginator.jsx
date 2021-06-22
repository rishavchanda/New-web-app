import React, { useState, useEffect } from "react"

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);
  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
    setNumberOfButtons(Math.ceil(total/6));        
  }, [counter])
  const [numberOfButtons, setNumberOfButtons] = useState();
  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1)
      } else {
        setCounter(counter - 1)
      }
    } else if (type === "next") {
      if (numberOfButtons === counter) {
        setCounter(counter)
      } else {
        setCounter(counter + 1)
      }

    }
  };
  return (
    <div className="d-flex justify-content-center">
      <button className="btn buttons-background" onClick={() => onButtonClick("prev")}>&#8592;</button>
      <button className="btn buttons-background " onClick={() => onButtonClick("next")}>&#8594;</button>

    </div>
  );
};

export default Pagination;