import React, { Component } from 'react';
import { AppContainer, ControlWrapper, ControlPanel, Title } from './App.s';
import { RangeComponent } from '../components/RangeController/RangeController';

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Title>Lego Controller</Title>
        <ControlWrapper>
          <RangeComponent/>
          <RangeComponent/>
        </ControlWrapper>
      </AppContainer>
    );
  }
}

export default App;
