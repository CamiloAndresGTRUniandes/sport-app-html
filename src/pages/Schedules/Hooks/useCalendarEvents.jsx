import axios from "axios";
import { useState } from "react";
import { Alerts, GetUserInfo } from "../../Utils";
import { addSpecialFields } from "../Helpers";

export const useCalendarEvents = (userId, name) => {
  const urlAPI = process.env.REACT_APP_API_URL_SERVICE;
  const urlAPIUsers = process.env.REACT_APP_API_URL;
  const { showAlertError, showAlertSuccess } = Alerts();
  const [eventsByUser, setEventsByUser] = useState([]);
  const [loadEvents, setLoadEvents] = useState(true);
  const [errorInEvents, setErrorInEvents] = useState(false);

  const { getToken, getUser } = GetUserInfo();
  let tokenPayload = {
    headers: { Authorization: `Bearer ${getToken()}` },
  };

  const getEvents = (start, end) => {
    setLoadEvents(true);
    const queryEvents = {
      //user: userId,
      serviceTypes: ["ffcbaf64-3ffa-4b28-8dc7-838532ca0274"],
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

  const suscribeEvent = async (event) => {
    event.userId = getUser().id;
    axios
      .post(`${urlAPIUsers}/api/V1/EventSuscription`, event, tokenPayload)
      .then((response) => {
        showAlertSuccess(
          `Tu inscripcion en el evento ${event.name} `,
          response.data.message
        );
      })
      .catch((error) => {
         showAlertError(
          `Problemas en tu inscripcion ${event.name}  :(`,
          "Lo sentimos no pudimos hacerla , intentalo de nuevo mas tarde."
        );
      });
  };

  return {
    eventsByUser,
    loadEvents,
    errorInEvents,
    getEvents,
    suscribeEvent,
  };
};
