import toast from "react-hot-toast";

export const ErrorHandling = (err) => {
  const message = err?.response?.data?.message || "An Unknown error occurred ";
  console.log(message);
  toast.error(message);
};
