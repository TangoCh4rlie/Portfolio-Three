import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface MiniPlanetProps {
  obj: THREE.Group;
  rotateSpeed: number;
  size: number;
  planetName: string;
}

const MiniPlanet = ({ obj, rotateSpeed, size }: MiniPlanetProps) => {
  const meshRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (meshRef.current && obj) {
      const currentMesh = meshRef.current;
      // Clone the object to avoid sharing references
      const clonedObj = obj.clone();
      currentMesh.add(clonedObj);

      // Scale the planet for the menu
      const scale = size * 3; // Make it larger for better visibility
      currentMesh.scale.set(scale, scale, scale);

      // Center the planet
      currentMesh.position.set(0, -0.5, 0);

      return () => {
        currentMesh.clear();
      };
    }
  }, [obj, size]);

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.y += rotateSpeed * 0.03;
    }
  });

  return <group ref={meshRef} />;
};

export default MiniPlanet;
