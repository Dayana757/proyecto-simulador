import React from 'react';
import './InfoSeguros.css'; // Asegúrate de que el archivo CSS esté presente.

const InfoSeguros = () => {
  return (
    <div className="info-seguro">
      <header className="header">
        <div className="nav-bar">
          <img src="public/logo1.png" alt="Logo" className="logo" />
          <nav className="nav">
            <ul>
              <img src="/person.png" alt="Persona" />
            </ul>
          </nav>
        </div>

        <div className="banner">
          <div className="banner-text">
            <h1>Seguro Todo Riesgo</h1>
            <p>
              Tranquilidad garantizada para proteger tu carro de robos y daños con la opción de financiar tu seguro de vehículo hasta por 12 meses.
              ¡Obtén el respaldo que necesitas donde quieras y cuando quieras!
            </p>
            <a href="/cotizar">
              <button className="button"><b>Cotizar</b></button>
            </a>
          </div>

          <div className="banner-image">
            <img src="/image.png" alt="Restaurante" />
            <ul className="banner-list">
              <li>Cotiza en menos de 3 minutos</li>
              <li>Financiación en 12 cuotas</li>
              <li>Cancelación gratuita</li>
            </ul>
          </div>
        </div>
      </header>

      <div className="info-seguro-vehiculo">
        <div className="contenedor-logo"></div>
        <h2>Información Seguros Vehículos</h2>
        <ul>
          <li>El seguro de vehículos es una cobertura que protege tu automóvil ante accidentes, robos y otros imprevistos.</li>
          <li>Existen diferentes tipos de seguros como el seguro a terceros, seguro a todo riesgo, y seguro de daños propios.</li>
          <li>Con este simulador, podrás obtener una estimación del costo de tu seguro según el tipo de cobertura y las características de tu vehículo.</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoSeguros;