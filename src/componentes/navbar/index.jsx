
import Cartwidget from '../cartwidget';
import './index.css';
import icon_menu from '../../assets/icon_menu.svg';
import { NavLink } from 'react-router-dom';



const Navbar = () => {
    return (
        <header>
            <nav>
                <img src={icon_menu} alt="" className='menu'/>

                <div className='navbar-left'>
                    <NavLink to="/">
                        <img src='https://i.postimg.cc/dV75Syp5/logoUno.jpg' alt="" className='logo'/>
                    </NavLink>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/guitarras">Guitarras</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/pianos">Pianos</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/saxofones">Saxofones</NavLink>
                        </li>
                        <li>
                            <NavLink to="/category/baterias">Baterías</NavLink>
                        </li>     
                        <li>
                            <NavLink to="/contacto">Contacto</NavLink>
                        </li>               
                    </ul>
                </div>

                <div className='navbar-right'>
                    <ul>
                        
                        <li>
                            <Cartwidget className='carrito'/>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )

}
export default Navbar;