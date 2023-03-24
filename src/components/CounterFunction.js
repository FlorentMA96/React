import React from "react";
import { useState, useEffect } from "react";

export default function CounterFunction() {

    const [counter, setCounter ] = useState(0)

    useEffect(() => setCounter(1000), []) 

    const increment = () => setCounter(counter + 1);

    function decrement() {
        setCounter(counter - 1);
    }

    return (
        <div>
            <h2 className="inner">
                <button className="margin-1 btn btn-secondary" type="button" onClick={() => decrement()}>-</button>
                {counter}
                <button className="margin-1 btn btn-secondary" type="button" onClick={increment}>+</button>
            </h2>
        </div>
    );
}

