import "../assets/modal.css";

export const MeComponent = () => {
  return (
    <div className="modal-max-width">
      <h2 className="text-2xl mb-4">A props de moi</h2>
      <p>
        Salut, moi c'est Elouan
        <br /> <br />
        Passionné d'informatique depuis le collège, je suis en{" "}
        <span className="text-fuchsia-800">troisième année </span>
        de développement informatique à l'IUT Claude Bernard de Lyon 1.
        <br />
        <br />
        Très <span className="text-blue-700">curieux et polyvalent</span>, je
        suis toujours à la recherche de nouveaux projets à réaliser. N'ayant pas
        de langage favori à proprement parlé, j'adore m'essayer à de nouvelles
        techno pour <span className="text-blue-700">découvrir</span> de
        nouvelles choses. J'ai d'ailleurs utilisé pour l'occasion de ce
        portfolio la librairie Three.js pour la première fois.
        <br />
        <br />
        Je ne suis pas frileux à l'idée de{" "}
        <span className="text-red-800">travailler en équipe </span>, bien au
        contraire, j'adore ça.
        <br />
        <br />
        À côté de l'informatique, j'aime beaucoup écouter de la musique (du rock
        au classique en passant la techno), faire du volley et de la randonnée.
        <br />
        <br />
        Voici donc mon portfolio que j'ai réalisé avec beaucoup de plaisir,
        j'espère qu'il vous plaira !
      </p>
    </div>
  );
};
