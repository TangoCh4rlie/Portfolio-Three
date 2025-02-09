import { Button, Popup } from "pixel-retroui";
import { useState } from "react";

export const ContentComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);
  return (
    <div className="absolute z-10">
      <h1 className="text-2xl font-minecraft mb-4">Welcome to My Retro App</h1>
      <Button onClick={openPopup} bg="pink" textColor="white">
        Click me!
      </Button>
      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        Your popup content here
      </Popup>
    </div>
  );
};
