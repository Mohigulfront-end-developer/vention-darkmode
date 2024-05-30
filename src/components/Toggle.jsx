import "./Toggle.css";
import { useContext, useEffect, useRef } from "react";
import { modeTypes } from "../types/modeTypes";
import { ModeContext} from "./context/ModeContext"

const Toggle = ({ fromApp }) => {
  const { toggleMode, mode } = useContext(ModeContext);

  return (
    <div className="toggle">
      <input
        className={mode === modeTypes.LIGHT_MODE ? "switched" : ""}
        type="checkbox"
        value={true}
      />
      <label className="cursor-pointer" onClick={toggleMode}></label>
    </div>
  );
};

export default Toggle;
