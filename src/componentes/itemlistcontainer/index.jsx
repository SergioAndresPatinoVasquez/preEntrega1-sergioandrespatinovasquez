import { useEffect, useState } from 'react';
import { getProducto } from '../../mock/data';
import './index.css';
import ItemList from '../itemList';
import PacmanLoader from "react-spinners/PacmanLoader";
import { useParams } from 'react-router-dom';




const override = {
    position: 'absolute',
    transform: 'translate3d(-50%, -50%, 0)',
    left: '50%',
    right: '50%',
    top: '50%',
    bottom: '50%',

  };


const Itemlistcontainer = (prop) =>{
    const [productos, setProductos]= useState([])
    const [loading, setLoading] = useState(false)
    const {categoryId} = useParams()


    useEffect(()=>{

        setLoading(true)

        getProducto()
        .then((res) => {
            if(categoryId){
                setProductos(res.filter((item)=>item.category === categoryId))
            }else{
                setProductos(res)
            }
        })
        .finally(()=> setLoading(false))
    },[categoryId])


    return(
        <menu>
            <section>

                { loading
                    ?

                    <PacmanLoader color={'#63174A'} loading={loading}  cssOverride={override} size={40}/>

                    :
                    <div>   
                                
                    <h1>{prop.greeting}</h1>
                    <ItemList productos={productos}/>                  
                   

                    </div>
                }
            </section>
        </menu>
    )
}

export default Itemlistcontainer;