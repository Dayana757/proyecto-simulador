import React from 'react';
import InfoSeguros from './pages/InfoSeguros'; // Importa el componente de información
import Button from './pages/Button'; // Importa el componente de botón

const App = () => {
  // Acción al hacer clic en el botón
  const manejarClick = () => {
    alert('Calculando el seguro...');
  };

  return (
    <div className="app">
      <h1>Simulador de Seguros de Vehículos</h1>
      <InfoSeguros /> {/* Componente que muestra la información */}
      <Button onClick={manejarClick} text="Calcular Seguro" /> {/* El botón */}
    </div>
  );
};

export default App;