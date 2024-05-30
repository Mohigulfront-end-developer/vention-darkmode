import "./App.css";
import Header from "./components/Header";
import Aboutus from "./components/Aboutus";
import KeyStatus from "./components/KeyStatus";
import HeroSec from "./components/HeroSec";
import Trust from "./components/Trust";
import Footer from "./components/Footer";
import BrandsMarque from "./components/BrandsMarque";
import BrandMarque from "./components/BrandMarque";
import Workers from "./components/Workers";
import Partnership from "./components/Parternship";
import WeSpeak from "./components/WeSpeak";
import ButtonFull from "./components/ButtonFull";
import Recognize from "./components/Recognize";
import RegisterForm from "./components/RegisterForm";
import { useContext } from "react";
import { ModeContext } from "./components/context/ModeContext";
import { modeTypes } from "./types/modeTypes";
import Toggle from "./components/Toggle";

function App() {
  const { mode } = useContext(ModeContext);
  const theme = mode === modeTypes.DARK_MODE ? true : false;
  return (
    <>
      <div className="fixed top-[80%] left-4 z-10">
        <Toggle fromApp={true} />
      </div>
      <div
        className={` ${
          mode === modeTypes.DARK_MODE
            ? " bg-[#29292b] text-white"
            : " bg-white text-black"
        } relative`}
      >
        <Header />
        <HeroSec />
        <Aboutus />
        <KeyStatus />
        <Trust />
        <BrandMarque />
        <WeSpeak />
        <Workers />
        <Partnership />
        <BrandsMarque />
        <ButtonFull />
        <Recognize />
        <RegisterForm />
      </div>
      <div
        style={{ position: "relative", zIndex: 20 }}
        className={` overflow-hidden `}
      >
        <div style={{ position: "relative", zIndex: 2 }}>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
