import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import MiniPlanet from "./MiniPlanet";
import * as THREE from "three";

interface MiniPlanetCanvasProps {
  obj: THREE.Group;
  rotateSpeed: number;
  size: number;
  planetName: string;
  isSelected: boolean;
}

const MiniPlanetCanvas = ({
  obj,
  rotateSpeed,
  size,
  planetName,
  isSelected,
}: MiniPlanetCanvasProps) => {
  return (
    <div
      className={`
        w-16 h-16 rounded-full overflow-hidden flex items-center justify-center
        ${isSelected ? "ring-2 ring-blue-400 shadow-lg" : ""}
        transition-all duration-300
      `}
    >
      <Canvas
        camera={{ position: [0, 0, 3], fov: 45 }}
        gl={{ alpha: true, antialias: true }}
        style={{ background: "transparent", width: "100%", height: "100%" }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={1} />
          <hemisphereLight groundColor={"#444444"} intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
          {obj && (
            <MiniPlanet
              obj={obj}
              rotateSpeed={rotateSpeed}
              size={size}
              planetName={planetName}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
};

export default MiniPlanetCanvas;
