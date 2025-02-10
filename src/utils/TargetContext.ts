import { createContext } from "react";
import { Vector3 } from "three";

const TargetContext = createContext({
  id: -1,
  target: new Vector3(0, 0, 0),
  setPosition: (_target: Vector3) => {},
  setId: (_id: number) => {},
});

export default TargetContext;
