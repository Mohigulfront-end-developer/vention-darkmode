
import './App.css'
import Header from './components/Header'
import Aboutus from './components/Aboutus';
import KeyStatus from './components/KeyStatus';
import HeroSec from './components/HeroSec';
import Trust from './components/Trust';
import Footer from './components/Footer';
import BrandsMarque from './components/BrandsMarque';
import BrandMarque from "./components/BrandMarque";
import Workers from './components/Workers';
import Partnership from './components/Parternship';
import WeSpeak from './components/WeSpeak';
import ButtonFull from './components/ButtonFull';
import Recognize from './components/Recognize';
import RegisterForm from './components/RegisterForm';
// import { ThemeProvider } from './components/context/theme';
// import { ThemeBtn } from "./components/ThemesBtn";
// import { useEffect, useState } from 'react';

function App() {
  // const [themeMode, setThemeMode] = useState('light')

  // const darkTheme = () => {
  //   setThemeMode ('dark')
  // }

  // const lightTheme = () => {
  //   setThemeMode('light')
  // }

  // useEffect(() => {
  //   document.querySelector("html").classList.remove('dark', "light")
  //   document.querySelector('html').classList.add(themeMode)
  // }, [themeMode])


  return (
  
     < >
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
      <Footer />
      {/* <ThemeBtn /> */}
    </>
  );
}

export default App
