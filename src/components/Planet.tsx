import { ThreeEvent, useFrame } from "@react-three/fiber";
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
      const time = Date.now() * props.orbitSpeed;
      const x = Math.cos(time) * props.orbitRadius!;
      const z = Math.sin(time) * props.orbitRadius!;

      meshRef.current.position.set(x, -1.8, z);

      if (targetCtx.id === props.id) {
        targetCtx.setPosition(meshRef.current?.position.clone());
      }
    }
  });

  const handleClick = (event: ThreeEvent<MouseEvent>) => {
    event.stopPropagation();
    event.nativeEvent.preventDefault();
    if (meshRef.current) {
      targetCtx.setId(props.id);
      modalCtx.setState(true);
    }
  };

  return (
    <Suspense fallback={null}>
      <mesh ref={meshRef} onClick={(event) => handleClick(event)}>
        <Astre
          obj={props.obj}
          rotateSpeed={props.rotateSpeed}
          size={props.size}
        />
      </mesh>
    </Suspense>
  );
}
