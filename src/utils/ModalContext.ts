import { createContext } from "react";

const ModalContext = createContext({
  isOpen: false,
  setState: (state: boolean) => {},
});

export default ModalContext;
