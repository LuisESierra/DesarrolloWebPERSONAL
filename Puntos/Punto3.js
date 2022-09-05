import { useState } from "react";
import './Punto1.css'

export const Punto3 = () => {

    const [Nombre, setNombre] = useState("")
    const [Tiempo, setTiempo] = useState("");
    const [Saludo, setSaludo] = useState("");

    const onInputChangeName = (event) => {
        setNombre(event.target.value)
    }

    const onInputChangeTime = (event) => {
        setTiempo(event.target.value)
    }


    const calcularTiempo = () => {

        var tiempo = Tiempo
        var saludito
        var nombrecito = Nombre

        if (tiempo >= 0 && tiempo <= 12) {
            saludito = "¡Buenos dias " + nombrecito + "!"
        }
        if (tiempo > 12 && tiempo <= 18) {
            saludito = "¡Buenas tardes " + nombrecito + "!"
        }
        if (tiempo > 18 && tiempo <= 24) {
            saludito = "¡Buenas noches " + nombrecito + "!"
        }
        if (tiempo > 24) {
            saludito = nombrecito + ", te pasaste de las 24 horas."
        }
        setSaludo(saludito)
    }

    return (
        <div>
            <h1> Saludador </h1>
            <h6> El sistema lo saludara basado en el sistema de 24 horas.</h6>
            <center>
                <input type="text" placeholder="Ingrese su nombre" onChange={(event) => onInputChangeName(event)}></input>
            </center>
            <center>
                <input type="text" placeholder="Ingrese la hora" onChange={(event) => onInputChangeTime(event)}></input>
            </center>
            <button onClick={() => calcularTiempo()}>Saludar Usuario</button>
            <div>
                <span>{Saludo}</span>
            </div>

        </div>
    )
}
export default Punto3