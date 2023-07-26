import Navbar from "./componentes/navbar";
import Itemlistcontainer from "./componentes/itemlistcontainer";
import ItemDetailContainer from "./componentes/itemDetailContainer";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Footer from "./componentes/footer";
import './App.css';

function App() {


  return (

    <div className="App">
    <BrowserRouter>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Itemlistcontainer greeting='Nuestros Productos'/>}/>
        <Route path='/category/:categoryId' element={<Itemlistcontainer/>}/>
        <Route path='/item/:id' element={<ItemDetailContainer/>}/>
      </Routes> 
      <Footer/> 
     

    </BrowserRouter>

    </div>
    )
}

export default App
