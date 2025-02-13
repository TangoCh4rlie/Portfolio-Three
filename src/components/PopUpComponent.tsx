import { PropsWithChildren, useContext, useEffect } from "react";
import ModalContext from "../utils/ModalContext";
import { Popup } from "pixel-retroui";
import "../assets/modal.css";

export default function PopUpComponent(props: PropsWithChildren) {
  const modalCtx = useContext(ModalContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        event.preventDefault(); // Empêche le scroll vers le bas
        modalCtx.setState(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalCtx]);

  return (
    <Popup
      isOpen={modalCtx.isOpen}
      onClose={() => modalCtx.setState(false)}
      baseBg="#256bdb"
      bg="#f5f0a9"
      className="opacity-85"
    >
      <div className="modal-max-width">{props.children}</div>
    </Popup>
  );
}
