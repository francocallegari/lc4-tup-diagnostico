import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import "./alertSign.css";

const AlertSign = ({ message, variant = "primary", duration = 5000 }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  return (
    <>
      {show && (
        <div className="alert-container">
          <Alert
            variant={variant}
            onClose={() => setShow(false)}
            dismissible
          >
            {message}
          </Alert>
        </div>
      )}
    </>
  );
};

export default AlertSign;

