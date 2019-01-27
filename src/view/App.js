import React, { Component } from 'react';
import { AppContainer, ControlWrapper, Title, Header, BluetoothIconButton, FullScreenIconButton, LightsIconButton } from './App.s';
import { RangeComponent } from '../components/RangeController/RangeController'; 
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import BluetoothConnectedIcon from '@material-ui/icons/BluetoothConnected';
import FullScreenIcon from '@material-ui/icons/Fullscreen';  
import FullScreenExitIcon from '@material-ui/icons/FullscreenExit'; 
import LightsIcon from '@material-ui/icons/WbSunny'; 


class App extends Component {
  render() {
    return (
      <AppContainer>
        <Header>
          <BluetoothIconButton>
            <BluetoothIcon/>
          </BluetoothIconButton>
          <Title>Lego Controller</Title>
          <FullScreenIconButton>
            <FullScreenIcon/>
          </FullScreenIconButton>
        </Header>
        <LightsIconButton>
          <LightsIcon fontSize="medium"  />
        </LightsIconButton>
        <ControlWrapper>
          <RangeComponent/>
          <RangeComponent/>
        </ControlWrapper>
      </AppContainer>
    );
  }
}

export default App;
