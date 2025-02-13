import { Button } from "pixel-retroui";
import { useContext } from "react";
import ModalContext from "../utils/ModalContext";
import TargetContext from "../utils/TargetContext";

export default function HelpButton() {
  const targetCtx = useContext(TargetContext);
  const modalCtx = useContext(ModalContext);

  const handleClick = () => {
    targetCtx.setId(-1);
    modalCtx.setState(true);
  };

  return (
    <Button
      bg="#f5f0a9"
      shadow="#256bdb"
      className="fixed bottom-3 right-3 z-5 py-1 px-2 text-2xl"
      onClick={handleClick}
    >
      ?
    </Button>
  );
}
