import React, { useState } from 'react';
import Equipos from '../Equipos/Equipos.com';
import Jugador1 from '../Jugador/Jugador1.com';
import './Inscripcion.style.css';
import FilterableProductTable from '../FilterableProductTable/FilterableProductTable.com'

const Inscripcion = (props) => {

  const [equipo,setequipo]= useState('');
  const [nombre,setNombre]= useState('');
  const [posicion,setposicion]= useState('');
  const [edad,setedad]= useState('');

  const addJug = (event)=>{
    event.preventDefault();
      console.log('equipo' + equipo);
      console.log('posicion'+ posicion);
      console.log('nombre' + nombre);
      console.log('edad'+ edad);
  }

    return (

      <div classname="pt-container">
        <div>
        {props.Liga.map((equipo,index)=>{
          return (
            <React.Fragment key={equipo.Id}>
              <Equipos NombreEquipo={equipo.name} />
              {equipo.jugador.map((jugador, index2)=>{
                  return(
                      
                      <Jugador1 
                      key={jugador.Id} 
                      jugador={jugador} />
                  );
                })}
            </React.Fragment>
            );
        })}
        
        </div>
        <div className="formulario">
          <form>
            <table>
                  <tr>
                    <td>EQUIPO</td>
                    <td>NOMBRE</td>
                    <td>POSICION</td>
                  </tr>
                  <tr>
                    <td>
                    <select
                        value={equipo}
                        onChange={(event)=>{
                        setequipo(event.target.value);
                        }}
                       > 
                      <option value="1">AMERICA</option>
                      <option value="2">RIVER PLATE</option>
                      <option value="3">BARCELONA</option>
                    </select>
                    </td>
                    <td>
                      <input 
                      type="text" 
                      value={nombre}
                      onChange={(event)=>{
                        setNombre(event.target.value);
                      }}/>
                    </td>
                    <td>
                    <select
                        value={posicion}
                        onChange={(event)=>{
                        setposicion(event.target.value);
                        }}
                        >
                        <option value="ARQUERO">ARQUERO</option>
                        <option value="DEFENSA">DEFENSA</option>
                        <option value="VOLANTE">VOLANTE</option>
                        <option value="DELANTERO">DELANTERO</option>
                        </select>
                        
                    </td>
                 </tr>
            <tr>EDAD</tr>
            <tr>
              <td><input
                type="number" 
                value={edad}
                onChange={(event)=>{
                setedad(event.target.value);
                        }}
              /></td>
              
              <td><button onClick={addJug}>
                AÑADIR ESTUDIANTE</button></td>

            </tr>
            </table>
          </form>
        </div>
      </div>

    );
}

export default Inscripcion;