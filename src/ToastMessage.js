// src/ToastMessage.js
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastMessage = ({ type = "info", message }) => {
  // Display the toast based on type
  const showToast = () => {
    switch (type) {
      case "success":
        toast.success(message);
        break;
      case "error":
        toast.error(message);
        break;
      case "warning":
        toast.warn(message);
        break;
      case "info":
      default:
        toast.info(message);
        break;
    }
  };

  React.useEffect(() => {
    if (message) {
      showToast();
    }
  }, [message]);

  return <ToastContainer />;
};

export default ToastMessage;
