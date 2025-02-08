import { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";
import TargetContext from "./utils/TargetContext";
import Planete from "./components/Planete";
import Soleil from "./components/Soleil";

function App() {
  const targetCtx = useContext(TargetContext);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Soleil />
      <Planete
        id={1}
        position={new Vector3(1.5, 0.0, 0.0)}
        color="blue"
        orbitRadius={1.5}
        orbitSpeed={0.001}
      />
      <Planete
        id={2}
        position={new Vector3(-1.5, 0, 0)}
        color="green"
        orbitRadius={2}
        orbitSpeed={0.0008}
      />
      <OrbitControls target={targetCtx.target} />
    </Canvas>
  );
}

export default App;
