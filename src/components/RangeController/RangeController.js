import React from "react";
import { ControllerWrapper, Controller } from "./RangeController.s";

export class RangeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };
  }

  handleOnChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
  
    return (
      <ControllerWrapper>
          <Controller
            name='controller'
            type='range'
            min="-255"
            max="255"
            value={this.state.value}
            onChange={this.handleOnChange}
            onTouchEnd={() => {
              this.setState({value: 0});
            }}
            onMouseUp={() => {
              this.setState({value: 0});
            }}
          />
      </ControllerWrapper>
    )
  }
}
