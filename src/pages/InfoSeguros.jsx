import React from 'react';
import  './InfoSeguros.css'

const InfoSeguros = () => {
  return (
    
    <div className="info-seguro">
  <header className="header">
    <div className="nav-bar">
      <img src="ruta/a/tu/logo.png" alt="Logo" className="logo" />
      <nav className="nav">
        <ul>
          <li><a href="#inicio">Home</a></li>
          <li><a href="#menu">Menu</a></li>
          <li><a href="#contacts">Contacts</a></li>
        </ul>
      </nav>
    </div>
    
    <div className="banner">
      <div className="banner-text">
        <h1>Seguro Todo Riesgo</h1>
        <p>Tranquilidad garantizada para proteger tu carro de robos y daños con la opción de financiar tu seguro de vehículo hasta por 12 meses.
           ¡Obtén el respaldo que necesitas donde quieras y cuando quieras 
        </p>
      <button className='button'>Cotizar</button>
      </div>
      
      <div className="banner-image">
        <img src="ruta/a/tu/imagen.jpg" alt="Restaurante" />
        <ul className="banner-list">
          <li>Opción 1</li>
          <li>Opción 2</li>
          <li>Opción 3</li>
        </ul>
      </div>
    </div>
  </header>
</div>
   /* <div className="info-seguro">
      <div className='contenedor-logo'>

      </div>
      <h2>Información sobre el Seguro de Vehículos</h2>
      <p>
        El seguro de vehículos es una cobertura que protege tu automóvil ante
        accidentes, robos y otros imprevistos. Existen diferentes tipos de seguros
        como el seguro a terceros, seguro a todo riesgo, y seguro de daños propios.
      </p>
      <p>
        Con este simulador, podrás obtener una estimación del costo de tu seguro
        según el tipo de cobertura y las características de tu vehículo.
      </p>
    </div>*/
    
  );
};

export default InfoSeguros;