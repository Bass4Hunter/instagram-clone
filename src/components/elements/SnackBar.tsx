import { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../hooks/GlobalContext";

const Snackbar = () => {
  const { setMessage, message, status } = useContext(GlobalContext);

  console.log(message, status);
  const [show, setShow] = useState(true);

  const bgColor =
    status === "SUCCESS"
      ? "bg-green-500"
      : status === "ERROR"
      ? "bg-red-500"
      : "bg-yellow-500";

  const handleClose = () => {
    if (!setMessage) return;
    setMessage("");
    setShow(false);
  };

  useEffect(() => {
    setShow(true);
  }, [message]);

  if (!message) return <></>;

  return (
    <>
      {show && (
        <div
          className={`${bgColor} p-4 rounded-md fixed bottom-10 left-1/2 transform -translate-x-1/2`}
        >
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <p className="text-white">{message}</p>
            </div>
            <div className="ml-4">
              <button
                className="text-white hover:text-gray-200 focus:outline-none"
                onClick={handleClose}
              >
                X
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Snackbar;
