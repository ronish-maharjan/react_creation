import React, { useContext } from "react";
import { NotificationContext } from "../Form/NotificationContextProvider";

const Notification = ({ children }, toastType) => {
  const { setNotifications } = useContext(NotificationContext);
  return <></>;
};

export default Notification;
