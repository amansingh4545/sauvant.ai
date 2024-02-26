import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Step from "./Step";
import Partners from "./Partners";
import Loan from "./Loan";
import Review from "./Review";
import Talk from "./Talk";
import Faq from "./Faq";
import Footer from "./Footer";


import { Button, Img, Input, Line, Text } from "components";

const LandingPagePage = () => {
  return (
    <>
      <Header/>
          <About/>
          <Step/>
          <Partners/>
          <Loan/>
          <Review/>
          <Talk/>
          <Faq/>
          <Footer/>
        
    </>
  );
};

export default LandingPagePage;
