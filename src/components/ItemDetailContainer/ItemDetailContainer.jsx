import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailsContainer.css';
import Loader from '../Loader';
import ItemDetail from './ItemDetail';
import { fireStore } from '../../firebase/firebase'; 
import { collection, query, where, getDocs } from 'firebase/firestore';

const ItemDetailContainer = () => {
    
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);

        const fetchProduct = async () => {
          const q = query(collection(fireStore, 'Item'), where("id", "==", id));
          
          const querySnapshot = await getDocs(q);
          

          if (!querySnapshot.empty) {
            const docSnap = querySnapshot.docs[0];
            setProduct(docSnap.data());
            console.log("Valor del objeto:", docSnap.data());
          } else {
            console.log('No se encontró el documento en la base de datos.');
          }


          setTimeout(() => {
            setLoading(false);
          }, 1000);

        };

        fetchProduct();
    }, [id]);

    return (
        <>
         {loading ? <Loader /> : <ItemDetail product={product} /> }        
        </>
    );
};

export default ItemDetailContainer;
