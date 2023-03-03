import { useEffect, useState } from "react";

function useIsonline() {
  const [states, setStates] = useState(true);

  useEffect(() => {
    const handleOnline = () => {
      setStates(true);
    };
    const handleOflline = () => {
      setStates(false);
    };
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOflline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOflline);
    };
  }, []);
  return states;
}
export default useIsonline;
