import React, { createContext, useMemo, useState } from "react";

const NotificationContext = createContext();
const NotificationContextProvider = ({ children }) => {
  const [notifications, setNotifications] = useState([
    {
      id: "fbea9f2d-ffc3-4543-b7a4-ca40156fa2ff",
      toastMessage: "test",
      toastType: "success",
    },
    {
      id: "fbea9f2-4543-b7a4-ca40156fa2ff",
      toastMessage: "test",
      toastType: "notice",
    },
    {
      id: "fbea9f2fc3-4543-b7a4-ca40156fa2ff",
      toastMessage: "test",
      toastType: "warning",
    },
    {
      id: "fbea9f2d-fca40156fa2ff",
      toastMessage: "test",
      toastType: "error",
    },
  ]);
  const value = useMemo(
    () => ({ notifications, setNotifications }),
    [notifications]
  );
  console.log(notifications);
  console.log("rerendered provider");
  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
};

export { NotificationContextProvider, NotificationContext };
