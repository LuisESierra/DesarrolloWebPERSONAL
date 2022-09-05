import { useState } from "react";
import './Punto1.css'

export const Punto5 = () => {

    const [Numeros, setNumeros] = useState([]);
    const [Numero, setNumero] = useState("");

    const onAddNumero = (event) => {
        setNumeros(list => [...list, Numero])
        setNumero('')
        ordenarLista()
    }

    const onSetNumero = (evt) => {
        setNumero(evt.target.value)
        
    }
    const ordenarLista = () => {
        Numeros.sort()         
    }

    return (
        <div>
            <h1>Ordenador de numeros</h1>
            <h6>Ingrese varios numeros. El sistema los ordenara de menor a mayor.</h6>
            <input type="text" placeholder="Ingrese su numero" onChange={(event) => onSetNumero(event)}></input>
            <button onClick={() => onAddNumero()}>Agregar numero</button>
            <ol>
                {
                    Numeros.map(
                        (numero, key) =>
                        {
                            return <li key = {key}> {numero}</li>
                        }
                    )
                }
            </ol>
        </div>

    );
}
export default Punto5;