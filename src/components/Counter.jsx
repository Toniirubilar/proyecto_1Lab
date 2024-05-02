import { useState } from "react";

export default function Counter(){
    const [contador, setContador] = useState(0);

    function suma(){
        setContador(contador+1)
    }
    
    const resta = () => {
        setContador(contador-1)
    }

    const reset = () => {
        setContador(0)
    }

    return (
        <>
            <p>Contador: {contador}</p>
            <button onClick={suma}>Suma</button>
            <button onClick={resta}>Resta</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}