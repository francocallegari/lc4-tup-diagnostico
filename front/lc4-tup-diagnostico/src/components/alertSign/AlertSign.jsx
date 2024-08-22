import React, { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import "./alertSign.css"; 

const AlertSign = ({ message, variant = "primary", duration = 5000 }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => setShow(false), duration);
  }, [duration]);

  return (
    <>
      {show && (
        <div className="alert-container">
          <Alert variant={variant}>{message}</Alert>
        </div>
      )}
    </>
  );
};

export default AlertSign;
