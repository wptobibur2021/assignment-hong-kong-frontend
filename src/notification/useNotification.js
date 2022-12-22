import { toast } from "react-hot-toast";

export const useNotification = () => {
  const successNotify = (message) => {
    toast.success(message, {
      position: "top-right",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };
  const errorNotify = (message) => {
    toast.error(message, {
      position: "top-right",
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };
  return { errorNotify, successNotify };
};
