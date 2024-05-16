import { useState, useEffect } from 'react';

function GoogleCalendar() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Função para buscar os eventos do Google Calendar
    async function fetchEvents() {
      try {
        // Fazer solicitação para a API do Google Calendar e obter os eventos
        const response = await fetch('https://www.googleapis.com/calendar/v3/calendars/primary/events');
        const data = await response.json();
        setEvents(data.items); // Definir os eventos no estado
      } catch (error) {
        console.error('Erro ao buscar eventos:', error);
      }
    }

    fetchEvents(); // Chamar a função para buscar os eventos ao montar o componente
  }, []);

  return (
    <div>
      <h2>Eventos do Google Calendar</h2>
      <ul>
        {events.map((event, index) => (
          <li key={index}>
            <strong>{event.summary}</strong> - {event.start.dateTime}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default GoogleCalendar;
