import styled from 'styled-components';

export const ControllerWrapper = styled.div`
  width: 200px;
  height: 200px;
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
  -webkit-appearance: none; /* Hides the slider so that custom slider can be made */
  background: transparent;

    &:focus {
      outline: none; /* Removes the blue border. */
    }

    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      border: 1px solid #000000;
      height: 56px;
      width: 56px;
      border-radius: 50%;
      background: #ffffff;
      cursor: pointer;
      margin-top: -14px; /* You need to specify a margin in Chrome, but in Firefox and IE it is automatic */
      box-shadow: 0px 1px 3px #000000, 0px 0px 0px #0d0d0d; /* Add cool effects to your sliders! */
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
