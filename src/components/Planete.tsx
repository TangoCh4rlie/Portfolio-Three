import { useFrame, Vector3 } from "@react-three/fiber";
import { useRef, useContext } from "react";
import TargetContext from "../utils/TargetContext";
import * as THREE from "three";
import ModalContext from "../utils/ModalContext";

interface PlaneteProps {
  id: number;
  position: Vector3;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
}

export default function Planete({
  id,
  position,
  color,
  orbitRadius,
  orbitSpeed,
}: PlaneteProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetCtx = useContext(TargetContext);
  const modalCtx = useContext(ModalContext);

  useFrame(() => {
    if (meshRef.current) {
      const time = Date.now() * orbitSpeed;
      meshRef.current.position.x = Math.cos(time) * orbitRadius;
      meshRef.current.position.z = Math.sin(time) * orbitRadius;
      if (targetCtx.id === id) {
        targetCtx.setPosition(meshRef.current?.position.clone());
      }
    }
  });

  const handleClick = () => {
    console.log(id);

    if (meshRef.current) {
      targetCtx.setId(id);
      modalCtx.setState(true);
    }
  };

  return (
    <mesh ref={meshRef} position={position} onClick={handleClick}>
      <sphereGeometry args={[0.2, 32, 32]} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}
