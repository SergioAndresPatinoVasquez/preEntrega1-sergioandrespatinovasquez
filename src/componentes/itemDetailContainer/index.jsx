import React, { useEffect, useState } from 'react'
import { getItem } from '../../mock/data'
import ItemDetail from '../itemDetail'
import { useParams } from 'react-router-dom'
import PacmanLoader from "react-spinners/PacmanLoader";

const override = {
  position: 'absolute',
  transform: 'translate3d(-50%, -50%, 0)',
  left: '50%',
  right: '50%',
  top: '50%',
  bottom: '50%',

};


const ItemDetailContainer = () => {
    const [producto, setProducto] = useState([])
    const [loading, setLoading] = useState(false)
    const { id } = useParams()

    useEffect (()=>{
      setLoading(true)
        getItem(id)
        .then((res)=> setProducto(res))
        .catch((error)=> console.log(error))
        .finally(()=> setLoading(false))
    },[])


  return (
    <>
      { loading ?
        <PacmanLoader color={'#63174A'} loading={loading} cssOverride={override} size={40} />
        :
    
        <ItemDetail producto={producto}/>
      }
    </>
  )
}

export default ItemDetailContainer