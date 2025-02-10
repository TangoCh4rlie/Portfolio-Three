import { PropsWithChildren, useReducer } from "react";
import ModalContext from "./ModalContext";

interface Modal {
  isOpen: boolean;
}

const ModalReducer = (_state: any, action: Modal) => {
  return {
    isOpen: action.isOpen,
  };
};

const defaultModal = {
  isOpen: false,
};

const ModalProvider = (props: PropsWithChildren) => {
  const [position, dispatch] = useReducer(ModalReducer, defaultModal);

  const setState = (isOpen: boolean) => {
    dispatch({ isOpen: isOpen });
  };

  const modalContext = {
    isOpen: position.isOpen,
    setState: setState,
  };

  return (
    <ModalContext.Provider value={modalContext}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
