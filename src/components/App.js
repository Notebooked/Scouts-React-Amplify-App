import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react'

import Home from "./Home";
import Photos from "./Photos";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/photos" element={ <Photos /> } />
      </Routes>
    </Router>
  );
}

export default withAuthenticator(App);
