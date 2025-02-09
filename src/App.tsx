import { useContext } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Vector3 } from "three";
import TargetContext from "./utils/TargetContext";
import Planete from "./components/Planete";
import Soleil from "./components/Soleil";
import * as THREE from "three";

function App() {
  const targetCtx = useContext(TargetContext);

  return (
    <Canvas>
      <mesh position={[0, 0, -5]}>
        <sphereGeometry args={[100]} />
        <meshBasicMaterial color="#403734" side={THREE.BackSide} />
      </mesh>

      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Soleil />
      <Planete
        id={1}
        position={new Vector3(1.5, 0.0, 0.0)}
        color="#d1ddfa"
        orbitRadius={1.5}
        orbitSpeed={0.00015}
      />
      <Planete
        id={2}
        position={new Vector3(-1.5, 0, 0)}
        color="hotpink"
        orbitRadius={2}
        orbitSpeed={0.0004}
      />
      <Planete
        id={3}
        position={new Vector3(-1.5, 0, 0)}
        color="green"
        orbitRadius={3}
        orbitSpeed={0.00025}
      />
      <Planete
        id={4}
        position={new Vector3(-1.5, 0, 0)}
        color="yellow"
        orbitRadius={5}
        orbitSpeed={0.0002}
      />
      <OrbitControls target={targetCtx.target} maxDistance={10} />
    </Canvas>
  );
}

export default App;
