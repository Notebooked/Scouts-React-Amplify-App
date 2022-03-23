import React from 'react';

import Amplify from 'aws-amplify';

import Authenticator from './Authenticator'
import {withAuthenticator} from '@aws-amplify/ui-react'

function Photos() {
  return (
    <>
      <Authenticator />
      <h1>Photos</h1>
    </>
  );
}

export default withAuthenticator(Photos);
