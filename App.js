import React, {
  AppRegistry
} from 'react';

import App from './app/containers/app.js';

const MedApp = () => {
  return (
    <App />
  );
}

AppRegistry.registerComponent('MedApp', () => MedApp);