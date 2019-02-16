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
      lights: false,
      leftMotor: 0,
      rightMotor: 0,
      sbrick: new SBrick(),
    }
  }

  setConnect = (val) => {
    this.setState({connected: val})
  }

  getBluetoothButton = () => {
    return !!this.state.connected ? <BluetoothConnectedIcon /> : <BluetoothIcon />
  }

  getFullScrennButton = () => {
    return this.state.fullScreen ?  <FullScreenExitIcon /> : <FullScreenIcon />
  }

  handleBluetoothButtonClick = () => {
    !!this.state.connected ? this.state.sbrick.disconnect(this.setConnect) : this.state.sbrick.connect(this.setConnect)
  }

  handleFullScreenButtonClick = () => {
    fullScreen(this.state.fullScreen)
    this.setState({fullScreen: !this.state.fullScreen})
  }

  handleLightsButtonClick = () => {
    const lightsVolt = this.state.lights ? 0 : 255;
    this.state.sbrick.drive( 0x00, this.state.sbrick.CW, lightsVolt )
    this.setState({lights: !this.state.lights})
  }

  render() {
    console.log(this.state.sbrick.isON)
    return (
      <AppContainer>
        <button onClick={() => console.log(this.state.sbrick.isON) }>test</button>
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
          lights={this.state.lights} 
          onClick={() => this.handleLightsButtonClick()}>
          <LightsIcon fontSize="small"  />
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
