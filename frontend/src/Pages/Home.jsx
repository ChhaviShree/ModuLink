import React from "react";
import Hero from "../Components/Hero/Hero";
import Models from "../Components/Models/Models";
import Buttons from "../Components/Buttons/Buttons";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import FeedBack from "../Components/FeedBack/FeedBack";
import "./Home.css";
import { useEffect, useState } from "react";
import PreLoader from "../Components/PreLoader/PreLoader";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="home-parent">
      {loading ? (
        <PreLoader />
      ) : (
        <>
          <Navbar menu={"home"} />
          <Hero />
          <Buttons />
          <Models />
          <FeedBack />
          <NewsLetter />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
