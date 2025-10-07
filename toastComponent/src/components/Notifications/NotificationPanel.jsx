import React, { useContext } from "react";
import { NotificationContext } from "../Form/NotificationContextProvider";
import Toast from "../Toast/Toast";

const NotificationPanel = () => {
  const { notifications } = useContext(NotificationContext);

  return (
    <div
      className=""
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        position: "absolute",
        bottom: "0",
        right: "0",
      }}
    >
      {notifications.map((notif) => (
        <Toast
          key={notif.id}
          toastMessage={notif.toastMessage}
          toastType={notif.toastType}
          id={notif.id}
        />
      ))}
    </div>
  );
};

export default NotificationPanel;
