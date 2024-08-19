import React from 'react';
import './styles/styles.css'; // Importar el archivo CSS desde la carpeta styles
import Header from './components/Header';
import Home from './components/Home';
import Speciality from './components/Speciality';
import Steps from './components/Steps';
import Review from './components/Review';
import Order from './components/Order';
import Footer from './components/Footer';
import { NavbarProvider } from './context/NavbarContext'; // Importa el proveedor

const App = () => (
  <NavbarProvider>
    <>
      <Header />
      <Home />
      <Speciality />
      <Steps />
      <Review />
      <Order />
      <Footer />
    </>
  </NavbarProvider>
);

export default App;
