import { useState } from "react";
import './Punto1.css'

export const Punto1 = () => {

    const [Hora, setHora] = useState("");
    const [Minuta, setMinutos] = useState("");
    const [Segundo, setSegundos] = useState("");

    const onInputChange = (event) => {
        setSegundos(event.target.value)
    }

    const calcularHora = () => {

        var hours = Math.floor(Segundo / (60 * 60))

        var divisorminutes = Segundo % (60 * 60)
        var minutes = Math.floor(divisorminutes / 60)

        var divisorsegundos = divisorminutes % 60;
        var seconds = Math.ceil(divisorsegundos);

        setHora(hours)
        setMinutos(minutes)
        setSegundos(seconds)
    }
    return (
        <div class="Appcss">   
            <h1> Calculadora de tiempo </h1>
            <h6> Ingrese un tiempo en segundos.</h6>
            <input type="text" placeholder="Ingrese los segundos" onChange={(event) => onInputChange(event)} />
            <center>
                <button onClick={() => calcularHora()}>Calcular tiempo</button>
            </center>

            <center>
                <ol>La hora es: {Hora}</ol>
                <ol>Los minutos son: {Minuta}</ol>
                <ol>Los segundos son: {Segundo}</ol>
            </center>

        </div>

    );
}
export default Punto1;