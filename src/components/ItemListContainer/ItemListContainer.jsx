import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';
import { fireStore } from '../../firebase/firebase'; 

import { collection, doc, getDoc, getDocs, where, query } from 'firebase/firestore';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingFilter, setLoadingFilter] = useState(false);
  const { categoria } = useParams();
  

  useEffect(() => {
    setLoading(true);

    const fetchData = () => {
      const collectionRef = collection(fireStore, 'Item'); 
      getDocs(collectionRef).then((snapshot) => {
          const data = snapshot.docs.map((doc) => doc.data());
          setProductList(data);
        })
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    };

    const timeout = setTimeout(() => {
      fetchData();
    }, 2000);

    return () => clearTimeout(timeout); 

  }, []);



  useEffect(() => {
    setLoadingFilter(true);
    setTimeout(() => {
      setLoadingFilter(false);
    }, 1000);
  }, [categoria]);

  const filteredProducts = categoria
    ? productList.filter(product => product.categoria === categoria) : productList;

    

  return (
    <Container className='productsSection'>
      <Container className='productsContainer'>
        {loading || loadingFilter ? <Loader /> : <ItemList products={filteredProducts}/>}
      </Container>
    </Container>
  );
};


export default ItemListContainer;
