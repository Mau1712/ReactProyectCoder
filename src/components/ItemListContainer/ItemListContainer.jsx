import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import ItemList from '../ItemList/ItemList';
import Loader from '../Loader';
import './ItemListContainer.css';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true); 
   const [loadingFilter, setLoadingFilter] = useState(false); 
  const { categoria } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch('/productsBD.json')
        .then((res) => res.json())
        .then((data) => setProductList(data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false)); 
    }, 2000); 
  }, []);

  useEffect(() => {
    setLoadingFilter(true); 
    setTimeout(() => {
      setLoadingFilter(false); 
    }, 1000); 
  }, [categoria]); 

  const filteredProducts = categoria
    ? productList.filter(product => product.categoria === categoria)
    : productList;

  return (
    <Container className='productsSection'>
      <Container className='productsContainer'>
      {loading || loadingFilter ? <Loader /> : <ItemList products={filteredProducts} />}
      </Container>
    </Container>
  );
};

export default ItemListContainer;
