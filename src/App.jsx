import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MiNav from './components/nav/NavBar';
import { CartProvider } from './Context/CartContext';
// import { collection, doc, getDoc, getDocs, where, query } from 'firebase/firestore';
// import { fireStore } from './firebase/firebase';
import Footer from './components/Footer/Footer';
import BuyForm from './components/BuyForm/BuyForm';



function App() {


  useEffect(() => {

    
  }, [])

  return (
    
      <BrowserRouter>
      <CartProvider>
        <MiNav />    
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/item/:id" element={<ItemDetailContainer />} />
          <Route exact path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route exact path="/buyForm" element={<BuyForm />} />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>

    
    
  );
}

export default App;

// const pusrchasedCart = (cartInfo) => {
  //   const order = {
  //     buyer: {
  //       nombre: "",
  //       correo: "",
  //       telefono: ""
  //     },
  //     items: [
  //       {
  //         id: "",
  //         precio: "",
  //         titulo: "",
  //       }
  //     ],
  //     total: 0
  //   }
  // }


  // consultar coleccion entera
    // const collectionRef = collection(fireStore, "Item");
    // getDocs(collectionRef).then(snapshot => {
    //   console.log(snapshot);
    //   snapshot.forEach((snap) => console.log(snap.data()));

    // })


    // consultar prodeucto unico
    //  const docRef = doc(fireStore, "Item", "0PcputaXVFxpgvJUQYKa")
    //  getDoc(docRef).then((snapshot) => {
    //   console.log({snapshot});
    //   if (snapshot.exists()) {
    //     console.log("La informacion del documento es:", snapshot.data())
    //   } else {
    //     console.log("Documento no encontrado")
    //   }

    // });



    // consultar con filtro
    // const q = query(collection(fireStore, "Item"), where("Precio", ">", 3000));
    // getDocs(q).then(snapshot => {
    //   console.log(snapshot);
    //   snapshot.forEach((doc) => console.log(doc.data()));
    // })
