import { useFrame } from "@react-three/fiber";
import { useRef, useContext, Suspense } from "react";
import TargetContext from "../utils/TargetContext";
import * as THREE from "three";
import ModalContext from "../utils/ModalContext";
import Astre from "./Astre";

interface PlaneteProps {
  id: number;
  orbitRadius: number;
  orbitSpeed: number;
  obj: THREE.Group;
  rotateSpeed: number;
  size: number;
}

export default function Planet(props: PlaneteProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetCtx = useContext(TargetContext);
  const modalCtx = useContext(ModalContext);

  useFrame(() => {
    if (meshRef.current) {
      const time = Date.now() * props.orbitSpeed!;
      meshRef.current.position.x = Math.cos(time) * props.orbitRadius!;
      meshRef.current.position.z = Math.sin(time) * props.orbitRadius!;
      if (targetCtx.id === props.id) {
        targetCtx.setPosition(meshRef.current?.position.clone());
      }
    }
  });

  const handleClick = () => {
    if (meshRef.current) {
      targetCtx.setId(props.id);
      modalCtx.setState(true);
    }
  };

  return (
    <Suspense fallback={null}>
      <mesh ref={meshRef} onClick={handleClick}>
        <Astre
          obj={props.obj}
          rotateSpeed={props.rotateSpeed}
          size={props.size}
        />
      </mesh>
    </Suspense>
  );
}
