import React from "react";

import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  //Laurels,
  SpecialMenu,
  RegularMenu,
  Laurels,
} from "./container";
import { Navbar } from "./components";
import "./App.css";
import Category from "./container/Category/Category";

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Category/>
    <AboutUs />
    <SpecialMenu />
    <RegularMenu />
    <Chef />
    <Intro />
    {/* <Laurels /> */}
    <Gallery />
    <FindUs />
    <Footer />
  </div>
);

export default App;
