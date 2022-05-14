import { useEffect } from "react";

export const useLogger = ({ value }) => {
  useEffect(() => {
    console.log(value);
  }, [value]);
};
