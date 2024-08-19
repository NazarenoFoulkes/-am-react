import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { useNavbar } from '../context/NavbarContext'; // Importa el contexto

const Header = () => {
  const { isNavbarOpen, toggleNavbar } = useNavbar(); // Usa el contexto

  return (
    <header>
      <a href="#" className="logo"><FontAwesomeIcon icon={faUtensils} />Ñam</a>
      <div id="menu-bar" className="fas fa-bars" onClick={toggleNavbar}>
        <FontAwesomeIcon icon={faBars} />
      </div>
      <nav className={`navbar ${isNavbarOpen ? 'open' : ''}`}>
        <Link to="#home">Inicio</Link>
        <Link to="#speciality">Especialidad</Link>
        <Link to="#review">Reseñas</Link>
        <Link to="#order">Ordená</Link>
      </nav>
    </header>
  );
};

export default Header;
