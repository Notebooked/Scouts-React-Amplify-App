import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { withAuthenticator, Authenticator } from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

function Photos() {
  return (
    <>
      <h1>Photos</h1>
      <Authenticator />
    </>
  );
}

export default withAuthenticator(Photos);
