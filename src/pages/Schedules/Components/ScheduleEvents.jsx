import { addDays, endOfWeek, format, startOfWeek } from "date-fns";
import { useEffect, useState } from "react";
import { Calendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Alerts, GetUserInfo, SpinnerSportApp } from "../../Utils";
import { getMessagesES, localizer } from "../Helpers/";
import { useCalendarEvents } from "../Hooks/useCalendarEvents";
import { CalendarEvent } from "./";

export const ScheduleEvents = () => {
  const { showAlertSuscription, showAlertSuccess } = Alerts();
  // const { getUser } = GetUserInfo();
  const getUser  = JSON.parse(sessionStorage.getItem("userLogin"));
  console.log(getUser);
  const [firstDateWeek, setFirstDateWeek] = useState(
    format(new Date(), "MMM dd, yyyy")
  );
  const [lastDateWeek, setLastDateWeek] = useState(
    addDays(endOfWeek(new Date()), 360)
  );

  const [lastView, setLastView] = useState(
    localStorage.getItem("lastView") || "week"
  );
  const { eventsByUser, loadEvents, getEvents } =
  useCalendarEvents(getUser.id, getUser.name);
 
  useEffect(() => {
    getEvents(firstDateWeek, lastDateWeek);
  }, []);

  const onViewChanged = (event) => {
    localStorage.setItem("lastView", event);
    setLastView(event);
  };
  const onDoubleClick = (event) => {
    console.log({ doubleClick: event });
  };

  const onSelect = (event) => {
    const { title, description } = event;
    showAlertSuscription(title, description, event, onConfirm);
    console.log({ onSelect: event });
  };

  const onConfirm = (event) => {
    showAlertSuccess(
      "Super lo hiciste quedaste inscrito (•‿•)!",
      "Recuerda, este  evento es  pago"
    );
  };
  const onNavigate = (date, view, action) => {
    console.log(
      "My Date",
      addDays(startOfWeek(date), 1),
      addDays(endOfWeek(date), 1)
    );
  };

  return (
    <div>
      {eventsByUser.length > 0 && (
        <Calendar
          localizer={localizer}
          events={eventsByUser}
          defaultView={lastView}
          startAccessor="start"
          endAccessor="end"
          culture="es"
          messages={getMessagesES()}
          components={{
            event: CalendarEvent,
          }}
          style={{ height: "calc( 100vh - 50px )" }}
          onDoubleClickEvent={onDoubleClick}
          onSelectEvent={onSelect}
          onView={onViewChanged}
          onNavigate={onNavigate}
        />
      )}
      {loadEvents && <SpinnerSportApp />}
    </div>
  );
};
