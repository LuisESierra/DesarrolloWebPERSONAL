import { useState } from "react";
import './Punto1.css'

export const Punto4 = () => {

    const [NumeroUno, setNumeroUno] = useState("");
    const [NumeroDos, setNumeroDos] = useState("");
    const [NumeroTres, setNumeroTres] = useState("");
    const [Igual, setIgual] = useState("");


    const onInputChangeUno = (event) => {
        setNumeroUno(event.target.value)
    }
    const onInputChangeDos = (event) => {
        setNumeroDos(event.target.value)
    }
    const onInputChangeTres = (event) => {
        setNumeroTres(event.target.value)
    }

    const calcularIgual = () => {
        var uno = NumeroUno
        var dos = NumeroDos
        var tres = NumeroTres
        var resultado = 0

        if (uno === dos || uno === tres) {
            resultado = 2
            if (dos === tres) {
                resultado = 3
            }

        } else if (dos === tres) {
            resultado = 2
        }

        setIgual(resultado)

    }
    return (
        <div>
            <h1>Calculadora de numeros similares</h1>
            <h6> Ingrese 3 numeros. El sistema le dira cuantos son similares.</h6>
            <input type="text" placeholder="Ingrese el numero uno" onChange={(event) => onInputChangeUno(event)}></input>
            <input type="text" placeholder="Ingrese el numero dos" onChange={(event) => onInputChangeDos(event)}></input>
            <input type="text" placeholder="Ingrese el numero tres" onChange={(event) => onInputChangeTres(event)}></input>
            <center>
                <button onClick={() => calcularIgual()}>Calcular similar</button>
            </center>
            <div> La cantidad de numeros similares son: {Igual}</div>

        </div>

    );
}
export default Punto4;