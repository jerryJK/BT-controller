import React, { Component } from 'react';
import { AppContainer, ControlWrapper, Title, Header, BluetoothIconButton, FullScreenIconButton, LightsIconButton } from './App.s';
import { RangeComponent } from '../components/RangeController/RangeController'; 
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import BluetoothConnectedIcon from '@material-ui/icons/BluetoothConnected';
import FullScreenIcon from '@material-ui/icons/Fullscreen';  
import FullScreenExitIcon from '@material-ui/icons/FullscreenExit'; 
import LightsIcon from '@material-ui/icons/WbSunny'; 


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      fullScreen: false,
      lightsOn: false
    }
  }

  getBluetoothButton = () => {
    return this.state.connected ? <BluetoothConnectedIcon /> : <BluetoothIcon />
  }

  getFullScrennButton = () => {
    return this.state.fullScreen ?  <FullScreenExitIcon /> : <FullScreenIcon />
  }

  handleBluetoothButtonClick = () => {
    this.setState({connected: !this.state.connected})
  }

  handleFullScreenButtonClick = () => {
    this.setState({fullScreen: !this.state.fullScreen})
  }

  handleLightsButtonClick = () => {
    this.setState({lightsOn: !this.state.lightsOn})
  }

  render() {
    return (
      <AppContainer>
        <Header>
          <BluetoothIconButton 
            connected={this.state.connected} 
            onClick={() => this.handleBluetoothButtonClick()} >
            { this.getBluetoothButton() }
          </BluetoothIconButton>
          <Title>Lego Controller</Title>
          <FullScreenIconButton 
            onClick={() => this.handleFullScreenButtonClick()}>
            { this.getFullScrennButton() }
          </FullScreenIconButton>
        </Header>
        <LightsIconButton 
          lightsOn={this.state.lightsOn} 
          onClick={() => this.handleLightsButtonClick()}>
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
