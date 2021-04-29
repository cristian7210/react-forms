import React from 'react';
import FilterableProductTable from './componentes/FilterableProductTable/FilterableProductTable.com';



const Productopagba = () => {

  let Liga=[
      {
        Id:'1',
        name:'AMERICA',
        jugador:[
          {
              id:'a1',
              nombre:"JULIAN AGUILAR",
              edad:24,
              posicion:"DELANTERO",
          },
          {
              id:'a2',
              nombre:"JOSE CALVO",
              edad:21,
              posicion:"ARQUERO",
          },
          {
            id:'a3',
            nombre:"RAMON GUZMAN",
            edad:35,
            posicion:"VOLANTE",
        },
        {
            id:'a4',
            nombre:"MIGUEL VELEZ",
            edad:39,
            posicion:"DEFENSA",
        },
        {
          id:'a5',
          nombre:"ABEL LOPEZ",
           edad:0,
          posicion:"DELANTERO",
      },
      ]
      },
      {
        Id:'2',
        name:"RIVER PLATE",
        jugador:[
            {
              id:'rp1',
              nombre:"MANUEL GARCIA",
             edad:43,
              posicion:"ARQUERO",
            },
            {
              id:'rp2',
              nombre:"GUSTAVO ARANGO",
               edad:47,
              posicion:"DEFENSA",
            },
            {
              id:'rp3',
              nombre:"JAVIER SIMON",
              edad:19,
              posicion:"DELANTERO",
            },
            {
              id:'rp4',
              nombre:"LUIS MORALES",
              edad:27,
              posicion:"DELANTERO",
            },
            {
              id:'rp5',
              nombre:"CAMILO GARCIA",
             edad:34,
              posicion:"DEFENSA",
            },
            {
              id:'rp6',
              nombre:"SAMIR LOPEZ",
             edad:30,
              posicion:"VOLANTE",
            },
          ]
        },
      {
        Id:"3",
        name:"BARCELONA",
        jugador:[
        
          {
            id:'b1',
            nombre:"LEO RESTREPO",
           edad:23,
            posicion:"DELANTERO",
          },
          {
            id:'b2',
            nombre:"CRISTIAN ARENAS",
           edad:24,
            posicion:"VOLANTE",
          },
          {
            id:'b3',
            nombre:"LEO CIFUENTES",
           edad:39,
            posicion:"ARQUERO",
          },
          {
            id:'b4',
            nombre:"CRISTIAN ARENAS",
           edad:42,
            posicion:"DELANTERO",
          },
          
        ]
      },
      
    ]


    return (
      <>  
      <FilterableProductTable Liga={Liga}/>
      
      </>
      
    )
}

export default Productopagba;