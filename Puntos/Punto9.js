import { useState } from "react";
import './Punto1.css'

export const Punto9 = () => {

    const [Rows, setRows] = useState("")
    const [Columns, setColumns] = useState("")

    const onInputRows = (event) => {
        setRows(event.target.value.replace(/\D/g, ""))
    }

    const onInputColumns = (event) => {
        setColumns(event.target.value.replace(/\D/g, ""))
    }

    const generateTable = () => {

        let body = document.body
        let MyTable = document.createElement('Table')
        let fila = Rows
        let columna = Columns


        for (let i = 0; i < fila; i++) {

            let x = MyTable.insertRow()

            for (let j = 0; j < columna; j++) {

                let y = x.insertCell()

                y.appendChild(document.createTextNode(`${i},${j}`));

                y.style.border = '1px solid black'
                MyTable.style.width = '200px';
            }
        }
        body.appendChild(MyTable)
    }

    return (
        <div>
            <h1> Creador de matrices </h1>
            <h6> Agregue la cantidad de columnas y filas para generar una tabla.</h6>
            <input type="text" placeholder="Ingrese las filas" onChange={(event) => onInputRows(event)}></input>
            <input type="text" placeholder="Ingrese las columnas" onChange={(event) => onInputColumns(event)}></input>
            <button onClick={() => generateTable()}>Generar tabla</button>

        </div>
    )
}
export default Punto9