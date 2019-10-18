import React from 'react';
import AppRouter from './AppRouter';
import {configureFakeBackend} from "./fake-backend/fake-backend";


configureFakeBackend();

class App extends React.Component {

  render() {
    return (
      <AppRouter/>
    );
  }
}

export default App;