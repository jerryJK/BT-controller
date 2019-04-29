import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { Container } from './App.s';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      connected: false,
      device: null,
      gattServer: null
    }
    this.UUID_SERVICE_REMOTECONTROL = "4dc591b0-857c-41de-b5f1-15abda665b0c";
    this.UUID_CHARACTERISTIC_REMOTECONTROL = "02b8cbcc-0e25-4bda-8790-a15f53e6010f";
  }


  connectDevice = () => {
    const options = {
      acceptAllDevices: true
    }
    navigator.bluetooth.requestDevice(options)
    .then(device => {
      this.setState({device: device})
      console.log('Connecting to GATT Server...');
      return device.gatt.connect();
    })
    .then(server => {
      console.log('> Connected:        ' + server.connected);
      this.setState({connected: server.connected, gattServer: server})
    })
    .catch(error => {
      console.log('Argh! ' + error);
    });
  }

  getDeviceInfo = () => {
    console.log('> Name:             ' + this.state.device.name);
    console.log('> Id:               ' + this.state.device.id);
    console.log('> Connected:        ' + this.state.device.gatt.connected);
}

  getGattServerInfo = () => {
    console.log(this.state.gattServer)
  }

  getRemoteControlCharacteristics = () => {
    console.log('Getting Service...');
    this.state.gattServer.getPrimaryService(this.UUID_SERVICE_REMOTECONTROL)
    .then(service => {
      console.log(service)
      console.log('Getting Characteristics...');
      if (this.UUID_CHARACTERISTIC_REMOTECONTROL) {
        // Get all characteristics that match this UUID.
        return service.getCharacteristics(this.UUID_CHARACTERISTIC_REMOTECONTROL);
      }
      // Get all characteristics.\
      return service.getCharacteristics();
    })
    .then(characteristics => {
      console.log(characteristics)
    })
    .catch(error => {
      console.log('Argh! ' + error);
    });
  }

  writeValue1 = (value) => {
    this.state.gattServer.getPrimaryService(this.UUID_SERVICE_REMOTECONTROL)
    .then(service => {
      return service.getCharacteristics(this.UUID_CHARACTERISTIC_REMOTECONTROL);
    })
    .then(characteristics => {
      characteristics[0].writeValue(
        new Uint8Array([ 0x01, 0x00, 0x00, value ]));
    })
    .catch(error => {
      console.log('Argh! ' + error);
    });
  }

  writeValue2 = (value) => {
    this.state.gattServer.getPrimaryService(this.UUID_SERVICE_REMOTECONTROL)
    .then(service => {
      return service.getCharacteristics(this.UUID_CHARACTERISTIC_REMOTECONTROL);
    })
    .then(characteristics => {
      characteristics[0].writeValue(
        new Uint8Array([ 0x01, 0x03, 0x00, value ]));
    })
    .catch(error => {
      console.log('Argh! ' + error);
    });
  }

  disconnectDevice = () => {
    this.state.gattServer.disconnect()
    this.setState({connected: this.state.device.connected})
  }

  render() {

    return (
      <Container>
        {this.state.connected && 'connected'}
        <Button color="primary" onClick={this.connectDevice}>Connect</Button>
        <Button color="primary" onClick={this.getDeviceInfo}>Device info</Button>
        <Button color="primary" onClick={this.getGattServerInfo}>Gatt Server</Button>
        <Button color="primary" onClick={this.getRemoteControlCharacteristics}>service & characteristic</Button>
        <Button color="primary" onClick={() => this.writeValue1(255)}>write value1</Button>
        <Button color="primary" onClick={() => this.writeValue2(255)}>write value2</Button>
        <Button color="primary" onClick={this.disconnectDevice}>Disconnect</Button>
      </Container>
    );
  }
}

export default App;
