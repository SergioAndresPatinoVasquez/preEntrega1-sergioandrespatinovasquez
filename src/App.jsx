import Navbar from "./componentes/navbar";
import Itemlistcontainer from "./componentes/itemlistcontainer";
import ItemDetailContainer from "./componentes/itemDetailContainer";
import Carrito from "./componentes/carrito/carrito";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from "./componentes/footer";
import './App.css';

import { CartProvider } from "./context/CartContext";
import React, { useEffect } from "react";
// import { addDoc, collection } from "firebase/firestore";
// import { db } from "./services/firebase";
// import { productos } from "./mock/data";
import Checkout from "./componentes/Checkout/Checkout";



function App() {

  // useEffect(()=>{

  //   const colection = collection(db, 'productos')
  //   productos.map((item)=> addDoc(colection, item))

  // },[])

  return (

    <div className="App">
      <CartProvider>
        <BrowserRouter>

          <Navbar />
          <Routes>
            <Route path='/' element={<Itemlistcontainer />} />
            <Route path='/category/:categoryId' element={<Itemlistcontainer />} />
            <Route path='/item/:id' element={<ItemDetailContainer />} />
            <Route path='/carrito' element={<Carrito />} />
            <Route path="/checkout" element={<Checkout />} />
          </Routes>
          <Footer />

        </BrowserRouter>
      </CartProvider>
    </div>
  )
}

export default App
