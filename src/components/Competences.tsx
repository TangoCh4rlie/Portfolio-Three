import { Card } from "pixel-retroui";
import competencesJson from "../assets/json/competences.json";

interface Competence {
  competence: string;
  description: string;
}

export default function Competences() {
  const competences: Competence[] = competencesJson;

  return (
    <div>
      <h2 className="text-2xl mb-4">Mes Compétences</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {competences.map((comp, index) => (
          <Card
            key={index}
            bg="#fefcd0"
            textColor="black"
            borderColor="black"
            shadowColor="#c381b5"
          >
            <div className="p-4">
              <h3 className="text-2xl font-bold mb-4">{comp.competence}</h3>
              <p className="text-sm leading-relaxed">{comp.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
