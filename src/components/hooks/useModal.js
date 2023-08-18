import { useState } from "react";

export const useModal = (initValue) => {
  const [state, setState] = useState(initValue);
  const toggle = () => {
    setState((prev) => !prev);
  };
  return [state, toggle];
};
