import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const SetInitialCameraPosition = () => {
  const { camera } = useThree();
  const initialPosition = new THREE.Vector3(600, 600, 600);
  const targetPosition = new THREE.Vector3(
    60 * Math.sin(THREE.MathUtils.degToRad(15)),
    60 * Math.sin(THREE.MathUtils.degToRad(15)),
    60,
  );
  const progress = useRef(0);
  const duration = 300; // Duration of the animation in frames

  useEffect(() => {
    camera.position.copy(initialPosition);
    camera.lookAt(0, 0, 0);
  }, [camera]);

  useFrame(() => {
    if (progress.current < 1) {
      progress.current += 1 / duration;
      const easedProgress = easeInOutQuad(progress.current);
      camera.position.lerpVectors(
        initialPosition,
        targetPosition,
        easedProgress,
      );
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
};

// Easing function for smooth acceleration and deceleration
const easeInOutQuad = (t: number) => {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
};

export default SetInitialCameraPosition;
