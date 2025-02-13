import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";
import * as THREE from "three";

interface AstreProps {
  obj: THREE.Group;
  size: number;
  rotateSpeed: number;
}

export default function Astre(props: AstreProps) {
  const ref = useRef<THREE.Group>(null!);

  props.obj.scale.set(props.size, props.size, props.size);
  useEffect(() => {
    props.obj.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material = new THREE.MeshStandardMaterial({
          map: child.material.map,
          metalness: 0.8,
          roughness: 0.3,
        });
      }
    });
  }, [props.obj]);

  useFrame(({ clock }) => {
    ref.current.rotation.y = clock.getElapsedTime() * props.rotateSpeed;
  });

  return <primitive ref={ref} object={props.obj} />;
}
