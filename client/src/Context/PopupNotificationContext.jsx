import { createContext, useState, useContext } from 'react';

const PopupNotificationContext = createContext();

export const usePopupNotification = () => useContext(PopupNotificationContext);

export const PopupNotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(null);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 7000); // hide after 5 seconds
  };

  const hideNotification = () => {
    setNotification(null);
  };

  return (
    <PopupNotificationContext.Provider value={{ notification, showNotification, hideNotification }}>
      {children}
    </PopupNotificationContext.Provider>
  );
};
