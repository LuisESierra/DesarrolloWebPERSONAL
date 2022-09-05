import { useState } from "react";
import './Punto1.css'

export const Punto2 = () => {

    const [Duracion, setDuracion] = useState("")
    const [Precio, setPrecio] = useState("");

    const onInputChange = (event) => {
        setDuracion(event.target.value)
    }
    const calcularPrecio = () => {

        var duracion = Duracion
        var total = 0
        var extra = 0

        if (duracion <= 3) {
            total = 100
        }
        if (duracion > 3) {
            extra = (duracion - 3) * 50
            total = 100 + extra
        }
        setPrecio(total)
    }

    return (
        <div>
            <h1>Calculadora de llamadas telefonicas</h1>
            <h6>Ingrese la duracion de una llamada en minutos</h6>
            <input type="text" placeholder="Ingrese la duracion" onChange={(event) => onInputChange(event)}></input>
            <center>
                <button onClick={() => calcularPrecio()}>Calcular precio</button>
            </center>   

            <ol>
                <span> El total es: ${Precio}</span>
            </ol>

        </div>
    )
}
export default Punto2