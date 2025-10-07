import { useContext, useEffect, useState, useRef } from "react";
import useIcon from "../../hooks/useIcon";
import styles from "./Toast.module.css";
import { NotificationContext } from "../Form/NotificationContextProvider";

const Toast = ({ toastMessage, toastType, id }) => {
  const { setNotifications } = useContext(NotificationContext);
  const [isExiting, setIsExiting] = useState(false);
  const icon = useIcon(toastType);

  const handleDismiss = () => {
    setIsExiting(true);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 600); // match your CSS animation duration
  };

  return (
    <div
      role="alert"
      className={`${styles.toast} ${styles["toast-" + toastType]} ${
        isExiting ? styles.dismiss : ""
      }`}
    >
      <span className={`${styles[toastType]} ${styles.icon}`}>{icon}</span>
      <p className={styles["toast-message"]}>{toastMessage}</p>
      <button onClick={handleDismiss} className={styles["toast-close"]}>
        x
      </button>
    </div>
  );
};

export default Toast;
