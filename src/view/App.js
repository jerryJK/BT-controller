import React, { Component } from 'react';
import { SBrick } from '../lib/sbrick';
import { AppContainer, ControlWrapper, Title, Header, BluetoothIconButton, FullScreenIconButton, LightsIconButton } from './App.s';
import { RangeComponent } from '../components/RangeController/RangeController'; 
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import BluetoothConnectedIcon from '@material-ui/icons/BluetoothConnected';
import FullScreenIcon from '@material-ui/icons/Fullscreen';  
import FullScreenExitIcon from '@material-ui/icons/FullscreenExit'; 
import LightsIcon from '@material-ui/icons/WbSunny';
import { fullScreen } from '../utils/fullscreen';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      fullScreen: false,
      lightsOn: false,
      leftMotorPower: 0,
      rightMotorPower: 0,
      sbrick: new SBrick(),
    }
    this.MIN_POWER = 0
    this.MAX_POWER = 255
    this.PORT = 0x00
    this.CW = 0x00
  }

  setConnect = (val) => {
    this.setState({connected: val})
  }

  getBluetoothButton = () => {
    return this.state.connected ? <BluetoothConnectedIcon /> : <BluetoothIcon />
  }

  getFullScreenButton = () => {
    return this.state.fullScreen ? <FullScreenExitIcon /> : <FullScreenIcon />
  }

  handleBluetoothButtonClick = () => {
    this.state.connected 
    ? this.state.sbrick.disconnect(this.setConnect) 
    : this.state.sbrick.connect(this.setConnect)
  }

  handleFullScreenButtonClick = () => {
    fullScreen(this.state.fullScreen)
    this.setState({fullScreen: !this.state.fullScreen})
  }

  handleLightsButtonClick = () => {
    const lightsPower = this.state.lightsOn ? this.MIN_POWER : this.MAX_POWER;
    this.state.sbrick.drive( this.PORT, this.CW, lightsPower )
    this.setState({lightsOn: !this.state.lightsOn})
  }

  render() {
    const { sbrick, connected, lightsOn } = this.state;

    return (
      <AppContainer>
        <Header>
          <BluetoothIconButton 
            connected={connected} 
            onClick={this.handleBluetoothButtonClick} >
            {this.getBluetoothButton()  }
          </BluetoothIconButton>
          <Title>Lego Controller</Title>
          <FullScreenIconButton 
            onClick={this.handleFullScreenButtonClick}>
            {this.getFullScreenButton()}
          </FullScreenIconButton>
        </Header>
        <LightsIconButton 
          lightsOn={lightsOn} 
          onClick={this.handleLightsButtonClick}>
          <LightsIcon fontSize="small"  />
        </LightsIconButton>
        <ControlWrapper>
          <RangeComponent sbrick={sbrick} left />
          <RangeComponent sbrick={sbrick} right />
        </ControlWrapper>
      </AppContainer>
    );
  }
}

export default App;
