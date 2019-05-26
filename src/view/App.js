import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Container } from './App.s';

export const App = () => {

  const [connected, setConnected] = useState(false);
  const [gattServer, setGatServer] = useState(null);
  
  const UUID_SERVICE_REMOTECONTROL = "4dc591b0-857c-41de-b5f1-15abda665b0c";
  const UUID_CHARACTERISTIC_REMOTECONTROL = "02b8cbcc-0e25-4bda-8790-a15f53e6010f";

  const connectDevice = () => {
    const options = {
      //acceptAllDevices: true,
      filters: [ {name: 'SBrick'} ],
      optionalServices: [UUID_SERVICE_REMOTECONTROL]
    }
    navigator.bluetooth.requestDevice(options)
    .then(device => {
      console.log('Connecting to GATT Server...');
      return device.gatt.connect();
    })
    .then(server => {
      console.log('> Connected:        ' + server.connected);
      console.log('> Gatt server:');
      console.log(server)
      setGatServer(server);
      setConnected(true);
    })
    .catch(error => {
      console.log('Argh! ' + error);
    });
  }

  const writeValue1 = (value) => {
    gattServer.getPrimaryService(UUID_SERVICE_REMOTECONTROL)
    .then(service => {
      return service.getCharacteristics(UUID_CHARACTERISTIC_REMOTECONTROL);
    })  
    .then(characteristics => {
      characteristics[0].writeValue(
        new Uint8Array([ 0x01, 0x00   , 0x00, value ]));
    })
    .catch(error => {
      console.log('Argh! ' + error);
    });
  }

  const writeValue2 = (value) => {
    gattServer.getPrimaryService(UUID_SERVICE_REMOTECONTROL)
    .then(service => {
      return service.getCharacteristics(UUID_CHARACTERISTIC_REMOTECONTROL);
    })
    .then(characteristics => {
      characteristics[0].writeValue(
        new Uint8Array([ 0x01, 0x03, 0x00, value ]));
    })
    .catch(error => {
      console.log('Argh! ' + error);
    });
  }

  const disconnectDevice = () => {
    gattServer.disconnect()
    setConnected(false);
  }

  return (
    <Container>
      {connected && 'connected'}
      <Button color="primary" onClick={connectDevice}>Connect</Button>
      <Button color="primary" onClick={() => writeValue1(255)}>write value1</Button>
      <Button color="primary" onClick={() => writeValue2(255)}>write value2</Button>
      <Button color="primary" onClick={disconnectDevice}>Disconnect</Button>
    </Container>
  );

}
