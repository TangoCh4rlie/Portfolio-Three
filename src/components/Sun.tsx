import { Suspense, useContext, useEffect } from "react";
import TargetContext from "../utils/TargetContext";
import { Vector3 } from "three";
import ModalContext from "../utils/ModalContext";
import * as THREE from "three";
import Astre from "./Astre";

interface SunProps {
  obj: THREE.Group;
  size: number;
  rotateSpeed: number;
}

export default function Sun(props: SunProps) {
  const targetCtx = useContext(TargetContext);
  const modalCtx = useContext(ModalContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.code === "Space") {
        event.preventDefault(); // Empêche le scroll vers le bas
        modalCtx.setState(false);
        targetCtx.setId(0);
        targetCtx.setPosition(new Vector3(0, 0, 0));
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [targetCtx, modalCtx]);

  const handleClick = () => {
    targetCtx.setId(0);
    targetCtx.setPosition(new Vector3(0, 0, 0));
    modalCtx.setState(true);
  };

  return (
    <Suspense fallback={null}>
      <mesh position={new Vector3(0, -3.6, 0)} onClick={handleClick}>
        <Astre
          obj={props.obj}
          size={props.size}
          rotateSpeed={props.rotateSpeed}
        />
      </mesh>
    </Suspense>
  );
}
