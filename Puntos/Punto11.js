import { useState } from "react";
import './Punto1.css'

export const Punto11 = () => {
    const [Nombre, setNombre] = useState('')
    const [Nota, setNota] = useState('')
    const [Notas, setNotas] = useState([])
    const [Resultado, setResultado] = useState('')

    const HandleReset = () => {
        setNotas(list => [])
    }
    const onSetNombre = (evt) => {
        setNombre(evt.target.value)
    }

    const onSetNotas = (evt) => {
        setNota(evt.target.value)
    }

    const onAddNotas = () => {
        if (Notas.length < 3) {
            setNotas(list => [...list, Nota])
        } else {
            onSetResultado()
        }
    }

    const onSetResultado = () => {
        var total = Notas.length
        var almacenar = 0
        var suma = 0
        var avg = 0

        for (let i = 0; i < total; i++) {

            almacenar = Notas[i];
            suma += parseInt(almacenar)

        }
        avg = suma / total
        if (avg >= 3) {
            setResultado(", ¡Pasas la materia!")
        }
        else {
            setResultado(", No pasas la materia.")
        }

    }

    return (
        <div>
            <h1> Calculadora de parciales </h1>
            <h6> Agregue su nombre y 3 notas para saber si paso su materia. Seleccione una cuarta vez el boton para calcular.</h6>
            <input type="text" placeholder="Ingrese su nombre" onChange={(event) => onSetNombre(event)}></input>
            <input type="text" placeholder="Ingrese las notas" onChange={(event) => onSetNotas(event)}></input>
            <button onClick={() => onAddNotas()} >Calcular nota</button>
            <button onClick={() => HandleReset()} >Borrar notas</button>

            <ol>
                <d>Notas asignadas:</d>
                {
                    Notas.map(
                        (nota, key) => {
                            return <li key={key}> {nota}</li>
                        }
                    )
                }
            </ol>
            <ol>
                <span>{Nombre}{Resultado}</span>
            </ol>
        </div>

    )
}
export default Punto11
