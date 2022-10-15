import { useEffect, useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { Button } from "./style";

const ThemeToggle = () => {
  const [activeMode, setActiveMode] = useState(
    document.body.dataset.mode ?? "light"
  );
  const inactiveMode = activeMode === "light" ? "dark" : "light";

  useEffect(() => {
    document.body.dataset.mode = activeMode;
    window.localStorage.setItem("mode", activeMode);
  }, [activeMode]);

  return (
    <Button
      aria-label={`Change to ${inactiveMode} mode`}
      title={`Change to ${inactiveMode} mode`}
      type="button"
      onClick={() => setActiveMode(inactiveMode)}
    >
      {activeMode === "light" ? <BsMoon size="2em" /> : <BsSun size="2em" />}
    </Button>
  );
};

export default ThemeToggle;
