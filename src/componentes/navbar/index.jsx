
import Cartwidget from '../cartwidget';
import './index.css';
import icon_menu from '../../assets/icon_menu.svg';
import logoUno from '../../assets/logoUno.jpeg';



const Navbar = () => {
    return (
        <header>
            <nav>
                <img src={icon_menu} alt="" className='menu'/>

                <div className='navbar-left'>
                    <img src={logoUno} alt="" className='logo'/>

                    <ul>
                        <li>
                            <a href="/">Productos</a>
                        </li>
                        <li>
                            <a href="/">Guitarras</a>
                        </li>
                        <li>
                            <a href="/">Pianos</a>
                        </li>
                        <li>
                            <a href="/">Saxofones</a>
                        </li>
                        <li>
                            <a href="/">Armónicas</a>
                        </li>                    <li>
                            <a href="/">Púas</a>
                        </li>
                    </ul>
                </div>

                <div className='navbar-right'>
                    <ul>
                        <li className='navbar-usuario'>NombreUsuario</li>
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