import React from 'react';
import ProductTable from '../Inscripcion/Inscripcion.com';
import './FilterableProductTable.style.css';


const FilterableProductTable = (props) => {
    return (
    <div className="fpt-container" >
        
     
     <ProductTable Liga={props.Liga}/>

    </div>
    );
}

export default FilterableProductTable;