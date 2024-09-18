import React, { useState } from 'react';

// Definición de tipos
type TimeBlock = 'Mañana (8am - 12pm)' | 'Tarde (12pm - 6pm)' | 'Noche (6pm - 12am)';

interface SelectedBlocks {
  [date: string]: TimeBlock[];
}

// Función para generar las fechas a partir de 5 semanas
const generateDates = (): Date[] => {
  const today = new Date();
  const futureDate = new Date(today);
  futureDate.setDate(today.getDate() + 5 * 7); // Sumamos 5 semanas
  
  const dates: Date[] = [];
  for (let i = 0; i < 7; i++) { // Puedes ajustar el número de días a mostrar
    const date = new Date(futureDate);
    date.setDate(futureDate.getDate() + i);
    dates.push(date);
  }
  return dates;
};

// Bloques de tiempo
const timeBlocks: TimeBlock[] = ['Mañana (8am - 12pm)', 'Tarde (12pm - 6pm)', 'Noche (6pm - 12am)'];

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
      <h2>Selecciona bloques de tiempo a partir de 5 semanas</h2>
      {dates.map((date) => (
        <div key={date.toDateString()} style={{ marginBottom: '20px' }}>
          <h3>{date.toDateString()}</h3>
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
      <pre>{JSON.stringify(selectedBlocks, null, 2)}</pre>
    </div>
  );
};

export default DateBlockSelector;
