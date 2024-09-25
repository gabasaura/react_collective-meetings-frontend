import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import DateBlockSelector from '../components/DateBlockSelector';

const Meeting: React.FC = () => {
  const { hash } = useParams<{ hash: string }>();
  const location = useLocation();
  const { name, email } = location.state as { name: string, email: string }; // Obteniendo datos de state

  
  if (!location.state) {
    return <div>No hay estado disponible</div>
  }

  return (
    <div>
      <h1>Bienvenido a la reunión</h1>
      <p>Nombre: {name}</p>
      <p>Correo: {email}</p>
      <p>Hash de la reunión: {hash}</p>

      {/* Componente del calendario */}
      <DateBlockSelector />
    </div>
  );
};

export default Meeting;
