import "../assets/modal.css";
import "../assets/techno.css";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  Card,
} from "pixel-retroui";
import technoJson from "../../public/json/techno.json";
import { Techno } from "../models/techno";

interface LanguageSquareProps {
  techno: Techno;
}

const LanguageSquare = (props: LanguageSquareProps) => {
  return (
    <Card
      bg="#fefcd0"
      textColor="black"
      borderColor="black"
      shadowColor="#c381b5"
      className="language-square"
    >
      <svg viewBox="0 0 128 128">
        <path fill={props.techno.img.fill} d={props.techno.img.d}></path>
      </svg>
      <p>{props.techno.name}</p>
    </Card>
  );
};

export const TechnoComponent = () => {
  const technos: Techno[] = technoJson;
  const categories: string[] = Array.from(
    new Set(technos.map((techno) => techno.type)),
  );

  return (
    <div className="modal-max-width">
      <h2 className="text-2xl mb-4">Technos</h2>
      <div className="p-1 w-full">
        <Accordion
          bg="#fefcd0"
          textColor="black"
          borderColor="black"
          shadowColor="#c381b5"
        >
          {categories.map((type) => (
            <AccordionItem key={type} value={type}>
              <AccordionTrigger>{type}</AccordionTrigger>
              <AccordionContent>
                <div className="language-grid">
                  {technos
                    .filter((techno) => techno.type === type)
                    .map((techno) => (
                      <LanguageSquare key={techno.name} techno={techno} />
                    ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};
