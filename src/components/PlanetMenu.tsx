import { useContext, useState, useEffect } from "react";
import TargetContext from "../utils/TargetContext";
import ModalContext from "../utils/ModalContext";
import planetJson from "../assets/json/planet.json";
import { PlanetJson } from "../models/planet";
import MiniPlanetCanvas from "./MiniPlanetCanvas";
import { Button, Card } from "pixel-retroui";
import * as THREE from "three";

interface PlanetMenuProps {
  planetObjects: Map<string, THREE.Group>;
}

const PlanetMenu = ({ planetObjects }: PlanetMenuProps) => {
  const targetCtx = useContext(TargetContext);
  const modalCtx = useContext(ModalContext);
  const planets: PlanetJson[] = planetJson.filter((p) => p.name !== "Sun");
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handlePlanetClick = (planetId: number) => {
    targetCtx.setId(planetId);
    modalCtx.setState(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsCollapsed(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="fixed top-4 z-50 flex flex-col items-center"
      style={{
        left: "50%",
        transform: "translateX(-50%)",
        width: "auto",
      }}
    >
      <Card
        bg="#fefcd0"
        textColor="black"
        borderColor="black"
        shadowColor="#c381b5"
        className={`flex flex-col ${isCollapsed ? "p-1" : "p-3"} transition-all duration-300`}
      >
        <div className="flex items-center justify-center">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className={`text-black hover:bg-black/10 rounded transition-all duration-300 hover:scale-110 active:scale-95 ${
              isCollapsed ? "px-1 py-0.5 text-xs" : "px-2 py-1 text-sm"
            }`}
            aria-label={isCollapsed ? "Expand menu" : "Collapse menu"}
          >
            <span
              className={`inline-block transition-transform duration-300 ${isCollapsed ? "rotate-0" : "rotate-180"}`}
            >
              ▼
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            isCollapsed ? "h-0 opacity-0" : "h-auto opacity-100"
          } ${!isCollapsed && "mt-3"}`}
        >
          <div className="flex flex-row gap-3">
            {planets.map((planet) => (
              <div key={planet.id} className="relative">
                <Button
                  bg={targetCtx.id === planet.id ? "#3b82f6" : "#f5f0a9"}
                  shadow={targetCtx.id === planet.id ? "#1d4ed8" : "#256bdb"}
                  className="p-3 transition-all duration-300 hover:scale-105 flex items-center justify-center"
                  onClick={() => handlePlanetClick(planet.id)}
                >
                  {planetObjects.get(planet.name) ? (
                    <MiniPlanetCanvas
                      obj={planetObjects.get(planet.name)!}
                      rotateSpeed={planet.rotateSpeed}
                      size={planet.size}
                      planetName={planet.name}
                      isSelected={targetCtx.id === planet.id}
                    />
                  ) : (
                    <div className="w-16 h-16 bg-gray-600 rounded-full animate-pulse"></div>
                  )}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PlanetMenu;
