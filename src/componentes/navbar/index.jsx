
import Cartwidget from '../cartwidget';
import './index.css';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';



const Navbar = () => {
        const[menuOpen, setMenuOpen] = useState(false);

    return (
        
        <nav>
            <Link className='title' to="/">TiendaMusical</Link>
            <div className='menu' onClick={()=>{
                setMenuOpen(!menuOpen);
            }}>
                    <span></span>
                    <span></span>
                    <span></span>
            </div>
            <ul className={menuOpen ? "open": ""}>
                <li><NavLink to="/">Home</NavLink></li>
                <li> <NavLink to="/category/baterias">Baterías</NavLink></li>
                <li> <NavLink to="/category/guitarras">Guitarras</NavLink></li>
                <li><NavLink to="/category/pianos">Pianos</NavLink></li>
                <li><NavLink to="/category/saxofones">Saxofones</NavLink></li>
                <li> <Cartwidget className='carrito' /> </li>
            </ul>

        </nav>


        // <header>
            
        //     <nav>
                
        //     <img src={icon_menu} alt="" className='menu' />

        //         <div className='navbar-left'>
        //             <NavLink to="/">
        //                 <img src='https://i.postimg.cc/dV75Syp5/logoUno.jpg' alt="" className='logo' />
        //             </NavLink>
        //             <ul>
        //                 <li>
        //                     <NavLink to="/">Home</NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to="/category/guitarras">Guitarras</NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to="/category/pianos">Pianos</NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to="/category/saxofones">Saxofones</NavLink>
        //                 </li>
        //                 <li>
        //                     <NavLink to="/category/baterias">Baterías</NavLink>
        //                 </li>
                        
        //             </ul>
        //         </div>

        //         <div className='navbar-right'>
        //             <ul>

        //                 <li>
        //                     <Cartwidget className='carrito' />
        //                 </li>
        //             </ul>
        //         </div>
        //     </nav>
        // </header>
    )

}
export default Navbar;