import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';

export const AppContainer = styled.div`
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Header = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`


export const ControlWrapper = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h3`
  color: white;
  text-align: center;
  font-size: 3vw;
  letter-spacing: .1em;
  font-family:  'Lato', san-serif;
`

export const BluetoothIconButton = styled(IconButton)`
  && {
    margin: 30px;
    color: white;
  }
`

export const FullScreenIconButton = styled(IconButton)`
  && {
    margin: 30px;
    color: white;
  }
`

export const LightsIconButton = styled(Fab)`
  && {
    width: 44px;
    position: relative;
    left: 20%;
    top: 15%;
    background-color: white;
    color: black;
  }
`
