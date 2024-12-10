import React from 'react';
import InfoSeguros from './pages/InfoSeguros'; // Importa el componente de información


const App = () => {
  // Acción al hacer clic en el botón
  const manejarClick = () => {
    alert('Calculando el seguro...');
  };

  return (
    <div className="app">
      
      <InfoSeguros /> {/* Componente que muestra la información */}
     
    </div>
  );
};

export default App;