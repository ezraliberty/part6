import { createContext, useReducer, useContext } from "react";

const notificationReducer = (state, action) => {
  switch (action.type) {
    case "setNotification":
      return action.payload;
    case "resetNotification":
      return null;
    default:
      return state;
  }
};

const NotificationContext = createContext();

export const NotificationContextProvider = (props) => {
  const [notification, notificationDispatch] = useReducer(
    notificationReducer,
    null
  );

  // Function to show notification
  const showNotification = (message, timeout) => {
    notificationDispatch({ type: "setNotification", payload: message });
    setTimeout(() => {
      notificationDispatch({ type: "resetNotification" });
    }, timeout * 1000);
  };

  return (
    <NotificationContext.Provider value={{notification, showNotification}}>
      {props.children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
    return useContext(NotificationContext);
  };

export default NotificationContext;
