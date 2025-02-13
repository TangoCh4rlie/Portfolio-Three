import { useState, useEffect } from "react";
import "../assets/styles/title.css";

export default function TitleComponent() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="flex justify-center items-center h-screen pointer-events-none select-none">
      <h1 className="text-center font-minecraft fade-out text-amber-50">
        Elouan Reymond
      </h1>
    </div>
  );
}
