import { Card } from "pixel-retroui";
import "../assets/styles/experience.css";
import technoJson from "../assets/json/techno.json";
import { Techno } from "../models/techno";

export default function ExperienceComponent() {
  const technos: Techno[] = technoJson;
  const stageTechnos: string[] = [
    "Spring Boot",
    "Java",
    "Elasticsearch",
    "Kibana",
    "Azure",
    "GitLab",
  ];
  const alternanceTechnos: string[] = [
    "Spring Boot",
    "Angular",
    "Azure",
    "GitLab",
  ];

  const svgTechno = (list: string[]) => {
    return list.map((t) => {
      // TODO: Si utilisation de devicon remplacer ca
      const { img } = technos.find((techno) => techno.name === t) || {};
      return (
        <svg className="w-8" key={t} viewBox="0 0 128 128">
          <path fill={img?.fill} d={img?.d} />
        </svg>
      );
    });
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Expériences</h2>
      <Card
        bg="#fefcd0"
        textColor="black"
        borderColor="black"
        shadowColor="#c381b5"
        className="experience-card"
      >
        <h3>Axopen</h3>
        <h4>Stage 2024</h4>
        <p>
          J'ai passé trois mois en stage dans l'entreprise d'Axopen en tant que
          développeur. J'ai réalisé un outil permettant de
          <span className="text-purple-600"> concaténer les logs métiers </span>
          de plusieurs applications d'un même client. J'ai développé une
          librairie SpringBoot
          <span className="text-purple-600">
            {" "}
            intégrable aux projets déjà existant{" "}
          </span>
          puis un système de queue pour traiter la donnée de manière{" "}
          <span className="text-purple-600">
            asynchrone et la stocker dans un ElasticSearch
          </span>
          . Les données étaient visualisées avec Kibana.
        </p>
        <div>{svgTechno(stageTechnos)}</div>
        <h4>Alternance 2024 - 2025</h4>
        <p>
          J'effectue actuellement de la maintenance applicative ainsi que du
          développement de nouvelles fonctionnalités sur différents projets. Les
          technos que j'utilise au quotidien sont{" "}
          <span className="text-blue-600">SpringBoot et Angular</span>. J'ai eu
          la chance de participer à une grosse{" "}
          <span className="text-blue-600">mise en production</span> d'un produit
          chez un client qui a duré plusieurs semaines.
        </p>
        <div>{svgTechno(alternanceTechnos)}</div>
      </Card>
    </div>
  );
}
