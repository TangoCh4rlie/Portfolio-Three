import { Card } from "pixel-retroui";
import technoJson from "../assets/json/techno.json";
import { Techno } from "../models/techno";
import "../assets/styles/entreprenariat.css";

export default function EntreprenariatComponent() {
  const sandraTechnos: string[] = ["React", "Express", "CloudFlare"];
  const technos: Techno[] = technoJson;

  // TODO: Rajouter une image du projet fini

  return (
    <div>
      <h2 className="text-2xl mb-4">Auto-Entreprenariat</h2>
      <p className="pb-4">
        N'hésitez pas à me contacter sur{" "}
        <span className="text-pink-600">
          <a href="https://www.malt.fr/profile/elouanreymond" target="_blank">
            Malt
          </a>
        </span>{" "}
        !
      </p>
      <Card
        bg="#fefcd0"
        textColor="black"
        borderColor="black"
        shadowColor="#c381b5"
        className="experience-card"
      >
        <h3>sandrasanseverino.com</h3>
        <p>
          Je développe actuellement le portfolio de Sandra Sanseverino, une
          <span className="text-lime-600"> artiste peintre </span> dans le but
          de mettre en valeur son travail. J'ai designé des maquettes et échangé
          avec elle pour essayer de
          <span className="text-lime-600"> répondre au besoin</span> le plus
          possible.
        </p>
        <div>
          {sandraTechnos.map((t) => {
            // TODO: Si utilisation de devicon remplacer ca
            const { img } = technos.find((techno) => techno.name === t) || {};
            return (
              <svg className="w-8" key={t} viewBox="0 0 128 128">
                <path fill={img?.fill} d={img?.d} />
              </svg>
            );
          })}
        </div>
      </Card>
    </div>
  );
}
