import { useState, ReactNode } from "react";
import PlanetObjectsContext from "./PlanetObjectsContext";
import * as THREE from "three";

interface PlanetObjectsProviderProps {
  children: ReactNode;
}

const PlanetObjectsProvider = ({ children }: PlanetObjectsProviderProps) => {
  const [planetObjects, setPlanetObjects] = useState<Map<string, THREE.Group>>(
    new Map<string, THREE.Group>()
  );

  return (
    <PlanetObjectsContext.Provider value={{ planetObjects, setPlanetObjects }}>
      {children}
    </PlanetObjectsContext.Provider>
  );
};

export default PlanetObjectsProvider;
