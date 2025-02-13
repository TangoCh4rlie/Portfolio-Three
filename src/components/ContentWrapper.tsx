import { useContext } from "react";
import TargetContext from "../utils/TargetContext";
import ModalContext from "../utils/ModalContext";
import TitleComponent from "./TitleComponent";
import PopUpComponent from "./PopUpComponent";
import { MeComponent } from "./MeComponent";
import { TechnoComponent } from "./TechnoComponent";
import { HelpComponent } from "./HelpComponent";

export const ContentComponent = () => {
  const targetCtx = useContext(TargetContext);
  const modalCtx = useContext(ModalContext);

  const renderSwitchModal = () => {
    if (modalCtx.isOpen) {
      switch (targetCtx.id) {
        case -1:
          return (
            <PopUpComponent>
              <HelpComponent />
            </PopUpComponent>
          );
        case 0:
          return (
            <PopUpComponent>
              <MeComponent />
            </PopUpComponent>
          );
        case 1:
          return (
            <PopUpComponent>
              <TechnoComponent />
            </PopUpComponent>
          );
        case 2:
          return <PopUpComponent>Modal 2</PopUpComponent>;
        case 3:
          return <PopUpComponent>Modal 3</PopUpComponent>;
        case 4:
          return <PopUpComponent>Modal 4</PopUpComponent>;

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
