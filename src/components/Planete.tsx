import { useFrame, useLoader, Vector3 } from "@react-three/fiber";
import { useRef, useContext, Suspense, useEffect } from "react";
import TargetContext from "../utils/TargetContext";
import * as THREE from "three";
import ModalContext from "../utils/ModalContext";
import { OBJLoader } from "three-stdlib";
import { MTLLoader } from "three-stdlib";

interface PlaneteProps {
  id?: number;
  position?: Vector3;
  name?: string;
  orbitRadius?: number;
  orbitSpeed?: number;
}

function Model({ name }: PlaneteProps) {
  const obj = useLoader(OBJLoader, name + ".obj", (loader) => {
    const mtlLoader = new MTLLoader();
    mtlLoader.load(name + ".mtl", (materials) => {
      materials.preload();
      loader.setMaterials(materials);
    });
  });

  obj.scale.set(0.01, 0.01, 0.01);
  useEffect(() => {
    obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: child.material.map,
          metalness: 0.6,
          roughness: 0.3,
        });
      }
    });
  }, [obj]);
  return <primitive object={obj} />;
}

export default function Planete({
  id,
  position,
  name,
  orbitRadius,
  orbitSpeed,
}: PlaneteProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const targetCtx = useContext(TargetContext);
  const modalCtx = useContext(ModalContext);

  useFrame(() => {
    if (meshRef.current) {
      const time = Date.now() * orbitSpeed!;
      meshRef.current.position.x = Math.cos(time) * orbitRadius!;
      meshRef.current.position.z = Math.sin(time) * orbitRadius!;
      if (targetCtx.id === id) {
        targetCtx.setPosition(meshRef.current?.position.clone());
      }
    }
  });

  const handleClick = () => {
    console.log(id);

    if (meshRef.current) {
      targetCtx.setId(id!);
      modalCtx.setState(true);
    }
  };

  return (
    <Suspense fallback={null}>
      <mesh ref={meshRef} position={position} onClick={handleClick}>
        <Model name={name} />
      </mesh>
    </Suspense>
  );
}
