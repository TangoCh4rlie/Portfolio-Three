
import { useContext } from "react";
import TargetContext from "../utils/TargetContext";
import ModalContext from "../utils/ModalContext";
import TitleComponent from "./TitleComponent";
import PopUpComponent from "./PopUpComponent";

export const ContentComponent = () => {
  const targetCtx = useContext(TargetContext);
  const modalCtx = useContext(ModalContext);

  const renderSwitchModal = () => {
    if (modalCtx.isOpen) {
      console.log(targetCtx.id);

      switch (targetCtx.id) {
        case -1:
          return (
            <PopUpComponent>
              Help
            </PopUpComponent>
          );
        case 0:
          return (
            <PopUpComponent>
              A propos de moi :)
            </PopUpComponent>
          );
        case 1:
          return (
            <PopUpComponent>
              Modal 1
            </PopUpComponent>
          );
        case 2:
          return (
            <PopUpComponent>
              Modal 2
            </PopUpComponent>
          );
        case 3:
          return (
            <PopUpComponent>
              Modal 3
            </PopUpComponent>
          );
        case 4:
          return (
            <PopUpComponent>
              Modal 4
            </PopUpComponent>
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
