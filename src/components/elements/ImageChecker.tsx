import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../hooks/GlobalContext";

type Props = {
  imgSrc: string;
};

export function ImageChecker({ imgSrc }: Props) {
  const [isValid, setIsValid] = useState(true);
  const { setMessage, setStatus } = useContext(GlobalContext);

  useEffect(() => {
    setIsValid(true);
  }, [imgSrc]);

  function handleImageError() {
    if (!setMessage) return;
    if (!setStatus) return;
    setIsValid(false);
  }

  return (
    <div>
      {isValid ? (
        <img
          className="h-[400px] w-[400px] bg-cover bg-center"
          src={imgSrc}
          onError={handleImageError}
        />
      ) : (
        <p className="text-red-600">The image URL is not valid</p>
      )}
    </div>
  );
}
