import { Line } from "@react-three/drei";
import { Vector3 } from "three";
import Planete from "./Planete";

export const PlanetOrbit = (props: {
  id: number;
  position: Vector3;
  radius: number;
  speed: number;
  dashSize: number;
  gapSize: number;
  color: string;
}) => {
  const createOrbitPath = (radius: number) => {
    const points = [];
    for (let i = 0; i < 64; i++) {
      const angle = (i / 64) * Math.PI * 2;
      points.push(
        new Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius),
      );
    }
    return points;
  };

  return (
    <>
      <Line
        points={createOrbitPath(props.radius)}
        color="#d2ddfa"
        lineWidth={1}
        dashed={true}
        dashSize={props.dashSize}
        gapSize={props.gapSize}
      />

      <Planete
        id={props.id}
        position={props.position}
        color={props.color}
        orbitRadius={props.radius}
        orbitSpeed={props.speed}
      />
    </>
  );
};
