import { Line } from "@react-three/drei";
import { Vector3 } from "three";
import Planet from "./Planet";
import * as THREE from "three";

interface PlaneteOrbitProps {
  id: number;
  orbitRadius: number;
  orbitSpeed: number;
  obj: THREE.Group;
  rotateSpeed: number;
  size: number;
  dashSize: number;
  gapSize: number;
}

export const PlanetOrbit = (props: PlaneteOrbitProps) => {
  const createOrbitPath = (radius: number) => {
    const points = [];
    for (let i = 0; i < 100; i++) {
      const angle = (i / 100) * Math.PI * 2;
      points.push(
        new Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius),
      );
    }
    return points;
  };

  return (
    <>
      <Line
        points={createOrbitPath(props.orbitRadius)}
        color="#6d6d6d"
        lineWidth={1}
        dashed={true}
        dashSize={props.dashSize}
        gapSize={props.gapSize}
      />

      <Planet
        id={props.id}
        orbitRadius={props.orbitRadius}
        orbitSpeed={props.orbitSpeed}
        obj={props.obj}
        rotateSpeed={props.rotateSpeed}
        size={props.size}
      />
    </>
  );
};
