import React from "react";
import { createRoot } from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import Footer from "./Components/Footer";

import "./index.css";

const root = document.getElementById("root");
createRoot(root).render(
  <div>
    <Header/>
    <Body/>
    <Footer/>
  </div>

)