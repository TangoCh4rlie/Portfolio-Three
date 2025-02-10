import { useContext } from "react";
import TargetContext from "../utils/TargetContext";
import { Vector3 } from "three";
import ModalContext from "../utils/ModalContext";

export default function Soleil() {
  const targetCtx = useContext(TargetContext);
  const modalCtx = useContext(ModalContext);

  const handleClick = () => {
    targetCtx.setId(-1);
    targetCtx.setPosition(new Vector3(0, 0, 0));
    modalCtx.setState(true);
  };

  return (
    <mesh onClick={handleClick}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshBasicMaterial color="yellow" />
    </mesh>
  );
}
