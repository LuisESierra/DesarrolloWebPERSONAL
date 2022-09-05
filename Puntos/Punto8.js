import { useState } from "react";
import './Punto1.css'

export const Punto8 = () => {
    const [Dividendo, setDividendo] = useState("")
    const [Numeros, setNumeros] = useState([])
    const [NumerosDiv, setNumerosDiv] = useState([])

    const onInputDividendo = (evt) => {
        setDividendo(evt.target.value)
    }

    const onSetNumeros = (numeros) => {

        setNumeros(list => [...list, numeros])
    }

    const onSetNumerosDiv = (numerosD) => {

        setNumerosDiv(list => [...list, numerosD])
    }

    const generarAleatorio = () => {
        setNumeros([])
        var random
        for (let i = 0; i < 10; i++) {
            random = Math.floor(Math.random() * 10)
            onSetNumeros(random)
        }
    }

    const dividirNumeros = () => {
        setNumerosDiv([])
        var div = Dividendo
        var resultado = 0
        var almacenar = 0

        if (div > 0) {
            for (let i = 0; i < 10; i++) {
                almacenar = Numeros[i]
                resultado = (almacenar / div).toFixed(3)
                onSetNumerosDiv(resultado)

            }
        }
        else {
            window.alert("Error. El dividendo debe ser mayor a 0.");
        }
    }


return (
    <div>
        <h1>Divisor de numeros aleatorios</h1>
        <h6>Oprima el boton para generar 10 numeros aleatorios. Escriba el dividendo. Mire la magia.</h6>
        <input type="text" placeholder="Inserte el dividendo" onChange={(event) => onInputDividendo(event)}></input>
        <button onClick={() => generarAleatorio()}>Generar números</button>
        <button onClick={() => dividirNumeros()}>Dividir numeros</button>


        <ol>
            <d>Numeros Generados:</d>
            {
                Numeros.map(
                    (numeros, key) => {
                        return <li key={key}> {numeros}</li>
                    }
                )
            }
        </ol>
        <ol>
            <d>Numeros Divididos:</d>
            {
                NumerosDiv.map(
                    (resultado, key) => {
                        return <li key={key}> {resultado}</li>
                    }
                )
            }
        </ol>

    </div>


)
}
export default Punto8
