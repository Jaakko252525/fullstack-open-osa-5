const Notification = ({ message }) => {
  if (message === null) {
    return null;
  } else if (message === 'wrong credentials') {
    return (
      <div className="alert">
        {message}
      </div>
    );
  } else {
    return (
      <div className="notification">
        {message}
      </div>
    );
  }
};

export default Notification;