import React from 'react';

import './Jugador1.style.css';


const Jugador1 = (props) => {
    return (
        <div className="pr-container">
            <table>
                <tr> 
                {props.jugador.edad <=25
                   
                ?//if = true
                <td> <div className="rt-container"> <spam className="pr-stock">{props.jugador.nombre}</spam></div></td>
                
                :// else
                <td><div className="rt-container">{props.jugador.nombre}</div></td>
                }
                <td><div className="rt-container">{'   '}   {props.jugador.posicion}</div></td>
                <td><div className="rt-container">{'   '}   {props.jugador.edad}</div></td>
                </tr>
            </table>
        </div>
    );
}

export default Jugador1;