import { Popup } from "pixel-retroui";
import { useContext } from "react";
import TargetContext from "../utils/TargetContext";
import ModalContext from "../utils/ModalContext";
import TitleComponent from "./TitleComponent";

export const ContentComponent = () => {
  const targetCtx = useContext(TargetContext);
  const modalCtx = useContext(ModalContext);

  const renderSwitchModal = () => {
    if (modalCtx.isOpen) {
      console.log(targetCtx.id);

      switch (targetCtx.id) {
        case -1:
          return (
            <Popup
              isOpen={modalCtx.isOpen}
              onClose={() => modalCtx.setState(false)}
            >
              A propos de moi :)
            </Popup>
          );

        case 1:
          return (
            <Popup
              isOpen={modalCtx.isOpen}
              onClose={() => modalCtx.setState(false)}
            >
              Modal 1
            </Popup>
          );
        case 2:
          return (
            <Popup
              isOpen={modalCtx.isOpen}
              onClose={() => modalCtx.setState(false)}
            >
              Modal 2
            </Popup>
          );
        case 3:
          return (
            <Popup
              isOpen={modalCtx.isOpen}
              onClose={() => modalCtx.setState(false)}
            >
              Modal 3
            </Popup>
          );
        case 4:
          return (
            <Popup
              isOpen={modalCtx.isOpen}
              onClose={() => modalCtx.setState(false)}
            >
              Modal 4
            </Popup>
          );

        default:
          return null;
      }
    }
  };

  return (
    <>
      <div className="absolute z-10 w-full">
        <TitleComponent />
        {renderSwitchModal()}
      </div>
    </>
  );
};
