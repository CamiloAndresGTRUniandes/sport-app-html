import { useState } from "react";
import { localizer, getMessagesES } from "../Helpers/";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Calendar } from "react-big-calendar";
import { CalendarEvent } from "./";
import { addHours } from "date-fns";
import { Alerts } from "../../Utils";

export const ScheduleEvents = () => {
  const{showAlertHtml,showAlertSuccess}= Alerts();
  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };
  const onDoubleClick = (event) => {
    console.log({ doubleClick: event });
  };

  const onSelect = (event) => {
    const {title, description} = event;
    showAlertHtml(title, description,event,onConfirm);
    console.log({ onSelect: event });
  };

  const onConfirm=(event)=>
  {
  
    showAlertSuccess('Super lo hiciste quedaste inscrito (•‿•)!', "Recuerda, este  evento es  pago");

  }

  const eventsByUsser = [
    {
      title: "Demo Yonathan",
      notes: "Hay que comprar...",
      description:'Hay que comprar mucha ensalada de aguacate',
      start: addHours(new Date(),-3),
      end: addHours(new Date(), -1),
      bgColor: "red",
      className: "event",
      user: {
        _id: 1244,
        name: "Yonathan",
      },
    },

    {
      title: "Demo 3",
      notes: "Test acerca....",
      description:'Test acerca de los  modales mucha ensalada de aguacate',
      start: addHours(new Date("2024-04-04"), 7),
      end: addHours(new Date("2024-04-04"), 8),
      bgColor: "red",
      className: "event",
      user: {
        _id: 18000,
        name: "Yonathan",
      },
    },
  ];

 
  return (
    <div>
      <Calendar
        localizer={localizer}
        events={eventsByUsser}
        defaultView={lastView}
        startAccessor="start"
        endAccessor="end"
        culture="es"
    
        messages={getMessagesES()}
        components={{
          event: CalendarEvent,
        }}
        style={{ height: 'calc( 100vh - 50px )' }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
    </div>
  );
};
