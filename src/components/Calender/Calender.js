import React from 'react';
import { useSelector } from 'react-redux';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './Calender.css'; // Import the CSS file

const localizer = momentLocalizer(moment);

export default function Calender() {
  const darkMode = useSelector(state => state.theme.darkMode); // Access the theme state

  const events = [];

  const handleSelect = ({ start, end }) => {
    console.log(start, end);
  };

  return (
    <div className={`container calendar-container ${darkMode ? 'dark-mode' : ''}`}>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        onSelectEvent={event => console.log(event)}
        onSelectSlot={handleSelect}
        style={{ height: 500 }}
        eventPropGetter={(event, start, end, isSelected) => {
          let backgroundColor = isSelected ? 'blue' : 'green';
          if (darkMode) {
            backgroundColor = isSelected ? 'lightblue' : 'darkgreen';
          }
          return { event, start, end, isSelected,style: { backgroundColor:backgroundColor, color:backgroundColor } };
        }}
      />
    </div>
  );
}