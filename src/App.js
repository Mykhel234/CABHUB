import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Download from "./Component/Home/Download";
import Header from "./Component/Home/Header";
import HomeScreen from "./Component/Home/HomeScreen";
// import Testimonials from "./Component/Home/Testimonials";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/Download" element={<Download />} />
          {/* <Route path="/Testimonial" element={<Testimonials />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
