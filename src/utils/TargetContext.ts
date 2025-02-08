import { createContext } from "react";
import { Vector3 } from "three";

const TargetContext = createContext({
  id: -1,
  target: new Vector3(0, 0, 0),
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setPosition: (target: Vector3, id: number) => {},
});

export default TargetContext;
