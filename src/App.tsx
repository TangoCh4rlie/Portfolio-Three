import { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import TargetContext from "./utils/TargetContext";
import SetInitialCameraPosition from "./components/CameraInit";
import { ContentComponent } from "./components/ContentWrapper";
import { ObjectLoader } from "./components/ObjectLoader";
import Stars from "./components/Stars";
import HelpButton from "./components/HelpButton";
import * as THREE from "three";

function App() {
  const targetCtx = useContext(TargetContext);

  // todo: finir les secitons par Planetes
  // TODO: faire un gros zoom quand on arrive sur la fenetre
  // TODO: effet de zoom plus trasition de cam quand planete cliqué
  // TODO: faire le site en anglais
  // TODO: changer les keybind en fonction de l'appareil
  //

  return (
    <div className="relative h-screen">
      <>
        <ContentComponent />
        <HelpButton />
        <Canvas
          className="relative z-1 h-screen"
          gl={{
            toneMapping: THREE.ACESFilmicToneMapping,
          }}
        >
          <SetInitialCameraPosition />

          <Stars />

          <ambientLight intensity={1} />
          <hemisphereLight groundColor={"#444444"} intensity={0.8} />
          <directionalLight position={[5, 5, 5]} intensity={4} castShadow />
          <pointLight position={[0, 10, 0]} intensity={10} color={"#ffffff"} />

          <ObjectLoader />
          <OrbitControls target={targetCtx.target} minDistance={6} />
        </Canvas>
      </>
    </div>
  );
}

export default App;
