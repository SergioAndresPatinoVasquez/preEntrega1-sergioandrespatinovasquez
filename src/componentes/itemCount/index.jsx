import React, { useState } from "react";

const ItemCount = ({stock, onAdd}) =>{

const [count, setCount] = useState(1)

const sumar = () =>{
    if(count < stock){
        setCount(count+1)
    }
}
const restar = () =>{
    if(count>1){
        setCount(count-1)
    }
}
    return(

        <div className="botones">
            <button className="restar" onClick={restar}>-</button>
            <span>{count}</span>
            <button className="sumar" onClick={sumar}>+</button>
            <button className="comprar" onClick={()=>onAdd(count)}>Comprar</button>
        </div>
    )
}
export default ItemCount