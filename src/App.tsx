import React, { useState } from 'react';
import './App.css'; // Importamos estilos CSS

// Definición de tipos
type TimeBlock = 'Mañana' | 'Tarde' | 'Noche';

interface SelectedBlocks {
  [date: string]: TimeBlock[];
}

// Función para generar las fechas a partir de 5 semanas (de lunes a domingo)
const generateDates = (): Date[] => {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + 5 * 7); // Sumamos 5 semanas

  const dates: Date[] = [];
  let startDate = futureDate;

  // Ajustar el día de la semana para empezar el lunes
  const dayOfWeek = startDate.getDay();
  if (dayOfWeek !== 1) {
    // Si no es lunes, ajustamos para que sea el lunes más cercano
    startDate.setDate(startDate.getDate() + (1 - dayOfWeek));
  }

  // Generamos 35 días (5 semanas)
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

  return (
    <div>
      <h2>Selecciona bloques de tiempo</h2>
      <div className="calendar-grid">
        {dates.map((date) => (
          <div key={date.toDateString()} className="calendar-day">
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
      <pre>{JSON.stringify(selectedBlocks, null, 2)}</pre>
    </div>
  );
};

export default DateBlockSelector;
