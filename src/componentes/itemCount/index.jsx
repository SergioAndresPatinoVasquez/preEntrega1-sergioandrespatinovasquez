import React, { useState } from "react";

const ItemCount = ({ count, sumar, restar, handleAgregar }) => {



    return (

        <div className="botones">
            <button className="restar" onClick={restar}>-</button>
            <span>{count}</span>
            <button className="sumar" onClick={sumar}>+</button>
            <button className="comprar" onClick={handleAgregar}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount