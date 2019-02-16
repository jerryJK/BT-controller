import styled from 'styled-components';

export const ControllerWrapper = styled.div`
  width: 150px;
  height: 150px;
  display: flex;
  justify-content: center;
`

export const Controller = styled.input`
  width: 100%;
  boxShadow: inset 0px 1px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  border: none;
  transform: rotate(-90deg);
  background: transparent;
  font-size: 1em;
  cursor: pointer;
  -webkit-appearance: none;
  background: transparent;

    &:focus {
      outline: none;
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: 1px solid #000000;
      height: 56px;
      width: 56px;
      border-radius: 50%;
      background: #ffffff;
      cursor: pointer;
      margin-top: -14px;
      box-shadow: 0px 1px 3px #000000, 0px 0px 0px #0d0d0d;
    }

    &::-webkit-slider-runnable-track {
      height: 30px;
      cursor: pointer;
      box-shadow: 1px 1px 1px #000000, 0px 0px 1px #0d0d0d;
      background: grey;
      border-radius: 10px;
      border: 0.4px solid #010101;

    }
  
`
