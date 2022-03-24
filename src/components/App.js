import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./Home";
import Photos from "./Photos";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={ <Home /> } />
          <Route path="/photos" element={ <Photos /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
