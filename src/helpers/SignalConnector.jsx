import { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import { Alerts } from "../pages/Utils";
const urlSignal = process.env.REACT_APP_SIGNALR;

export const SignalConnector = (userId) => {
  const [dataSignal, setDataSignal] = useState();
  const { showToast } = Alerts();
  let hubConnection;
  useEffect(() => {
    const startSignal = () => {
      console.log("ReceiveMessage====> ", `ReceiveMessage${userId}`);
      hubConnection = new signalR.HubConnectionBuilder()
        .withUrl(urlSignal)
        .withAutomaticReconnect()
        .build();
      hubConnection
        .start()
        .then(() => {
          console.log("Connection started");
        })
        .catch((err) => console.log("Error while starting connection: " + err));
      hubConnection.on(`ReceiveMessageWeb${userId}`, (data) => {
        setDataSignal(data);
      });
    };
    if (userId !== "" && userId != undefined) {
      startSignal();
    }
  }, [userId]);

  useEffect(() => {
    if (dataSignal != undefined) {
      try {
        if (dataSignal != "") {
          var msg = JSON.parse(dataSignal.trim());
          const data = JSON.parse(msg);
          const title = data.Title;
          const Description = data.Description;
          showToast(title, Description);
        }
      } catch (error) {
        console.error("Error parsing JSON:", dataSignal, error);
      }
    }
  }, [dataSignal]);

  return { dataSignal };
};
