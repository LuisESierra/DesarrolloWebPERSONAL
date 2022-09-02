import { useState } from "react";

const SecondApp = ({ value }) => {
    const [counter, setCounter] = useState(value);

    const handleAdd = () => {
        setCounter(counter + 1)
    }
    const handleSubstract = () => {
        setCounter(counter - 1)
    }
    const handleReset = () => {
        setCounter(value)
    }

    return (
        <>

            <h1> Counter </h1>
            <span> {counter} </span>
            <button onClick={() => handleSubstract()}> Restar 1 </button>
            <button onClick={() => handleAdd()}> Sumar 1</button>
            <button onClick={() => handleReset()}> Resetear a {value} </button>

        </>
    )

}

export default SecondApp;