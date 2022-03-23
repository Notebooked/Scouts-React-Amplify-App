import React from "react";

import Amplify from 'aws-amplify';
import awsconfig from '../aws-exports';
import {Authenticator} from '@aws-amplify/ui-react'
import '@aws-amplify/ui-react/styles.css';

Amplify.configure(awsconfig);

function Login() {
  return (
    <Authenticator hideSignUp={true}>

    </Authenticator>
  )
}

export default Login;
