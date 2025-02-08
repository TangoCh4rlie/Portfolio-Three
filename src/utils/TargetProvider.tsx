import { useReducer } from "react";
import { Vector3 } from "three";
import TargetContext from "./TargetContext";

interface Target {
  newPosition: Vector3;
  id: number;
}

const TargetReducer = (state, action: Target) => {
  return {
    id: action.id,
    target: action.newPosition,
  };
};

const defaultTarget = {
  id: -1,
  target: new Vector3(0, 0, 0),
};

const TargetProvider = (props) => {
  const [position, dispatch] = useReducer(TargetReducer, defaultTarget);

  const setPosition = (newPosition: Vector3, id: number) => {
    dispatch({ newPosition: newPosition, id: id });
  };

  const targetContext = {
    id: position.id,
    target: position.target,
    setPosition,
  };

  return (
    <TargetContext.Provider value={targetContext}>
      {props.children}
    </TargetContext.Provider>
  );
};

export default TargetProvider;
