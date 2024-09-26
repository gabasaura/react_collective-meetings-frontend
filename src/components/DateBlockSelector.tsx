import React, { useState } from 'react';
import styles from '../styles/Calendar.module.css'

// Definición de tipos
type TimeBlock = 'Mañana' | 'Tarde' | 'Noche';

interface SelectedBlocks {
  [date: string]: TimeBlock[];
}

// Función para generar las fechas desde hoy (incluyendo la semana actual)
const generateDates = (): Date[] => {
  const today = new Date();
  const dates: Date[] = [];

  // Ajustamos el día de la semana para comenzar desde el lunes
  const dayOfWeek = today.getDay();
  const startDate = new Date(today);

  // Si no es lunes, retrocedemos hasta el lunes más cercano
  if (dayOfWeek !== 1) {
    const daysToSubtract = dayOfWeek === 0 ? 6 : dayOfWeek - 1; // Ajustar si es domingo o cualquier otro día
    startDate.setDate(today.getDate() - daysToSubtract);
  }

  // Generamos las fechas de 5 semanas (35 días)
  for (let i = 0; i < 35; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);
    dates.push(date);
  }

  return dates;
};

// Bloques de tiempo
const timeBlocks: TimeBlock[] = ['Mañana', 'Tarde', 'Noche'];

const DateBlockSelector: React.FC = () => {
  const [selectedBlocks, setSelectedBlocks] = useState<SelectedBlocks>({});

  const dates = generateDates();

  // Manejar la selección de bloques
  const handleBlockSelection = (date: Date, block: TimeBlock) => {
    const dateKey = date.toDateString();

    setSelectedBlocks((prevState) => {
      const selected = prevState[dateKey] || [];

      // Alternar la selección del bloque
      if (selected.includes(block)) {
        return { ...prevState, [dateKey]: selected.filter(b => b !== block) };
      } else {
        return { ...prevState, [dateKey]: [...selected, block] };
      }
    });
  };

  // Función para enviar los bloques seleccionados al servidor
  const submitBlocks = async () => {
    const payload = [];

    // Crear el payload para cada bloque de tiempo seleccionado
    for (const [date, blocks] of Object.entries(selectedBlocks)) {
      for (const block of blocks) {
        const blockNumber = timeBlocks.indexOf(block) + 1;  // Convertir bloque a número (1, 2 o 3)

        payload.push({
          meeting_id: 1, // Suponiendo que tienes el ID de la reunión, reemplaza con tu lógica
          user_id: 123, // Suponiendo que tienes el ID del usuario
          date: new Date(date).toISOString().split('T')[0], // Convertir fecha a formato YYYY-MM-DD
          block: blockNumber,
          available: true // Suponiendo que siempre es true, cambia según sea necesario
        });
      }
    }

    try {
      const response = await fetch('/timeslots', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload), // Enviar los bloques seleccionados en formato JSON
      });

      if (!response.ok) {
        throw new Error('Failed to submit timeslots');
      }

      const data = await response.json();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Selecciona bloques de tiempo</h2>
      <div className={styles.calendarGrid}>
        {dates.map((date) => (
          <div key={date.toDateString()} className={styles.calendarDay}>
            <h4>{date.toDateString()}</h4>
            {timeBlocks.map((block) => (
              <div key={block}>
                <label>
                  <input
                    type="checkbox"
                    checked={(selectedBlocks[date.toDateString()] || []).includes(block)}
                    onChange={() => handleBlockSelection(date, block)}
                  />
                  {block}
                </label>
              </div>
            ))}
          </div>
        ))}
      </div>
      <button onClick={submitBlocks}>Enviar</button>
      <pre>{JSON.stringify(selectedBlocks, null, 2)}</pre>
    </div>
  );
};

export default DateBlockSelector;