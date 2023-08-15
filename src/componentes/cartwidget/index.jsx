import { Link } from "react-router-dom";
import carrito from "../../assets/carrito.jpeg";
import './index.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cartwidget = () => {

 const {cantidadCarrito} = useContext(CartContext);

    return(
        <div className="shopping_cart">
            <Link to="/carrito">
            <img src={carrito} alt="" className="carrito"/>
            {cantidadCarrito()>0 && <div>{cantidadCarrito()}</div>}
            </Link>
        </div>


    )
}

export default Cartwidget

