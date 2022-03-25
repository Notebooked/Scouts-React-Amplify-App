import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Events from "./Events";
import Photos from "./Photos";
import PageNotFound from "./PageNotFound";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={ <Home /> } />
          <Route path="/events" element={ <Events /> } />
          <Route path="/photos" element={ <Photos /> } />
          <Route path="*" element={ <PageNotFound /> } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
