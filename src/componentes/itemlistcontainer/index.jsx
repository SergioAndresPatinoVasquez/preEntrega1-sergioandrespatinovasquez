import { useEffect, useState } from 'react';
import { getProducto } from '../../mock/data';
import './index.css';
import ItemList from '../itemList';
import PacmanLoader from "react-spinners/PacmanLoader";
import { useParams } from 'react-router-dom';
import { toCapital } from '../../mock/toCapital';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../services/firebase';




const override = {
    position: 'absolute',
    transform: 'translate3d(-50%, -50%, 0)',
    left: '50%',
    right: '50%',
    top: '50%',
    bottom: '50%',

};


const Itemlistcontainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [titulo, setTitulo] = useState("Productos");
    const { categoryId } = useParams();


    // useEffect(()=>{

    //     setLoading(true)

    //     getProducto()
    //     .then((res) => {

    //         if (categoryId === "baterias"){
    //             setProductos(res.filter((item)=>item.category === "baterias"));
    //             setTitulo("Baterías");
    //         }
    //         else if(categoryId){

    //             setProductos(res.filter((item)=>item.category === categoryId));
    //             setTitulo(categoryId);

    //         }else{
    //             setProductos(res);
    //             setTitulo("Productos");
    //         }
    //     })
    //     .finally(()=> setLoading(false))
    // },[categoryId])

    useEffect(() => {
        setLoading(true)
        getProducto()

        const coleccionProductos = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos")
        getDocs(coleccionProductos)

            .then((res) => {

                const list = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    }
                })
                setProductos(list)

                if (categoryId === "baterias") {
                    setProductos(list.filter((item) => item.category === "baterias"));
                    setTitulo("Baterías");
                }
                else if (categoryId) {

                    setProductos(list.filter((item) => item.category === categoryId));
                    setTitulo(categoryId);

                } else {
                    setProductos(list);
                    setTitulo("Productos");
                }
            })
            .catch((error) => console.log(error))
            .finally(setLoading(false))
    }, [categoryId])


    return (
        <menu>
            <section>

                {loading
                    ?

                    <PacmanLoader color={'#63174A'} loading={loading} cssOverride={override} size={40} />

                    :
                    <div>

                        <h1>{toCapital(titulo)}</h1>

                        <ItemList productos={productos} />


                    </div>
                }
            </section>
        </menu>
    )
}

export default Itemlistcontainer;