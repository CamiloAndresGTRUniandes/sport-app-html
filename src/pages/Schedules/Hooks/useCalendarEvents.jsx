

import axios from "axios";
import { useState } from "react";
import { Alerts } from "../../Utils";
import { addSpecialFields } from "../Helpers";

export const useCalendarEvents = (userId, name) => {
  const urlAPI = process.env.REACT_APP_API_URL_SERVICE;
  const { showAlertError } = Alerts();
  const [eventsByUser, setEventsByUser] = useState([]);
  const [loadEvents, setLoadEvents] = useState(true);
  const [errorInEvents, setErrorInEvents] = useState(false);

  const getEvents = (start, end) => {
    setLoadEvents(true);
    const queryEvents = {
      user: userId,
      serviceTypes: ["93fc91b3-47dd-49e8-9589-01671491cc73"],
      startDateTime: new Date(start),
      endDateTime: new Date(end),
    };

    axios
      .post(`${urlAPI}/api/v1/productService/getFilteredList`, queryEvents)
      .then((response) => {
        const events = addSpecialFields(response.data, name);
        setEventsByUser(events); 
        setLoadEvents(false);
        setErrorInEvents(false);
      })
      .catch((error) => {
        setErrorInEvents(true);
        setLoadEvents(false);
        showAlertError(
          "Ups :(",
          "Lo sentimos no pudimos traer los eventos intenta en otro momento"
        );
      });
  };

  return {
    eventsByUser,
    loadEvents,
    errorInEvents,
    getEvents,
  };
};
