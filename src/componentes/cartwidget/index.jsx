import { Link } from "react-router-dom";
import './index.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cartwidget = () => {

    const { cantidadCarrito } = useContext(CartContext);

    return (
        <div className="shopping_cart">
            <Link className="letra-carrito" to="/carrito">
                Carrito
                {cantidadCarrito() > 0 && <div>{cantidadCarrito()}</div>}
            </Link>
        </div>


    )
}

export default Cartwidget

