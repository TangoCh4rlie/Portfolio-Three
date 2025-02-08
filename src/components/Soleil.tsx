import { useContext } from "react";
import { Vector3 } from "three";
import TargetContext from "../utils/TargetContext";

export default function Soleil() {
  const targetCtx = useContext(TargetContext);

  const handleClick = () => {
    targetCtx.setPosition(new Vector3(0, 0, 0), -1);
  };

  return (
    <mesh onClick={handleClick}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="yellow" />
    </mesh>
  );
}
