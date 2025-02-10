import { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";
import TargetContext from "./utils/TargetContext";
import Soleil from "./components/Soleil";
import * as THREE from "three";
import { PlanetOrbit } from "./components/PlanetOrbit";
import SetInitialCameraPosition from "./components/CameraInit";
import { ContentComponent } from "./components/ContentWrapper";
import HelpComponent from "./components/HelpComponent";

function App() {
  const targetCtx = useContext(TargetContext);

  return (
    <div className="relative h-screen">
      <ContentComponent />
      <HelpComponent />
      <Canvas className="relative z-1 h-screen">
        <SetInitialCameraPosition />
        <mesh position={[1, 0, -5]}>
          <sphereGeometry args={[101]} />
          <meshBasicMaterial color="#403735" side={THREE.BackSide} />
        </mesh>

        <ambientLight intensity={1.5} />
        <pointLight position={[11, 10, 10]} />
        <Soleil />
        <PlanetOrbit
          id={1}
          color="green"
          position={new Vector3(0.0, 0.0, 0.0)}
          radius={1.5}
          speed={0.00015}
          dashSize={0.1}
          gapSize={0.3}
        />
        <PlanetOrbit
          id={2}
          color="hotpink"
          position={new Vector3(0.0, 0.0, 0.0)}
          radius={2}
          speed={0.0003}
          dashSize={0.1}
          gapSize={0.3}
        />
        <PlanetOrbit
          id={3}
          color="yellow"
          position={new Vector3(0.0, 0.0, 0.0)}
          radius={3}
          speed={0.0004}
          dashSize={0.1}
          gapSize={0.3}
        />
        <PlanetOrbit
          id={4}
          color="red"
          position={new Vector3(0.0, 0.0, 0.0)}
          radius={5}
          speed={0.0002}
          dashSize={0.1}
          gapSize={0.3}
        />
        <OrbitControls
          target={targetCtx.target}
          maxDistance={10}
          minDistance={2}
        />
      </Canvas>
    </div>
  );
}

export default App;
