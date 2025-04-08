import { useEffect } from "react";

// Custom hook for detecting clicks outside the element
const useClickOutside = (ref, callback) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      // If the click is outside the ref element, call the callback
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Clean up event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useClickOutside;
