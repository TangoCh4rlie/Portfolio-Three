export const HelpComponent = () => {
  return (
    <div>
      <h3 className="text-2xl mb-4">Help !</h3>
      <div className="flex flex-col gap-2">
        <p className="mb-4">
          Naviguez à travers le système en cliquant sur chaque planetes pour en
          savoir plus à propos de moi.
        </p>
        <p>
          Pressez <span className="text-blue-500">[espace]</span> pour recentrer
          la caméra sur le soleil.
        </p>
        <p>
          Utilisez la <span className="text-blue-500">[molette]</span> de la
          souris pour recentrer zoomer ou dézoomer.
        </p>
        <p>
          Maintenez le <span className="text-blue-500">[click gauche]</span> de
          la souris pour vous déplacer dans l'espace
        </p>
        <p className="mb-4">
          Pressez <span className="text-blue-500">[echap]</span> pour sortir
          rapidement d'une pop-up.
        </p>
        <p className="text-purple-700">Enjoy :)</p>
      </div>
    </div>
  );
};
