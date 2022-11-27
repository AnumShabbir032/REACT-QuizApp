import React, { useEffect, useState } from "react";



function Timer(setTimeOut, indexNumber) {

    const [counter, setCounter] = useState(10);

    useEffect(() => {
        if (counter === 0) return setTimeOut(true);
        const interval = setInterval(() => {
            setCounter((prev) => prev - 1);
        }, 1000)
        return () => clearInterval(interval);
    }, [counter,setTimeOut]);

    useEffect(() => {
        setCounter(10);
    }, [indexNumber])


    return (
        <div>
        </div>
    );
}

export default Timer;