import { createContext } from "react";

const ModalContext = createContext({
  isOpen: false,
  setState: (_state: boolean) => {},
});

export default ModalContext;
