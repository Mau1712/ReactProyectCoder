import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MiNav from './components/nav/NavBar';





function App() {
  return (
    <BrowserRouter>
      <MiNav />
      <Routes>
        <Route exact path="/" element={<ItemListContainer />} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

