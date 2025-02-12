import { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TargetContext from "./utils/TargetContext";
import SetInitialCameraPosition from "./components/CameraInit";
import { ContentComponent } from "./components/ContentWrapper";
import HelpComponent from "./components/HelpComponent";
import { ObjectLoader } from "./components/ObjectLoader";
import Stars from "./components/Stars";

function App() {
  const targetCtx = useContext(TargetContext);

  // TODO: finir les secitons par Planetes
  // TODO: faire un gros zoom quand on arrive sur la fenetre
  // TODO: effet de zoom plus trasition de cam quand planete cliqué

  return (
    <div className="relative h-screen">
      <ContentComponent />
      <HelpComponent />
      <Canvas className="relative z-1 h-screen">
        <SetInitialCameraPosition />

        <Stars />

        {/* Ambient Light (Soft background lighting) */}
        <ambientLight intensity={0.6} />
        {/* Directional Light (Acts like sunlight) */}
        <directionalLight position={[5, 5, 5]} intensity={2} castShadow />
        {/* Point Light (Acts like a small light source) */}
        <pointLight position={[0, 5, 0]} intensity={5} />

        <ObjectLoader />
        <OrbitControls target={targetCtx.target} minDistance={2} />
      </Canvas>
    </div>
  );
}

export default App;
