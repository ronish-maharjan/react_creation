import { NotificationContextProvider } from "./components/Form/NotificationContextProvider";
import NotificationPanel from "./components/Notifications/NotificationPanel";
function App() {
  return (
    <NotificationContextProvider>
      <NotificationPanel />
    </NotificationContextProvider>
  );
}

export default App;
