import { useState } from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection/Index";
import {
  homeObjOne,
  homeObjTwo,
  homeObjThree,
} from "../components/InfoSection/Data";
import InfoSection from "../components/InfoSection/Index";
import Navbar from "../components/Navbar/index";
import Services from "../components/Services/index";
import Sidebar from "../components/Sidebar/Index";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Navbar toggle={toggle} />
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <Services />
      <InfoSection {...homeObjThree} />
      <Footer />
    </>
  );
};

export default Home;
