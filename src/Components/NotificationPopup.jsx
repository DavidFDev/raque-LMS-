import { usePopupNotification } from '../Context/PopupNotificationContext';
import { FaTimes } from 'react-icons/fa';

const NotificationPopup = () => {
  const { notification, hideNotification } = usePopupNotification();

  if (!notification) return null;

  return (
    <div className="notification-popup">
      <span>{notification}</span>
      <FaTimes onClick={hideNotification} className="close-icon" />
    </div>
  );
};

export default NotificationPopup;
