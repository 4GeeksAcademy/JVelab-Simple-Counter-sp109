import React from "react";
import Clock from "./Clock";

const Counter = (props) => {
    return (
        <div className="counter text-center border border-light p-3 bg-dark">
            <h1 className=" display-1 fw-bold m-auto">{props.seconds}</h1>
        </div>
    )
}

export default Counter