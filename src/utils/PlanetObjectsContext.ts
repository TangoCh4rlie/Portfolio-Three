import { createContext } from "react";
import * as THREE from "three";

interface PlanetObjectsContextType {
  planetObjects: Map<string, THREE.Group>;
  setPlanetObjects: (objects: Map<string, THREE.Group>) => void;
}

const PlanetObjectsContext = createContext<PlanetObjectsContextType>({
  planetObjects: new Map<string, THREE.Group>(),
  setPlanetObjects: (_objects: Map<string, THREE.Group>) => {},
});

export default PlanetObjectsContext;
