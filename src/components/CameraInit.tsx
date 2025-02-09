import { useThree } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from "three";

const SetInitialCameraPosition = () => {
  const { camera } = useThree();
  useEffect(() => {
    // Set camera position to achieve a 15-degree angle view
    camera.position.set(
      10 * Math.sin(THREE.MathUtils.degToRad(15)),
      10 * Math.sin(THREE.MathUtils.degToRad(15)),
      10,
    );
    camera.lookAt(0, 0, 0);
  }, [camera]);
  return null;
};

export default SetInitialCameraPosition;
