import React from "react";
import { ControllerWrapper, Controller } from "./RangeController.s";

export class RangeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      type: this.props.type
    };
    this.MIN_VALUE = "-255"
    this.MAX_VALUE = "255"
  }

  handleOnChange = (e) => {
    const { PORT1, PORT3, CW, CCW } = this.props.sbrick;
    const port = this.props.left ? PORT3 : PORT1;
    let direction = this.props.left 
      ? e.target.value < 0 ? CW : CCW
      : e.target.value < 0 ? CCW : CW
    this.setState({
      value: e.target.value
    })
    this.props.sbrick.drive( port, direction, e.target.value )
  }

  setSbrickDriveValue = (val) => {
    const { PORT1, PORT3, CW } = this.props.sbrick;
    const port = this.props.left ? PORT3 : PORT1;
    this.setState({value: val});
    this.props.sbrick.drive( port, CW, val )
  }

  render() {
  
    return (
      <ControllerWrapper>
          <Controller
            name='controller'
            type='range'
            min={this.MIN_VALUE}
            max={this.MAX_VALUE}
            value={this.state.value}
            onChange={this.handleOnChange}
            onTouchEnd={() => {
              this.setSbrickDriveValue(0);
            }}
            onMouseUp={() => {
              this.setSbrickDriveValue(0);
            }}
          />
      </ControllerWrapper>
    )
  }
}
