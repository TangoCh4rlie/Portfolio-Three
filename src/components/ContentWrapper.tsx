import { useContext } from "react";
import TargetContext from "../utils/TargetContext";
import ModalContext from "../utils/ModalContext";
import TitleComponent from "./TitleComponent";
import PopUpComponent from "./PopUpComponent";
import { MeComponent } from "./MeComponent";
import { TechnoComponent } from "./TechnoComponent";
import { HelpComponent } from "./HelpComponent";
import { ProjectsComponent } from "./ProjectsComponent";
import ExperienceComponent from "./ExperienceComponent";
import EntreprenariatComponent from "./EntreprenariatComponent";
import ContactComponent from "./ContactComponent";
import BlogComponent from "./BlogComponent";
import Competences from "./Competences";

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
          return (
            <PopUpComponent>
              <ProjectsComponent name="Projets" />
            </PopUpComponent>
          );
        case 3:
          return (
            <PopUpComponent>
              <ExperienceComponent />
            </PopUpComponent>
          );
        case 4:
          return (
            <PopUpComponent>
              <EntreprenariatComponent />
            </PopUpComponent>
          );
        case 5:
          return (
            <PopUpComponent>
              <ProjectsComponent name="Misc" misc={true} />
            </PopUpComponent>
          );
        case 6:
          return (
            <PopUpComponent>
              <BlogComponent />
            </PopUpComponent>
          );

        case 7:
          return (
            <PopUpComponent>
              <ContactComponent />
            </PopUpComponent>
          );
        case 8:
          return (
            <PopUpComponent>
              <div className="flex flex-col gap-6">
                <ProjectsComponent name="Projets SAE" competence={true} />
                <Competences />
              </div>
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
