import { useState } from "react";
import './Punto1.css'

export const Punto6 = () => {

    const [Lista, setLista] = useState([]);
    const [Numero, setNumero] = useState('');

    const onSetLista = (inpar) => {
        setLista(list => [...list, inpar])
    }

    const onSetNumero = (evt) => {
        setNumero(evt.target.value)
        setLista(list => [])

    }

    const numerosImpares = () => {
  
        var num = Numero

        for (var i = 1; i <= num; i++) {

            if (i % 2 !== 0) {
                console.log(i);
                onSetLista(i)
            }
        }
    }

    return (
        <div>
            <h1>Generador de impares</h1>
            <h6> Ingrese un numero. El sistema generara todos los numeros impares menores a ese numero.</h6>
            <input type="text" placeholder="Ingrese el numero" onChange={(event) => onSetNumero(event)}></input>
            <button onClick={() => numerosImpares()} >Calcular impares</button>
            <ol>
            {
                    Lista.map(
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
export default Punto6;
