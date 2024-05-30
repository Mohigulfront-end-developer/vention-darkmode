import { createContext, useContext, useState } from "react";
import { modeTypes } from "../../types/modeTypes";

export const ModeContext = createContext(null);

export const ModeProvider = function ({ children }) {
  const [mode, setMode] = useState(modeTypes.DARK_MODE);

  const toggleMode = () => {
    console.log(`log`);
    setMode((prevMode) => {
      return prevMode === modeTypes.DARK_MODE
        ? modeTypes.LIGHT_MODE
        : modeTypes.DARK_MODE;
    });
  };

  return (
    <ModeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  );
};
