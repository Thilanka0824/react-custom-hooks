import { useState, useEffect } from "react";

const useCheckValidEmail = (params) => {
    console.log(params)
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    params.includes("@") ? setIsValid(true) : setIsValid(false);
  }, [params]);

  return isValid;
};

export default useCheckValidEmail;