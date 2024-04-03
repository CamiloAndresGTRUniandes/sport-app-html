import { useState } from "react";
import { localizer, getMessagesES } from "../Helpers/";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar } from "react-big-calendar";
import {CalendarEvent} from './'
import { addHours } from "date-fns";

export const ScheduleEvents = () => {
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };

  const events = [
    {
      title: "Demo Yonathan",
      notes: "Hay que comprar pastel",
      start: new Date(),
      end: addHours(new Date(), 1),
      bgColor: "red",
      className: "event",
      user: {
        _id: 1244,
        name: "Yonathan",
      },
    },
  ];

  const onDoubleClick = ( event ) => {
    console.log({ doubleClick: event });
  }

  const onSelect = ( event ) => {
    console.log({ onSelect: event });
  }
  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
      backgroundColor: 'orange',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      className:'event'
    }
  }
  return (
    <div>
      <Calendar
        localizer={localizer}
        //events={events}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        culture="es"
        style={{ height: "890px" }}
        messages={getMessagesES()}
        components={{
          event: CalendarEvent
        }}
        //style={{ height: 'calc( 100vh - 350px )' }}
        eventPropGetter={ eventStyleGetter }
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={onViewChanged}
      />
    </div>
  );
};
