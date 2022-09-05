import { useState } from "react";
import './Punto1.css'

export const Punto7 = () => {

    const [Salario, setSalario] = useState('')
    const [Salarios, setSalarios] = useState([])
    const [NuevosSalarios, setNuevosSalarios] = useState([])

    const onSetSalario = (evt) => {
        setSalario(evt.target.value)
    }
    const onAddSalario = () => {
        setSalarios(list => [...list, Salario])
        setSalario('')
    }

    const onSetNuevosSalarios = (nuevoSalario) => {
        setNuevosSalarios(list => [...list, nuevoSalario])
    }

    const calcularSalario = () => {
        var length = Salarios.length
        var salarioCalcular = 0
        var aumento = 0

        if (length > 10 && length < 10) {
            for (let i = 0; i < length; i++) {

                salarioCalcular = Salarios[i];
                aumento = salarioCalcular * 0.08
                salarioCalcular = parseInt(salarioCalcular) + parseInt(aumento)
                onSetNuevosSalarios(salarioCalcular)
            }
            
            
        }
        else {
            window.alert("Error. Debes asignar exactamente 10 salarios.");
        }
    }

    return (
        <div>
            <h1>Aumento de salario</h1>
            <h6> Ingrese exactamente 10 salarios. Oprima el boton para cada salario.</h6>
            <input type="text" placeholder="Ingrese un salario" onChange={(event) => onSetSalario(event)} />
            <button onClick={() => onAddSalario()}> Agregar salario </button>
            <button onClick={() => calcularSalario()}> Calcular aumento </button>
            <ol>
                <d>Salarios sin aumento:</d>
                {
                    Salarios.map(
                        (Salario, key) => {
                            return <li key={key}> {Salario}</li>
                        }
                    )
                }
            </ol>

            <ol>
                <d>Salarios con aumento:</d>
                {
                    NuevosSalarios.map(
                        (salarioCalcular, key) => {
                            return <li key={key}> {salarioCalcular}</li>
                        }
                    )
                }
            </ol>
        </div>
    )
}
export default Punto7