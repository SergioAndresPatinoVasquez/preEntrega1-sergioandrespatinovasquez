import carrito from "../../assets/carrito.jpeg";
import './index.css';

const Cartwidget = () => {

    return(
        <div className="shopping_cart">
            <img src={carrito} alt="" className="carrito"/>
            <div>18</div>
        </div>


    )
}

export default Cartwidget

