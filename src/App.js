import React from 'react';
import AppRouter from './AppRouter';
import {configureFakeBackend} from "./fake-backend/fake-backend";

if (process.env.RUN_WITH_FAKE_BACKEND === true) {
  configureFakeBackend();
}

class App extends React.Component {

  render() {
    return (
      <AppRouter/>
    );
  }
}

export default App;