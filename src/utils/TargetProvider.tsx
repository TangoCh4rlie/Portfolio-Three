import { useReducer } from "react";
import { Vector3 } from "three";
import TargetContext from "./TargetContext";

interface Target {
  type: string;
  newPosition?: Vector3;
  id?: number;
}

const TargetReducer = (state, action: Target) => {
  if (action.type === "P") {
    return {
      ...state,
      target: action.newPosition,
    };
  }
  if (action.type === "I") {
    return {
      ...state,
      id: action.id,
    };
  }
  return state;
};

const defaultTarget = {
  id: 0,
  target: new Vector3(0, 0, 0),
};

const TargetProvider = (props) => {
  const [position, dispatch] = useReducer(TargetReducer, defaultTarget);

  const setPosition = (newPosition: Vector3) => {
    dispatch({ type: "P", newPosition: newPosition });
  };

  const setId = (id: number) => {
    dispatch({ type: "I", id: id });
  };

  const targetContext = {
    id: position.id,
    target: position.target,
    setPosition,
    setId,
  };

  return (
    <TargetContext.Provider value={targetContext}>
      {props.children}
    </TargetContext.Provider>
  );
};

export default TargetProvider;
