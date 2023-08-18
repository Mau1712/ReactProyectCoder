import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailsContainer.css';
import Loader from '../Loader';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();


    useEffect(() => {
        setTimeout(() => {
            fetch('/productsBD.json')
                .then((res) => res.json())
                .then((data) => {
                    console.log('Product Data:', data);
                    const selectedProduct = data.find(item => item.id === id);
                    console.log('Selected Product:', selectedProduct);
                    setProduct(selectedProduct);
                    setLoading(false);
                })
                .catch((error) => console.error(error))
                .finally(() => setLoading(false));
        }, 2000);
    }, [id]);

    return (
        <>
         {loading ? <Loader /> : <ItemDetail product={product} /> }        
        </>
        
           
      
    );
};

export default ItemDetailContainer;
